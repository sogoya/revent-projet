"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AuthPopup() {
  const [view, setView] = useState("welcome"); // "welcome", "login", "signup"

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg w-[350px]"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
      >
        {view === "welcome" && <WelcomeScreen setView={setView} />}
        {view === "login" && <LoginForm setView={setView} />}
        {view === "signup" && <SignupForm setView={setView} />}
      </motion.div>
    </motion.div>
  );
}

// Écran d'accueil avec boutons de connexion rapide
function WelcomeScreen({ setView }) {
  return (
    <>
      <h2 className="text-lg font-bold text-center mb-4">Bienvenue !</h2>
      <SocialLoginButtons />
      <p className="text-center text-sm mt-4">
        Ou connecte-toi avec ton{" "}
        <button onClick={() => setView("login")} className="text-teal-600">
          e-mail
        </button>
      </p>
      <p className="text-center text-sm mt-2">
        Tu n'as pas de compte Vinted ?{" "}
        <button onClick={() => setView("signup")} className="text-teal-600">
          S'inscrire
        </button>
      </p>
      <h2 className="text-lg font-bold text-center mt-6 mb-4">
        Rejoins le mouvement de la seconde main et vends sans frais !
      </h2>
      <SocialLoginButtons />
      <p className="text-center text-sm mt-4">
        Ou inscris-toi avec{" "}
        <button onClick={() => setView("signup")} className="text-teal-600">
          ton adresse e-mail
        </button>
      </p>
      <p className="text-center text-sm mt-2">
        Tu as déjà un compte Vinted ?{" "}
        <button onClick={() => setView("login")} className="text-teal-600">
          Se connecter
        </button>
      </p>
    </>
  );
}

// Formulaire de connexion
function LoginForm({ setView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-4">Se connecter</h2>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm">
          E-mail ou nom d'utilisateur
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
      <div className="mb-6 relative">
        <label className="block text-gray-600 text-sm">Mot de passe</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10"
        />
        <button
          type="button"
          className="absolute right-2 top-9 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      <Button className="w-full bg-teal-700 text-white py-2 rounded-md">
        Continuer
      </Button>
      <p className="text-center text-sm mt-4">
        Tu n'as pas de compte ?{" "}
        <button onClick={() => setView("signup")} className="text-teal-600">
          S'inscrire
        </button>
      </p>
    </>
  );
}

// Formulaire d'inscription
function SignupForm({ setView }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <h2 className="text-center text-xl font-semibold mb-4">
        Inscris-toi avec ton email
      </h2>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm">Nom d'utilisateur</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-600 text-sm">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none py-2"
        />
      </div>
      <div className="mb-4 relative">
        <label className="block text-gray-600 text-sm">Mot de passe</label>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10"
        />
        <button
          type="button"
          className="absolute right-2 top-9 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      <Button className="w-full bg-teal-700 text-white py-2 rounded-md">
        Continuer
      </Button>
      <p className="text-center text-sm mt-4">
        Tu as déjà un compte ?{" "}
        <button onClick={() => setView("login")} className="text-teal-600">
          Se connecter
        </button>
      </p>
    </>
  );
}

// Boutons de connexion avec Google, Apple, Facebook
function SocialLoginButtons() {
  return (
    <>
      <button className="w-full border rounded-md p-2 mb-2 hover:bg-gray-100">
        Continuer avec Google
      </button>
      <button className="w-full border rounded-md p-2 mb-2 hover:bg-gray-100">
        Continuer avec Apple
      </button>
      <button className="w-full border rounded-md p-2 mb-2 hover:bg-gray-100">
        Continuer avec Facebook
      </button>
    </>
  );
}
