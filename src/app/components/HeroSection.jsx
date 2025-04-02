"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px]">
      <Image
        src="/home-vinted.jpg"
        alt="Femme souriante devant son dressing"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      <div className="absolute inset-0 flex items-center justify-start p-6 md:p-12">
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg max-w-md">
          <h2 className="text-lg md:text-2xl font-semibold text-gray-900 mb-4">
            Prêts à faire du tri dans vos placards ?
          </h2>
          <button className="w-full bg-teal-600 text-white py-2 px-4 rounded-md mb-2 hover:bg-teal-700">
            <Link href="/publish"> Vends maintenant</Link>
          </button>
          <p className="text-teal-600 text-sm md:text-base cursor-pointer hover:underline">
            Découvrir comment ça marche
          </p>
        </div>
      </div>
    </section>
  );
}
function AuthForm({ type, setView }) {
  return (
    <>
      {type === "signup" && <InputField label="Nom d'utilisateur" />}
      <InputField label="E-mail" type="email" />
      <InputField label="Mot de passe" type="password" showPasswordToggle />
      <button className="w-full bg-teal-700 text-white py-2 rounded-md">
        {type === "login" ? "Continuer" : "S'inscrire"}
      </button>
      <p className="text-center text-sm mt-4">
        {type === "login" ? "Pas encore de compte ?" : "Déjà un compte ?"}{" "}
        <button
          onClick={() => setView(type === "login" ? "signup" : "login")}
          className="text-teal-600"
        >
          {type === "login" ? "S'inscrire" : "Se connecter"}
        </button>
      </p>
    </>
  );
}

function InputField({ label, type = "text", showPasswordToggle }) {
  return (
    <div className="mb-4 relative">
      <label className="block text-gray-600 text-sm">{label}</label>
      <input
        type={type}
        className="w-full border-b border-gray-300 focus:outline-none py-2 pr-10"
      />
    </div>
  );
}

function SocialLoginButtons() {
  return (
    <>
      <button className="w-full flex items-center gap-2 border rounded-md p-2 mb-2 hover:bg-gray-100">
        <FontAwesomeIcon icon={faGoogle} className="text-red-600 w-6 h-6" />{" "}
        Continuer avec Google
      </button>
    </>
  );
}
