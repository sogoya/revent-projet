"use client";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";

export default function PaymentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  return (
    <div className="p-2 mt-10">
      <p className="text-sm text-gray-500">Tes coordonnées</p>
      <div className="flex justify-between items-center mt-2 pb-2 gap-2 px-2">
        <span className="text-lg font-semibold text-gray-600">
          Choisir un mode de paiement
        </span>
        <button
          className="p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}
        >
          <FaPlus className="text-gray-600" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">
                Sélectionner un mode de paiement
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-700 mb-2">Carte bancaire</p>
              <p className="text-sm text-gray-500">
                Tes informations de paiement ne seront jamais partagées avec
                le·a vendeur·se.
              </p>
              <div className="flex gap-2 mt-2">
                <Image
                  src="/mastercard.png"
                  alt="MasterCard"
                  width={32}
                  height={32}
                />
                <Image src="/visa.png" alt="Visa" width={32} height={32} />
                <Image
                  src="/discover.png"
                  alt="Discover"
                  width={32}
                  height={32}
                />
              </div>
              <button
                className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700"
                onClick={() => {
                  setIsOpen(false);
                  setIsPaymentOpen(true);
                }}
              >
                Poursuivre
              </button>
            </div>
          </div>
        </div>
      )}

      {isPaymentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000]">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-lg relative">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">
                Informations de paiement
              </h2>
              <button
                onClick={() => setIsPaymentOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-4">
              <p className="text-gray-700 font-semibold">Détails de la carte</p>
              <p className="text-sm text-gray-500">
                Les informations liées à ta carte sont chiffrées de manière
                sécurisée.
              </p>
              <div className="flex gap-2 mt-2">
                <Image
                  src="/mastercard.png"
                  alt="MasterCard"
                  width={32}
                  height={32}
                />
                <Image src="/visa.png" alt="Visa" width={32} height={32} />
                <Image
                  src="/discover.png"
                  alt="Discover"
                  width={32}
                  height={32}
                />
              </div>
              <div className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Nom figurant sur la carte"
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  placeholder="Numéro de carte bancaire"
                  className="w-full border p-2 rounded"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="MM / AA"
                    className="w-1/2 border p-2 rounded"
                  />
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-1/2 border p-2 rounded"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="save-card" />
                  <label htmlFor="save-card" className="text-sm text-gray-600">
                    Enregistrer cette carte
                  </label>
                </div>
              </div>
              <button
                className="w-full bg-teal-600 text-white py-2 mt-4 rounded-lg hover:bg-teal-700"
                onClick={() => setIsPaymentOpen(false)}
              >
                Utiliser cette carte
              </button>
              <button
                className="w-full text-teal-600 py-2 mt-2 rounded-lg hover:bg-gray-100"
                onClick={() => setIsPaymentOpen(false)}
              >
                Annuler
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
