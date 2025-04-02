import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="p-2  mt-2 ">
      <p className="text-sm text-gray-500">Tes coordonnées</p>
      <div className="flex justify-between items-center mt-2 pb-2 gap-2 px-2">
        <span className="text-lg font-semibold text-gray-600 w-full">
          {phoneNumber ? (
            <input
              type="tel"
              className="outline-none w-full text-lg"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          ) : (
            <span>Ajouter numéro de téléphone</span>
          )}
        </span>
        <button
          className="p-2 rounded-full hover:bg-gray-200 transition"
          onClick={() => setPhoneNumber(phoneNumber ? "" : "+33 ")}
        >
          <FaPlus className="text-gray-600" />
        </button>
      </div>
    </div>
  );
}
