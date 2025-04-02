"use client";

import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton";
import { useState, useEffect } from "react";

export default function Gallery() {
  const [productCount, setProductCount] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProductCount(data.totalArticles); // Mettre à jour le nombre d'articles
        setProducts(data.products); // Mettre à jour la liste des produits
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        Nombre d'articles : {productCount}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
              <p className="text-teal-600 text-xs font-bold">
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
