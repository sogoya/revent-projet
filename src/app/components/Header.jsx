"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebook,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  const openPopup = () => {
    setPopupOpen(true);
    setView("hello"); // Initialiser la vue à "hello" quand le popup est ouvert
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setView("hello"); // Réinitialiser la vue à "hello" quand le popup est fermé
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("fr");
  const [isOpen, setIsOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const textRef = useRef(null);
  const popupRef = useRef(null);
  const [width, setWidth] = useState(30);
  const [view, setView] = useState("hello"); // Vue par défaut du popup

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "nl", name: "Nederlands" },
  ];

  // Ajuste la largeur du bouton de la langue
  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth + 20);
    }
  }, [selectedLang]);

  // Gestion du clic en dehors du popup
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopupOpen(false);
      }
    }

    if (popupOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [popupOpen]);

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <nav className="flex items-center justify-between p-3 w-full border-b bg-white">
        <div className="text-teal-600 text-2xl font-bold ml-4">
          <Link href="/">Toteka</Link>
        </div>

        {/* Menu Hamburger */}
        <button
          className="lg:hidden text-gray-600 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {/* Barre de recherche */}
          <div className="flex items-center border rounded-lg overflow-hidden bg-gray-100 w-[400px] md:w-[500px] lg:w-[600px]">
            <select className="bg-gray-100 p-1 text-sm border-r outline-none text-gray-700 w-[80px]">
              <option>Articles</option>
              <option>Membres</option>
              <option>Centre d'aide</option>
            </select>
            <input
              type="text"
              placeholder="Rechercher..."
              className="p-2 flex-1 outline-none bg-gray-100 text-gray-700 text-sm"
            />
          </div>

          {/* Boutons de connexion et de vente */}
          <div className="flex items-center gap-3">
            <button
              className="text-teal-600 text-sm border border-teal-600 rounded-md px-3 py-1"
              onClick={() => setPopupOpen(true)}
            >
              S'inscrire | Se connecter
            </button>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm">
              <Link href="/publish"> Vends tes articles</Link>
            </button>
          </div>

          {/* Sélecteur de langue */}
          <div className="relative">
            <span ref={textRef} className="absolute invisible">
              {selectedLang.toUpperCase()}
            </span>
            <button
              className="flex items-center p-2 text-gray-800 hover:bg-gray-200"
              style={{ width: `${width}px` }}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedLang.toUpperCase()}
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md">
                <ul>
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      className={`p-2 cursor-pointer hover:bg-gray-100 ${
                        lang.code === selectedLang ? "font-bold" : ""
                      }`}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setIsOpen(false);
                      }}
                    >
                      {lang.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Barre de recherche mobile */}
      <div className="flex lg:hidden items-center border rounded-lg overflow-hidden mx-4 my-2 bg-gray-100">
        <select className="bg-gray-100 p-2 text-sm border-r outline-none text-gray-700 w-[85px]">
          <option>Articles</option>
          <option>Membres</option>
        </select>
        <input
          type="text"
          placeholder="Rechercher des articles"
          className="p-2 flex-1 outline-none bg-gray-100 text-gray-700"
        />
      </div>

      {/* Catégories Mobile */}
      <div className="lg:hidden flex justify-start space-x-6 px-4 text-sm text-gray-700 border-b bg-white overflow-x-auto whitespace-nowrap py-2">
        <Link href="#" className="hover:text-black">
          Voir tout
        </Link>
        <Link href="#" className="hover:text-black">
          Articles de créateurs
        </Link>
        <Link href="#" className="hover:text-black">
          Électronique
        </Link>
      </div>

      <div className="hidden lg:flex justify-center space-x-6 py-2 text-sm text-gray-700 border-b bg-white">
        {[
          "Femmes",
          "Hommes",
          "Enfants",
          "Maison",
          "Électronique",
          "Divertissement",
          "Animaux",
          "articles de créateurs",
          "notre",
        ].map((item) => (
          <Link key={item} href="/catalog" className="hover:text-black">
            {item}
          </Link>
        ))}
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-5 space-y-4">
          {[
            "Femmes",
            "Hommes",
            "Enfants",
            "Maison",
            "Électronique",
            "Divertissement",
            "Animaux",
          ].map((item) => (
            <Link
              key={item}
              href="#"
              className="block text-gray-600 hover:text-black"
            >
              {item}
            </Link>
          ))}
          <button className="block w-full bg-teal-600 text-white px-4 py-2 rounded-lg">
            Vends tes articles
          </button>
          <button className="block w-full text-gray-600">Se connecter</button>
        </div>
      )}

      {/* Popup */}
      {popupOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <motion.div
            ref={popupRef}
            className="bg-white p-6 rounded-lg shadow-lg w-[350px]"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
          >
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h2 className="text-lg font-bold">
                {view === "hello"
                  ? "Créer un compte"
                  : view === "login"
                  ? "Se connecter"
                  : view === "signup"
                  ? "Inscription"
                  : ""}
              </h2>
              <button
                onClick={handleClosePopup} // Cette fonction ferme le popup et réinitialise la vue à "hello"
                className="text-gray-600 hover:text-black"
              >
                <X size={20} />
              </button>
            </div>

            {/* Formulaire de connexion rapide */}
            {(view === "hello" || view === "login") && (
              <>
                <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-red-600 w-6 h-6"
                  />{" "}
                  {view === "hello" ? "S'inscrire" : "Se connecter"} avec Google
                </button>
                <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-500 w-6 h-6"
                  />{" "}
                  {view === "hello" ? "S'inscrire" : "Se connecter"} avec
                  Facebook
                </button>
                <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
                  <FontAwesomeIcon
                    icon={faApple}
                    className="text-black w-6 h-6"
                  />
                  {view === "hello" ? "S'inscrire" : "Se connecter"} avec Apple
                </button>

                <p className="text-center text-sm mt-4">
                  Ou{" "}
                  <button
                    onClick={() =>
                      setView(view === "hello" ? "signup" : "loginEmail")
                    }
                    className="text-teal-600"
                  >
                    {view === "hello" ? "inscris-toi" : "connecte-toi"} avec ton
                    email
                  </button>
                </p>

                <p className="text-center text-sm mt-2">
                  {view === "hello"
                    ? "Tu as déjà un compte ?"
                    : "Pas encore de compte ?"}{" "}
                  <button
                    onClick={() =>
                      setView(view === "hello" ? "login" : "hello")
                    }
                    className="text-teal-600"
                  >
                    {view === "hello" ? "Se connecter" : "S'inscrire"}
                  </button>
                </p>
              </>
            )}

            {/* Formulaire d'inscription avec email */}
            {view === "signup" && (
              <>
                <input
                  type="text"
                  placeholder="Nom d'utilisateur"
                  className="w-full p-2 border rounded-md mb-2"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 border rounded-md mb-2"
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full p-2 border rounded-md mb-2"
                />
                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-md">
                  S'inscrire
                </button>
                <p className="text-center text-sm mt-2">
                  Déjà un compte ?{" "}
                  <button
                    onClick={() => setView("login")}
                    className="text-teal-600"
                  >
                    Se connecter
                  </button>
                </p>
              </>
            )}

            {/* Formulaire de connexion avec email */}
            {view === "loginEmail" && (
              <>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full p-2 border rounded-md mb-2"
                />
                <input
                  type="password"
                  placeholder="Mot de passe"
                  className="w-full p-2 border rounded-md mb-2"
                />
                <button className="w-full bg-teal-600 text-white px-4 py-2 rounded-md">
                  Se connecter
                </button>
                <p className="text-center text-sm mt-2">
                  Pas encore de compte ?{" "}
                  <button
                    onClick={() => setView("hello")}
                    className="text-teal-600"
                  >
                    S'inscrire
                  </button>
                </p>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
