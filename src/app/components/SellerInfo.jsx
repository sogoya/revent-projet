"use client";

import { FaStar, FaGlobeEurope } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";

export default function SellerInfo() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" space-y-4 ">
      {/* Protection Acheteurs */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white ">
        <div className="flex items-center space-x-2 text-teal-600">
          <HiCheckCircle className="text-xl" />
          <h3 className="font-semibold">Frais de Protection acheteurs</h3>
        </div>
        <p className="text-gray-700 text-sm mt-1">
          Pour tout achat effectué par le biais du bouton Acheter, nous
          appliquons des frais couvrant notre{" "}
          <span className="text-teal-600 cursor-pointer font-medium">
            Protection acheteurs
          </span>
          . Cette Protection acheteurs comprend notre{" "}
          <span className="text-teal-600 cursor-pointer font-medium">
            Politique de remboursement
          </span>
          .
        </p>
      </div>

      {/* Profil Vendeur */}
      <div className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
        <div className="flex items-center space-x-3">
          <img
            src="/profile.png"
            alt="Profil"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h3 className="font-semibold">soundexam</h3>
            <div className="flex items-center text-yellow-500">
              <FaStar className="text-sm" />
              <span className="text-sm ml-1">840</span>
            </div>
          </div>
        </div>

        {/* Activité */}
        <div className="flex items-center space-x-2 mt-3">
          <IoPersonCircle className="text-xl text-gray-500" />
          <div>
            <p className="font-semibold">Publie activement</p>
            <p className="text-gray-600 text-sm">
              Publie régulièrement au moins 5 articles.
            </p>
          </div>
        </div>

        {/* Localisation */}
        <div className="flex items-center space-x-2 mt-3 text-gray-600">
          <FaGlobeEurope className="text-lg" />
          <p className="text-sm">Espagne</p>
        </div>

        {/* Statut */}
        <div className="flex items-center space-x-2 mt-2 text-gray-600">
          <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
          <p className="text-sm">Vu la dernière fois : il y a 6 minutes</p>
        </div>
      </div>

      {/* Loi et Protection */}
      <div className="text-gray-600 text-xs">
        <p>
          Les lois en matière de protection des consommateur·trices ne
          s’appliquent pas à tes achats effectués auprès d’autres
          consommateur·trices.
          {showMore ? (
            <>
              {" "}
              Plus précisément, les achats entre particuliers ne sont pas
              couverts par les mêmes garanties que les achats professionnels.{" "}
              <span
                className="text-teal-600 font-medium cursor-pointer"
                onClick={() => setShowMore(false)}
              >
                Voir moins
              </span>
            </>
          ) : (
            <>
              {" "}
              <span
                className="text-teal-600 font-medium cursor-pointer"
                onClick={() => setShowMore(true)}
              >
                ... Voir plus
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
