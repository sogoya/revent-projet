"use client";

import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton"; // Import du bouton
import { useState } from "react";

const products = [
  {
    slug: "pull-beige",
    name: "Jersey Jaspé",
    brand: "Vintage Dressing",
    size: "L / 40 / 12",
    price: "26,95 €",
    priceIncl: "27,50 € incl.",
    image: "/pare-1.jpeg",
    likes: 20,
  },
  {
    slug: "chemise-hm",
    name: "H&M",
    size: "L / 40 / 12",
    price: "15,00 €",
    priceIncl: "16,45 € incl.",
    image: "/paire.jpeg",
    likes: 9,
  },
  {
    slug: "pull-beige",
    name: "Jersey Jaspé",
    brand: "Vintage Dressing",
    size: "L / 40 / 12",
    price: "26,95 €",
    priceIncl: "27,50 € incl.",
    image: "/paire-2.jpeg",
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

export default function Gallery() {
  return (
    <div className="p-4 w-[80%]">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {products.map((product, index) => (
          <div
            key={index}
            className="overflow-hidden cursor-pointer hover:shadow-md transition relative"
          >
            <Link href={`/produits/${product.slug}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={500}
                className="w-full h-[350px] object-cover border rounded-lg"
              />
            </Link>
            <div className="p-2 relative mt-1">
              <p className="mb-2">
                <h3 className="text-xs font-semibold text-gray-500">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs">{product.size}</p>
              </p>
              <p className="text-xs text-gray-500">{product.price}</p>
              <p className="text-teal-700 text-xs font-bold">
                {product.priceIncl}
              </p>

              {/* Ajout du bouton de like */}
              <LikeButton initialLikes={product.likes} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
