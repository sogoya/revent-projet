export async function GET() {
  const products = [
    {
      slug: "pull-beige",
      name: "Jersey Jaspé",
      brand: "Vintage Dressing",
      size: "L / 40 / 12",
      price: "26,95 €",
      priceIncl: "27,50 € incl.",
      image: "/chemise.jpeg",
      likes: 20,
    },
    {
      slug: "pull-beige",
      name: "Jersey Jaspé",
      brand: "Vintage Dressing",
      size: "L / 40 / 12",
      price: "26,95 €",
      priceIncl: "27,50 € incl.",
      image: "/chemise.jpeg",
      likes: 20,
    },
    {
      slug: "pull-beige",
      name: "Jersey Jaspé",
      brand: "Vintage Dressing",
      size: "L / 40 / 12",
      price: "26,95 €",
      priceIncl: "27,50 € incl.",
      image: "/chemise.jpeg",
      likes: 20,
    },
    {
      slug: "pull-beige",
      name: "Jersey Jaspé",
      brand: "Vintage Dressing",
      size: "L / 40 / 12",
      price: "26,95 €",
      priceIncl: "27,50 € incl.",
      image: "/chemise.jpeg",
      likes: 20,
    },
    {
      slug: "pull-beige",
      name: "Jersey Jaspé",
      brand: "Vintage Dressing",
      size: "L / 40 / 12",
      price: "26,95 €",
      priceIncl: "27,50 € incl.",
      image: "/chemise.jpeg",
      likes: 20,
    },

    {
      slug: "pull-beige",
      name: "Jersey Jaspé",
      brand: "Vintage Dressing",
      size: "L / 40 / 12",
      price: "26,95 €",
      priceIncl: "27,50 € incl.",
      image: "/paire-3.jpeg",
      likes: 20,
    },
  ];

  return Response.json({ totalArticles: products.length });
}
