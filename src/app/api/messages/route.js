let messages = [
  {
    id: 1,
    sender: "alessiadl23",
    content: "Salut",
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    sender: "Moi",
    content: "Salut",
    timestamp: new Date().toISOString(),
  },
];

export async function GET() {
  return Response.json(messages);
}

export async function POST(req) {
  const { sender, content } = await req.json();
  if (!sender || !content) {
    return Response.json({ error: "Données manquantes" }, { status: 400 });
  }

  const newMessage = {
    id: messages.length + 1,
    sender,
    content,
    timestamp: new Date().toISOString(),
  };

  messages.push(newMessage);

  return Response.json(newMessage, { status: 201 });
}
