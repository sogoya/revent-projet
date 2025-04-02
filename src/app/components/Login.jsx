import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function LoginPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Bouton de connexion */}
      <button
        onClick={() => setIsOpen(true)}
        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
      >
        Connexion
      </button>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-xl font-semibold text-center mb-4">Bienvenue !</h2>
              
              <button className="w-full flex items-center justify-center border py-2 rounded-md mb-2 hover:bg-gray-100">
                <img src="/google-icon.png" alt="Google" className="w-5 h-5 mr-2" />
                Continuer avec Google
              </button>
              
              <button className="w-full flex items-center justify-center border py-2 rounded-md mb-2 hover:bg-gray-100">
                <img src="/apple-icon.png" alt="Apple" className="w-5 h-5 mr-2" />
                Continuer avec Apple
              </button>
              
              <button className="w-full flex items-center justify-center border py-2 rounded-md hover:bg-gray-100">
                <img src="/facebook-icon.png" alt="Facebook" className="w-5 h-5 mr-2" />
                Continuer avec Facebook
              </button>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                Ou connecte-toi avec ton <a href="#" className="text-teal-600">e-mail</a>
              </p>
              <p className="text-center text-sm text-gray-600 mt-1">
                Tu n'as pas de compte Vinted ? <a href="#" className="text-teal-600">S'inscrire</a>
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
