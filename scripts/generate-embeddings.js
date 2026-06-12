#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;
const API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
const KV_NAMESPACE_ID = '0a5adbe0c71043859e7bdeda8a7649db';
const MODEL = '@cf/baai/bge-base-en-v1.5';

if (!ACCOUNT_ID || !API_TOKEN) {
  console.error('Required env vars: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN');
  process.exit(1);
}

async function generateEmbeddings() {
  const bankPath = path.join(__dirname, '..', 'data', 'qa-bank.json');
  const bank = JSON.parse(fs.readFileSync(bankPath, 'utf8'));

  console.log(`Loaded ${bank.pairs.length} Q&A pairs`);

  const texts = bank.pairs.map(p => p.question);

  console.log(`Generating embeddings via ${MODEL}...`);
  const aiResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/ai/run/${MODEL}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: texts })
    }
  );

  if (!aiResp.ok) {
    const err = await aiResp.text();
    console.error('AI API error:', aiResp.status, err);
    process.exit(1);
  }

  const aiData = await aiResp.json();
  const vectors = aiData.result.data;

  if (!vectors || vectors.length !== bank.pairs.length) {
    console.error(`Expected ${bank.pairs.length} vectors, got ${vectors ? vectors.length : 0}`);
    process.exit(1);
  }

  console.log(`Got ${vectors.length} embeddings (dim=${vectors[0].length})`);

  const payload = {
    model: MODEL,
    generatedAt: new Date().toISOString(),
    embeddings: bank.pairs.map((p, i) => ({
      id: p.id,
      vector: vectors[i]
    }))
  };

  console.log('Writing embeddings to KV...');
  const kvResp = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/storage/kv/namespaces/${KV_NAMESPACE_ID}/values/qa-embeddings-v1`,
    {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }
  );

  if (!kvResp.ok) {
    const err = await kvResp.text();
    console.error('KV write error:', kvResp.status, err);
    process.exit(1);
  }

  console.log('Done. Embeddings stored in KV under key "qa-embeddings-v1".');
}

generateEmbeddings().catch(err => {
  console.error(err);
  process.exit(1);
});
