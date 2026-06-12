export async function onRequestPost(context) {
  const { request, env } = context;

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (data._honey) {
    return Response.json({ success: true });
  }

  const formType = data.form_type || 'Contact';
  const subject = `[Bird & Yang] New ${formType} from ${data.name || 'Unknown'}`;

  const rows = Object.entries(data)
    .filter(([k]) => !k.startsWith('_') && k !== 'form_type' && k !== 'disclaimer')
    .map(([k, v]) => `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:8px 12px">${escapeHtml(v) || '—'}</td></tr>`)
    .join('');

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1a2a3a;border-bottom:2px solid #c9a84c;padding-bottom:8px">${escapeHtml(formType)}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows}
      </table>
      <p style="margin-top:24px;font-size:12px;color:#888">Sent from birdyang.pages.dev contact form</p>
    </div>
  `;

  const text = Object.entries(data)
    .filter(([k]) => !k.startsWith('_') && k !== 'form_type' && k !== 'disclaimer')
    .map(([k, v]) => `${k}: ${v || '—'}`)
    .join('\n');

  const cfAccountId = env.CF_ACCOUNT_ID || 'b34f3ff4aec4c36584672d5bf1320757';
  const cfEmailToken = env.CF_EMAIL_TOKEN;

  try {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${cfAccountId}/email/sending/send`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${cfEmailToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'zhengchao.qqqqq@gmail.com',
          from: { address: 'forms@uni-scrm.com', name: 'Bird & Yang Website' },
          reply_to: data.email || undefined,
          subject,
          html,
          text,
        }),
      }
    );

    if (res.ok) {
      return Response.json({ success: true });
    }

    const err = await res.text();
    console.error('Email API error:', res.status, err);
    return Response.json({ success: false, error: 'Failed to send' }, { status: 500 });
  } catch (e) {
    console.error('Email send exception:', e);
    return Response.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
