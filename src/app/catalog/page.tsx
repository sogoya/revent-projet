"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LikeButton from "@/app/components/LikeButton";
import DressingComponent from "@/app/components/DressingComponent";
import GallerieDressing from "@/app/components/GallerieDressing";

const filterOptions = {
  Catégorie: "category",
  Taille: "size",
  Marque: "brand",
  État: "condition",
  Couleur: "color",
  Motif: "pattern",
  Prix: "priceRange",
  Matière: "material",
};

const filterValues = {
  Catégorie: ["Mode", "Électronique", "Accessoires"],
  Taille: ["XS", "S", "M", "L", "XL"],
  Marque: ["Nike", "Adidas", "Prada", "Balenciaga"],
  État: ["Neuf avec étiquette", "Très bon état", "Bon état"],
  Couleur: ["Noir", "Bleu", "Rouge", "Vert"],
  Motif: ["Uni", "Rayures", "Imprimé"],
  Prix: ["Moins de 10€", "10€ - 50€", "50€ - 100€", "100€+"],
  Matière: ["Coton", "Cuir", "Polyester", "Jean"],
};

const products = [
  {
    id: 1,
    slug: "prada",
    name: "Prada",
    category: "Mode",
    size: "M",
    brand: "Prada",
    condition: "Neuf avec étiquette",
    price: "3,00 €",
    totalPrice: "3,85 € incl.",
    color: "Noir",
    image: "/paire-2.jpeg",
    likes: 15,
  },
  {
    id: 2,
    slug: "balenciaga",
    name: "Balenciaga",
    category: "Mode",
    size: "L",
    brand: "Balenciaga",
    condition: "Très bon état",
    price: "1,00 €",
    totalPrice: "1,75 € incl.",
    color: "Noir",
    image: "/paire.jpeg",
    likes: 8,
  },
  {
    id: 3,
    slug: "balenciaga",
    name: "Balenciaga",
    category: "Mode",
    size: "L",
    brand: "Balenciaga",
    condition: "Très bon état",
    price: "1,00 €",
    totalPrice: "1,75 € incl.",
    color: "Noir",
    image: "/paire-2.jpeg",
    likes: 8,
  },
  {
    id: 4,
    slug: "balenciaga",
    name: "Balenciaga",
    category: "Mode",
    size: "L",
    brand: "Balenciaga",
    condition: "Très bon état",
    price: "1,00 €",
    totalPrice: "1,75 € incl.",
    color: "Noir",
    image: "/paire-3.jpeg",
    likes: 8,
  },
  {
    id: 2,
    slug: "balenciaga",
    name: "Balenciaga",
    category: "Mode",
    size: "L",
    brand: "Balenciaga",
    condition: "Très bon état",
    price: "1,00 €",
    totalPrice: "1,75 € incl.",
    color: "Noir",
    image: "/paire.jpeg",
    likes: 8,
  },
];

export default function CategoryComponent() {
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterSelect = (filter, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: option,
    }));
    setOpenFilter(null);
  };

  const filteredProducts = products.filter((product) => {
    return Object.entries(selectedFilters).every(([filterKey, value]) => {
      if (!value) return true;
      const productKey = filterOptions[filterKey];
      return productKey && product[productKey] === value;
    });
  });

  return (
    <div className="p-4 mt-5">
      <h2 className="text-2xl font-bold">Articles</h2>
      <div className="flex flex-wrap gap-2 mb-6 mt-6">
        {Object.keys(filterValues).map((filterKey) => (
          <div key={filterKey} className="relative">
            <button
              className={`px-3 py-1 border border-teal-600 rounded-md text-sm transition ${
                openFilter === filterKey
                  ? "bg-teal-600 text-white"
                  : "text-teal-600 hover:bg-teal-700 hover:text-white"
              }`}
              onClick={() =>
                setOpenFilter(openFilter === filterKey ? null : filterKey)
              }
            >
              {filterKey}
            </button>

            {openFilter === filterKey && (
              <div className="absolute mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-10">
                {filterValues[filterKey].map((option) => (
                  <button
                    key={option}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => handleFilterSelect(filterKey, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[85%]">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
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
                <h3 className="text-xs font-semibold text-gray-500">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-xs">{product.size}</p>
                <p className="text-xs text-gray-500">{product.price}</p>
                <p className="text-green-700 text-xs font-bold">
                  {product.totalPrice}
                </p>
                <LikeButton initialLikes={product.likes} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            Aucun produit ne correspond aux filtres sélectionnés.
          </p>
        )}
      </div>
      <DressingComponent />
      <GallerieDressing />
    </div>
  );
}
