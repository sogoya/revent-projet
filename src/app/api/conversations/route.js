export async function GET() {
  return Response.json([
    { id: 1, name: "Nathan", lastMessage: "Salut !" },
    { id: 2, name: "Emma", lastMessage: "Comment ça va ?" },
  ]);
}
