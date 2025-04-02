"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

const reviewsData = [
  {
    id: 1,
    user: "gaiotta21",
    avatar: "G",
    text: "stupendi, puliti e profumati!! lei gentilissima ..grazie!",
    type: "membre",
    date: "il y a 1 semaine",
  },
  {
    id: 2,
    user: "Vinted",
    avatar: "V",
    text: "Recensione automatica: Vendita completata correttamente",
    type: "automatique",
    date: "il y a 1 semaine",
  },
  {
    id: 3,
    user: "elisaluna82",
    avatar: "E",
    text: "Tutto perfetto 👍👍👍",
    type: "membre",
    date: "il y a 1 semaine",
  },
  {
    id: 4,
    user: "sdine33",
    avatar: "S",
    text: "Vendeuse au top, emballage soigné, produit conforme, vendeuse à recommander",
    type: "membre",
    date: "il y a 1 semaine",
  },
];

export default function Reviews() {
  const [filter, setFilter] = useState("toutes");

  const totalReviews = 435;
  const memberReviews = 374;
  const autoReviews = 61;
  const averageRating = 5.0;

  const filteredReviews =
    filter === "toutes"
      ? reviewsData
      : reviewsData.filter((review) => review.type === filter);

  return (
    <div className="w-full bg-white px-6 md:px-10 py-6">
      {/* En-tête des évaluations */}
      <div className="flex flex-wrap md:flex-col lg:flex-row justify-between items-center mb-6 gap-4">
        {/* Note globale */}
        <div className="flex items-center space-x-3 lg:space-x-6">
          <span className="text-4xl font-bold">{averageRating}</span>
          <div>
            <div className="flex text-yellow-500">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-lg" />
                ))}
            </div>
            <span className="text-gray-500 text-sm">({totalReviews} avis)</span>
          </div>
        </div>

        {/* Détail des évaluations */}
        <div className="text-sm text-gray-600 text-center md:text-left lg:flex lg:flex-col lg:items-start">
          <div className="flex items-center space-x-2">
            <span>Évaluations des membres ({memberReviews})</span>
            <span className="text-black font-semibold">{averageRating}</span>
            <FaStar className="text-yellow-500 text-xs" />
          </div>
          <div className="flex items-center space-x-2">
            <span>Évaluations automatiques ({autoReviews})</span>
            <span className="text-black font-semibold">{averageRating}</span>
            <FaStar className="text-yellow-500 text-xs" />
          </div>
        </div>

        {/* Lien d'explication */}
        <a href="#" className="text-sm text-teal-600 hover:underline">
          Comment fonctionnent les évaluations ?
        </a>
      </div>

      {/* Boutons de filtre */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
        {["toutes", "membre", "automatique"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 text-sm font-semibold rounded-full ${
              filter === type
                ? "bg-teal-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Liste des avis */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className={`flex ${
              /* Version mobile et tablette */
              "flex-col md:flex-row items-start space-x-0 md:space-x-4"
            } lg:flex-row lg:items-center lg:justify-between border-b pb-3 py-6`}
          >
            {/* Avatar */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-300 text-white font-semibold">
              {review.avatar}
            </div>
            {/* Contenu de l’avis */}
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">{review.user}</span>
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="text-gray-700 text-sm">{review.text}</p>
            </div>
            {/* Date */}
            <span className="text-gray-500 text-xs">{review.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
