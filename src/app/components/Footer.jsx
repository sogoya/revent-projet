import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-6 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Sections principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-2">Vinted</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">À propos de Vinted</a></li>
              <li><a href="#" className="hover:underline">Carrière</a></li>
              <li><a href="#" className="hover:underline">Le développement durable</a></li>
              <li><a href="#" className="hover:underline">Presse</a></li>
              <li><a href="#" className="hover:underline">Publicités</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Découvrir</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Comment ça marche ?</a></li>
              <li><a href="#" className="hover:underline">Vérification de l'article</a></li>
              <li><a href="#" className="hover:underline">Applications mobiles</a></li>
              <li><a href="#" className="hover:underline">Tableau de bord</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Aide</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Centre d'aide</a></li>
              <li><a href="#" className="hover:underline">Vendre</a></li>
              <li><a href="#" className="hover:underline">Acheter</a></li>
              <li><a href="#" className="hover:underline">Confiance et sécurité</a></li>
            </ul>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center md:justify-start space-x-4 my-6">
          <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaFacebook /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaLinkedin /></a>
          <a href="#" className="text-gray-600 hover:text-gray-900 text-xl"><FaInstagram /></a>
        </div>

        {/* Lien des stores */}
        <div className="flex justify-center md:justify-start space-x-4 my-6">
          <a href="#">
            <img src="/appstore.png" alt="Télécharger sur App Store" className="w-32" />
          </a>
          <a href="#">
            <img src="/playstore.png" alt="Disponible sur Google Play" className="w-32" />
          </a>
        </div>

        {/* Liens de bas de page */}
        <div className="border-t pt-4 text-center md:text-left text-sm">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-3">
            <li><a href="#" className="hover:underline">Politique de Confidentialité</a></li>
            <li><a href="#" className="hover:underline">Politique de cookies</a></li>
            <li><a href="#" className="hover:underline">Paramètres des cookies</a></li>
            <li><a href="#" className="hover:underline">Termes et Conditions</a></li>
            <li><a href="#" className="hover:underline">Notre plateforme</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
