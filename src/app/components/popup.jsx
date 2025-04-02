'use client';

import { useState, useRef, useEffect } from "react";
import Link from 'next/link';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { motion } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("fr");
  const [isOpen, setIsOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const textRef = useRef(null);
  const popupRef = useRef(null);
  const [width, setWidth] = useState(30);

  const languages = [
    { code: "fr", name: "Français" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "nl", name: "Nederlands" }
  ];

  useEffect(() => {
    if (textRef.current) {
      setWidth(textRef.current.offsetWidth + 20);
    }
  }, [selectedLang]);

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
        <div className="text-teal-600 text-2xl font-bold ml-4">Vinted</div>
        
        <button 
          className="lg:hidden text-gray-600 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden lg:flex items-center gap-6">
          <button 
            className="text-teal-600 text-sm border border-teal-600 rounded-md px-3 py-1"
            onClick={() => setPopupOpen(true)}
          >
            S'inscrire | Se connecter
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md text-sm">
            Vends tes articles
          </button>
        </div>
      </nav>

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
              <h2 className="text-lg font-bold">Bienvenue !</h2>
              <button onClick={() => setPopupOpen(false)} className="text-gray-600 hover:text-black">
                <X size={20} />
              </button>
            </div>
            <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
              <span>🔵</span> Continuer avec Google
            </button>
            <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
              <span>🍏</span> Continuer avec Apple
            </button>
            <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
              <span>🔵</span> Continuer avec Facebook
            </button>
            <p className="text-center text-sm mt-4">
              Ou connecte-toi avec ton <Link href="#" className="text-teal-600">e-mail</Link>
            </p>
            <p className="text-center text-sm mt-2">
              Tu n'as pas de compte Vinted ? <Link href="#" className="text-teal-600">S'inscrire</Link>
            </p>
          </motion.div>
        </motion.div>
      )}
    </header>
  );
}
