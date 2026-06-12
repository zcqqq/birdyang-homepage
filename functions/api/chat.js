export async function onRequestPost(context) {
  const { request, env } = context;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, error: 'Invalid JSON' },
      { status: 400, headers: corsHeaders }
    );
  }

  const query = (body.query || '').trim();
  if (query.length < 3) {
    return Response.json(
      { success: false, error: 'Query too short (min 3 characters)' },
      { status: 400, headers: corsHeaders }
    );
  }

  const truncated = query.slice(0, 500);

  try {
    const embeddingResult = await env.AI.run('@cf/baai/bge-base-en-v1.5', {
      text: [truncated]
    });
    const queryVector = embeddingResult.data[0];

    const stored = await env.QA_KV.get('qa-embeddings-v1', { type: 'json' });
    if (!stored || !stored.embeddings) {
      return Response.json(
        { success: false, error: 'Embeddings not initialized' },
        { status: 503, headers: corsHeaders }
      );
    }

    const scores = stored.embeddings.map(item => ({
      id: item.id,
      score: cosineSimilarity(queryVector, item.vector)
    }));
    scores.sort((a, b) => b.score - a.score);

    const bankResp = await env.QA_KV.get('qa-bank-v1', { type: 'json' });
    let bank;
    if (bankResp) {
      bank = bankResp;
    } else {
      const bankUrl = new URL('/data/qa-bank.json', request.url);
      const bankFetch = await fetch(bankUrl.toString());
      bank = await bankFetch.json();
    }

    const pairsMap = {};
    for (const p of bank.pairs) {
      pairsMap[p.id] = p;
    }

    const topScore = scores[0].score;

    if (topScore >= 0.85) {
      const match = pairsMap[scores[0].id];
      return Response.json({
        success: true,
        type: 'match',
        matches: [{
          id: match.id,
          question: match.question,
          answer: match.answer,
          category: match.category,
          score: topScore
        }]
      }, { headers: corsHeaders });
    }

    if (topScore >= 0.70) {
      const suggestions = scores.slice(0, 3)
        .filter(s => s.score >= 0.65)
        .map(s => {
          const p = pairsMap[s.id];
          return {
            id: p.id,
            question: p.question,
            answer: p.answer,
            category: p.category,
            score: s.score
          };
        });
      return Response.json({
        success: true,
        type: 'suggestions',
        matches: suggestions
      }, { headers: corsHeaders });
    }

    return Response.json({
      success: true,
      type: 'no_match',
      message: "I couldn't find a matching answer. Would you like to speak with our team?",
      contactUrl: '/contact.html#book'
    }, { headers: corsHeaders });

  } catch (err) {
    return Response.json(
      { success: false, error: 'Internal error' },
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}

function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}
