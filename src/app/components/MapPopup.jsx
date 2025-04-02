import { useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function MapPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="px-2 border mt-8">
      {/* Bouton pour ouvrir la popup */}

      <div className="flex justify-between items-center mt-2 pb-2 gap-2 px-2">
        <span className="text-lg font-semibold text-gray-600">
          Choisir un point relais
        </span>

        <button
          className="p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}
        >
          <FaPlus className="text-gray-600" />
        </button>
      </div>

      {/* Popup avec la carte */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative">
            {/* Titre et bouton de fermeture */}
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">
                Point de retrait et de dépôt
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Champ de recherche */}
            <div className="p-4">
              <input
                type="text"
                placeholder="Ville, nom de la rue ou code postal"
                className="w-full border rounded p-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Carte Google Maps */}
            <div className="w-full h-full">
              <iframe
                className="w-full h-[600px]"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7951.27034034514!2d11.874795111083984!3d-4.83254780055892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scg!4v1743192949433!5m2!1sfr!2scg"
                width="1200"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
