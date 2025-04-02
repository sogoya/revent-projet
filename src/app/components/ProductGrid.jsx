"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LikeButton from "./LikeButton";

export default function Gallery() {
  const maxVisible = 15;
  const [totalProducts, setTotalProducts] = useState(null);
  const [products, setProducts] = useState([]); // 🔹 Initialiser products comme un tableau vide

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();

        setTotalProducts(data.totalArticles);
        setProducts(data.products || []); // 🔹 Assurer que products est toujours un tableau
      } catch (error) {
        console.error("Erreur lors du chargement des produits :", error);
      }
    }

    fetchProducts();
  }, []);

  const displayedProducts = products.slice(0, maxVisible); // ✅ Maintenant products est bien défini

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        {totalProducts !== null
          ? `(${totalProducts}) articles disponibles`
          : "Chargement..."}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {displayedProducts.map((product, index) => (
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

      {totalProducts !== null && totalProducts > maxVisible && (
        <div className="mt-4 text-center">
          <Link href="/membres" className="text-teal-600 font-bold">
            Voir tous les articles ({totalProducts})
          </Link>
        </div>
      )}
    </div>
  );
}
