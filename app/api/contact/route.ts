function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || name.length > 100 || !email || email.length > 254 || !message || message.length > 3500) {
    return Response.json({ error: 'Invalid contact details' }, { status: 400 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN ?? process.env.VITE_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID ?? process.env.VITE_CHAT_ID;

  if (!botToken || !chatId) {
    return Response.json({ error: 'Contact service is not configured' }, { status: 500 });
  }

  const telegramMessage = [
    '📬 <b>New portfolio message</b>',
    '',
    `👤 <b>Name:</b> ${escapeHtml(name)}`,
    `✉️ <b>Email:</b> ${escapeHtml(email)}`,
    '',
    '💬 <b>Message:</b>',
    escapeHtml(message),
  ].join('\n');

  try {
    const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML',
      }),
    });

    if (!telegramResponse.ok) {
      return Response.json({ error: 'Could not deliver message' }, { status: 502 });
    }

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: 'Could not deliver message' }, { status: 502 });
  }
}