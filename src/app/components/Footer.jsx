import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">Vinted</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/a-propos" className="hover:underline">
                  À propos de Vinted
                </Link>
              </li>
              <li>
                <Link href="/carriere" className="hover:underline">
                  Carrière
                </Link>
              </li>
              <li>
                <Link href="/developpement-durable" className="hover:underline">
                  Le développement durable
                </Link>
              </li>
              <li>
                <Link href="/presse" className="hover:underline">
                  Presse
                </Link>
              </li>
              <li>
                <Link href="/publicites" className="hover:underline">
                  Publicités
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Découvrir</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/fonctionnement" className="hover:underline">
                  Comment ça marche ?
                </Link>
              </li>
              <li>
                <Link href="/verification" className="hover:underline">
                  Vérification de l'article
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:underline">
                  Applications mobiles
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:underline">
                  Tableau de bord
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Aide</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/aide" className="hover:underline">
                  Centre d'aide
                </Link>
              </li>
              <li>
                <Link href="/vendre" className="hover:underline">
                  Vendre
                </Link>
              </li>
              <li>
                <Link href="/acheter" className="hover:underline">
                  Acheter
                </Link>
              </li>
              <li>
                <Link href="/securite" className="hover:underline">
                  Confiance et sécurité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center md:justify-start space-x-4 my-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 text-xl"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Lien des stores */}
        <div className="flex justify-center md:justify-start space-x-4 my-6">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Télécharger sur App Store</span>
            <Image
              src="/appstore.png"
              alt="Télécharger sur App Store"
              width={128}
              height={40}
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Télécharger sur Google Play</span>
            <Image
              src="/playstore.png"
              alt="Disponible sur Google Play"
              width={128}
              height={40}
            />
          </a>
        </div>

        {/* Liens de bas de page */}
        <div className="border-t pt-4 text-center md:text-left text-sm">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-3">
            <li>
              <Link href="/confidentialite" className="hover:underline">
                Politique de Confidentialité
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:underline">
                Politique de cookies
              </Link>
            </li>
            <li>
              <Link href="/parametres-cookies" className="hover:underline">
                Paramètres des cookies
              </Link>
            </li>
            <li>
              <Link href="/termes" className="hover:underline">
                Termes et Conditions
              </Link>
            </li>
            <li>
              <Link href="/plateforme" className="hover:underline">
                Notre plateforme
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
