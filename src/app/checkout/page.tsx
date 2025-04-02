"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { FaMapMarkerAlt, FaHome } from "react-icons/fa";
import PhoneNumberInput from "@/app/components/PhoneNumberInput";
import LivraisonNumber from "@/app/components/LivraisonNumber";
import MapPopup from "@/app/components/MapPopup";
import MoyenPayement from "@/app/components/MoyenPayement";

export default function Checkout() {
  const [selectedDelivery, setSelectedDelivery] = useState("pointRelais");
  const deliveryFees = {
    pointRelais: 1.95,
    domicile: 4.38,
  };
  const items = [
    { label: "Commande", price: 4.5 },
    { label: "Frais de Protection acheteurs", price: 0.93 },
    { label: "Frais de port", price: deliveryFees[selectedDelivery] },
    {
      label: "Frais de port (-28%)",
      price: -0.74,
      className: "text-green-600",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-6 mt-9">
        {/* Colonne gauche */}
        <div className="lg:w-2/3 w-full space-y-4">
          <Card className="bg-white shadow-none rounded-none">
            <CardContent className="p-4 flex items-center space-x-4">
              <img
                src="/paire-3.jpeg"
                alt="Jeu de carte Uno"
                className="w-16 h-16"
              />
              <div className="flex flex-1 justify-between items-center">
                <div>
                  <h2 className="font-bold">Jeu de carte Uno</h2>
                  <p className="text-sm text-gray-500">
                    Neuf avec étiquette - Mattel
                  </p>
                </div>
                <p className="font-semibold">4,50 €</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-none rounded-none">
            <CardContent className="p-4">
              <PhoneNumberInput />
            </CardContent>
          </Card>

          <Card className="shadow-none bg-white round">
            <CardContent className="p-4">
              <h3 className="font-semibold">Options de livraison</h3>
              <RadioGroup
                onValueChange={setSelectedDelivery}
                value={selectedDelivery}
                className="mt-2 border py-6 px-4"
              >
                {[
                  {
                    value: "pointRelais",
                    label: "Envoi au point relais (1,95 €)",
                    icon: FaMapMarkerAlt,
                  },
                  {
                    value: "domicile",
                    label: "Envoi à domicile (4,38 €)",
                    icon: FaHome,
                  },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-2 my-2"
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex items-center space-x-2"
                    >
                      <option.icon /> <span>{option.label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              <h3 className="font-semibold mt-6">Détails de la livraison</h3>
              <MapPopup />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-none rounded-none">
            <CardContent className="p-4">
              <LivraisonNumber />
            </CardContent>
          </Card>

          <Card className="bg-white shadow-none rounded-none">
            <CardContent className="p-4">
              <MoyenPayement />
            </CardContent>
          </Card>
        </div>

        {/* Colonne droite */}
        <div className="lg:w-1/3 w-full sticky top-4 self-start z-10 ">
          <Card className="shadow-none  rounded-none">
            <CardContent className="p-4">
              <h3 className="font-semibold">Résumé de la commande</h3>
              <div className="mt-3 space-y-3 text-sm">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex justify-between ${item.className || ""}`}
                  >
                    <span>{item.label}</span>
                    <span>{item.price.toFixed(2)} €</span>
                  </div>
                ))}
                <hr className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    {items
                      .reduce((acc, item) => acc + item.price, 0)
                      .toFixed(2)}{" "}
                    €
                  </span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-teal-600 hover:bg-teal-700">
                Payer
              </Button>
              <p className="text-center text-xs text-gray-500 mt-2">
                Ce paiement est crypté et sécurisé
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
