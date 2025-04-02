"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import Reviews from "./Reviews";
import Dressing from "./Dressing";

export default function Profile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "dressing"; // Défaut : Dressing

  // Fonction pour changer d'onglet et modifier l'URL
  const handleTabChange = (newTab) => {
    router.push(`?tab=${newTab}`, { scroll: false });
  };

  return (
    <div className="w-full bg-white">
      <div className="bg-gray-100">
        {/* En-tête du profil */}
        <div className="w-full py-6 px-4 md:px-10 border border-b-slate-400">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Image de profil */}
            <img
              src="/profile.png"
              alt="Profil"
              className="w-24 h-24 rounded-full border object-cover"
            />
            {/* Informations */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-xl font-semibold">alessiadl23</h2>
              <div className="flex items-center justify-center md:justify-start text-yellow-500">
                <FaStar className="text-sm" />
                <span className="ml-1 font-medium">435 évaluations</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                <HiCheckCircle className="text-teal-600 text-lg" />
                <p className="text-gray-600 text-sm">
                  Publie activement (5 articles min.)
                </p>
              </div>
            </div>
            {/* Bouton suivre */}
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-teal-700">
              Suivre
            </button>
          </div>
        </div>

        {/* Section informations */}
        <div className="px-4 md:px-10 py-4 flex flex-col md:flex-row justify-start items-center md:items-start gap-5 max-w-screen-md mx-auto">
          {/* À Propos */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-700 mb-1">À Propos</h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>
                📍 <span className="font-semibold">Italie</span>
              </p>
              <p>• Connecté(e) il y a 1 minute</p>
              <p>
                📢 <span className="font-semibold">1239 Abonnés</span>,{" "}
                <span className="font-semibold">22 Abonnements</span>
              </p>
            </div>
          </div>

          {/* Vérifications */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-gray-700">
              Informations vérifiées :
            </h3>
            <div className="text-gray-600 mt-1 space-y-1">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCheckCircle className="text-teal-700" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCheckCircle className="text-teal-700" />
                <span>Google</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <FaCheckCircle className="text-teal-700" />
                <span>Email</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm px-4 md:px-10 mt-2 text-center md:text-left max-w-screen-md mx-auto">
          Vinted è una realtà comoda per dare una seconda vita a cose che non
          utilizzo più e che non ho mai utilizzato, ed anche per trovare delle
          cose interessanti!
          <span className="text-teal-600 cursor-pointer font-medium">
            {" "}
            Voir plus
          </span>
        </p>

        {/* Navigation (Onglets) */}
        <div className="border-b border-gray-300 mt-6 flex px-4 md:px-10 space-x-6">
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              tab === "dressing"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
            onClick={() => handleTabChange("dressing")}
          >
            Dressing
          </button>
          <button
            className={`py-2 px-4 text-sm font-semibold ${
              tab === "feedback"
                ? "text-teal-600 border-b-2 border-teal-600"
                : "text-gray-600"
            }`}
            onClick={() => handleTabChange("feedback")}
          >
            Évaluations
          </button>
        </div>
      </div>

      {/* Contenu dynamique */}
      <div className="mt-4  md:px-10 w-full">
        {tab === "dressing" ? <Dressing /> : <Reviews />}
      </div>
    </div>
  );
}
