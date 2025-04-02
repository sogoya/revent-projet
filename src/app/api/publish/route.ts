import { NextResponse } from "next/server";

let articles: any[] = []; // Stockage temporaire en mémoire

export async function POST(req: Request) {
  try {
    const { title, description, category, price, images } = await req.json();

    if (!title || !description || !category || !price || images.length === 0) {
      return NextResponse.json(
        { message: "Données incomplètes" },
        { status: 400 }
      );
    }

    const newArticle = {
      id: articles.length + 1,
      title,
      description,
      category,
      price,
      images,
    };
    articles.push(newArticle);

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(articles, { status: 200 });
}
