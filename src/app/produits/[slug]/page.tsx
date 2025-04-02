"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import ProductGrid from "../../components/ProductGrid"; // ✅ Correction
import SellerInfo from "../../components/SellerInfo";
import Link from "next/link";

export default function ProductDetail({ params }) {
  // Simule les données du produit (remplace plus tard par un fetch vers ta BDD)
  const product = {
    id: 1,
    title: "Jersey jaspeado",
    price: "30",
    priceBefore: "30 ",
    finalPricefinalPrice: "26.95",
    brand: "Vintage Dressing",
    size: "L / 40 / 12",
    condition: "Très bon état",
    material: "Laine, Acrylique",
    color: "Beige, Crème",
    views: 20,
    images: ["/chemise.jpeg", "/chemise.jpeg", "/chemise.jpeg"],
    description:
      "Jersey de punto de beis con punto jaspeado más oscuro.Talla L. Está perfecto. Como nuevo.No pica. Acrílicos y lana.Vintage original. Muy noventero...Jersey de punto de beis con punto jaspeado más oscuro.Talla L Jersey de punto de beis con punto jaspeado más oscuro.Talla L. Está perfecto. Como nuevo.No pica. Acrílicos y lana.Vintage original. Muy noventero...Jersey de punto de beis con punto jaspeado más oscuro.Talla Jersey de punto de beis con punto jaspeado más oscuro.Talla L. Está perfecto. Como nuevo.No pica. Acrílicos y lana.Vintage original. Muy noventero...Jersey de punto de beis con punto jaspeado más oscuro.Talla",
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const router = useRouter();

  return (
    <div className="w-full min-h-screen flex flex-col p-4 bg-white">
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* Section des images */}
        <div className="w-full md:w-[70%] flex flex-col">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {/* Image principale */}
            <div
              className="col-span-2 row-span-2 cursor-pointer"
              onClick={() => setSelectedIndex(0)}
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-md"
              />
            </div>

            {/* Autres images */}
            {product.images.slice(1).map((image, index) => (
              <div
                key={index}
                className="w-full h-full cursor-pointer"
                onClick={() => setSelectedIndex(index + 1)}
              >
                <Image
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Section des informations produit */}
        <div className="w-full md:w-[32%] max-w-sm p-4 bg-white shadow-md rounded-lg border flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-600 text-sm">
              {product.size} · {product.condition} ·{" "}
              <span className="text-teal-600">{product.brand}</span>
            </p>

            {/* Prix */}
            <div className="mt-2 border-b border-gray-300 pb-2">
              <span className="text-gray-500 line-through">
                {product.priceBefore}€
              </span>
              <br />
              <span className="text-lg font-bold text-teal-700 ml-2">
                {product.price}€
              </span>
              <p className="text-xs text-teal-700">
                Inclut la Protection acheteurs
              </p>
            </div>

            {/* Détails */}
            <div className="mt-3 text-sm text-gray-700 border-b border-gray-300 pb-2 grid grid-cols-2 gap-y-2">
              <p className="font-semibold">Marque :</p>
              <p className="text-teal-600">{product.brand}</p>

              <p className="font-semibold">Taille :</p>
              <p>{product.size}</p>

              <p className="font-semibold">État :</p>
              <p>{product.condition}</p>

              <p className="font-semibold">Matière :</p>
              <p>{product.material}</p>

              <p className="font-semibold">Couleur :</p>
              <p>{product.color}</p>

              <p className="font-semibold">Nombre de vues :</p>
              <p>{product.views}</p>

              <p className="font-semibold">Ajouté :</p>
              <p>Il y a 37 minutes</p>
            </div>

            <p className="text-sm text-gray-600 mt-3">
              {isExpanded
                ? product.description
                : `${product.description.substring(0, 200)}...`}
              <span
                className="text-teal-600 cursor-pointer font-semibold ml-1"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? " voir moins" : " voir plus"}
              </span>
            </p>
          </div>

          {/* Boutons */}
          <div className="mt-4 space-y-2">
            <Link href="/checkout">
              <button className="w-full bg-teal-700 text-white py-2 rounded-md hover:bg-teal-800">
                Acheter
              </button>
            </Link>
            <button className="w-full border border-teal-700 text-teal-700 py-2 rounded-md hover:bg-teal-50">
              Faire une offre
            </button>

            <button
              className="w-full border border-gray-400 text-gray-700 py-2 rounded-md hover:bg-gray-100"
              onClick={() => {
                const url = `/messagerie?product=${
                  product.id
                }&title=${encodeURIComponent(
                  product.title
                )}&image=${encodeURIComponent(product.images[0])}${
                  product.price
                    ? `&price=${encodeURIComponent(String(product.price))}`
                    : ""
                }${
                  product.priceBefore
                    ? `&priceBefore=${encodeURIComponent(
                        String(product.priceBefore)
                      )}`
                    : ""
                }`;

                console.log("URL générée :", url);
                router.push(url);
              }}
            >
              Voir la messagerie
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox avec navigation */}
      {selectedIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50 transition-all duration-300">
          {/* Bouton de fermeture amélioré */}
          <button
            className="absolute top-5 right-5 bg-white text-black p-2 rounded-full text-2xl shadow-lg hover:bg-gray-200"
            onClick={() => setSelectedIndex(null)}
          >
            ✕
          </button>

          {/* Bouton précédent */}
          {product.images.length > 1 && (
            <button
              className="absolute left-5 bg-white text-black p-2 rounded-full text-2xl shadow-lg hover:bg-gray-200"
              onClick={handlePrev}
            >
              ◀
            </button>
          )}

          {/* Image sélectionnée */}
          <Image
            src={product.images[selectedIndex]}
            alt="Zoom"
            width={800}
            height={800}
            className="max-w-full max-h-screen object-contain rounded-lg"
          />

          {/* Bouton suivant */}
          {product.images.length > 1 && (
            <button
              className="absolute right-5 bg-white text-black p-2 rounded-full text-2xl shadow-lg hover:bg-gray-200"
              onClick={handleNext}
            >
              ▶
            </button>
          )}
        </div>
      )}

      <div className="w-full flex justify-between flex-col md:flex-row ">
        <div className=" w-full  flex flex-col">
          <ProductGrid />
        </div>
        <div className="w-full ml-8  max-w-sm bg-white py-2  flex flex-col justify-betwee">
          <SellerInfo />
        </div>
      </div>
    </div>
  );
}
