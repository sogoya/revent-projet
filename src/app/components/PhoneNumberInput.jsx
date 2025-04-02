import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function AddressPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [error, setError] = useState(false);

  const handleSave = () => {
    if (!name.trim()) {
      setError(true);
      return;
    }
    setError(false);
    alert("Adresse enregistrée !");
    setIsOpen(false);
  };

  return (
    <div className="p-2 border mt-2 w-full z-20 relative">
      <p className="text-sm text-gray-500">Adresse</p>
      <div className="flex justify-between items-center mt-2 pb-2 gap-2 px-2">
        <span className="text-lg font-semibold text-gray-600">
          Ajoute ton adresse
        </span>

        <button
          className="p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}
        >
          <FaPlus className="text-gray-600" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white rounded-lg p-5 w-96 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Adresse</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 text-xl"
              >
                ×
              </button>
            </div>

            <div className="mt-3 space-y-3">
              <label className="block text-sm text-gray-600">Pays</label>
              <select className="w-full border rounded p-2">
                <option>France</option>
                <option>Belgique</option>
                <option>Suisse</option>
              </select>

              <label className="block text-sm text-gray-600">Nom complet</label>
              <input
                type="text"
                className={`w-full border rounded p-2 ${
                  error ? "border-red-500" : ""
                }`}
                placeholder="p. ex. Lucie Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {error && (
                <p className="text-red-500 text-sm">
                  Saisis ton prénom et ton nom
                </p>
              )}

              <label className="block text-sm text-gray-600">
                N° et nom de rue
              </label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="e.g. 10 rue du Printemps"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />

              <label className="block text-sm text-gray-600">
                Adresse ligne 2 (facultatif)
              </label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="e.g. Appt. 3"
              />

              <label className="block text-sm text-gray-600">Code postal</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                placeholder="p. ex. 12345"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
              />

              <button
                className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
                onClick={handleSave}
              >
                Sauvegarder
              </button>

              <button
                className="w-full text-gray-600 py-2 rounded hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
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
