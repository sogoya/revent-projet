"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Messagerie() {
  const searchParams = useSearchParams();
  const image = searchParams.get("image");
  const title = searchParams.get("title");
  const price = searchParams.get("price");
  const priceBefore = searchParams.get("priceBefore");

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [showConversations, setShowConversations] = useState(false);

  useEffect(() => {
    fetch("/api/conversations")
      .then((res) => res.json())
      .then(setConversations);
  }, []);

  useEffect(() => {
    if (selectedConversation) {
      fetch(`/api/messages?user=${selectedConversation.id}`)
        .then((res) => res.json())
        .then(setMessages);
    }
  }, [selectedConversation]);

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      sender: "Moi",
      content: inputMessage,
      user: selectedConversation.id,
    };

    const res = await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMessage),
    });

    if (res.ok) {
      const savedMessage = await res.json();
      setMessages((prev) => [...prev, savedMessage]);
      setInputMessage("");

      // Met à jour le dernier message dans la liste des conversations
      setConversations((prev) =>
        prev.map((conv) =>
          conv.id === selectedConversation.id
            ? { ...conv, lastMessage: savedMessage.content }
            : conv
        )
      );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 🟢 Liste des conversations */}
      <div
        className={`fixed inset-y-0 left-0 w-3/4 bg-white border-r overflow-y-auto transition-transform transform ${
          showConversations ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-1/3 h-full z-50`}
      >
        <div className="p-4 font-semibold border-b flex justify-between items-center">
          <span>Messages</span>
          <button
            className="md:hidden text-gray-500"
            onClick={() => setShowConversations(false)}
          >
            ✖
          </button>
        </div>

        {/* 🟢 Conversations */}
        <div className="p-4 space-y-3 min-h-[200px]">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className="flex items-center space-x-3 cursor-pointer hover:bg-gray-100 p-2 rounded"
              onClick={() => setSelectedConversation(conversation)}
            >
              <Image
                src={conversation.image || "/placeholder.jpg"}
                alt={conversation.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{conversation.name}</p>
                <p className="text-sm text-gray-500">
                  {conversation.lastMessage || "Aucun message"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🟢 Zone de messagerie */}
      <div className="w-full md:w-2/3 flex flex-col">
        {/* En-tête du produit avec image, nom et prix */}
        <div className="p-4 bg-white border-b flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center space-x-3">
            {image && (
              <Image
                src={image}
                alt={title}
                width={50}
                height={50}
                className="w-16 h-16 object-cover rounded-md"
              />
            )}
            <div>
              <p className="font-semibold">{title}</p>
              <p className="text-base text-gray-500">
                {priceBefore && (
                  <span className="line-through mr-2">{priceBefore} €</span>
                )}
                <span className="text-sm text-green-500">
                  {price} € inclut la protection acheteurs
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 🟢 Zone des boutons déplacés */}
        <div className="p-4 flex justify-center space-x-2 bg-white">
          <button className="bg-gray-300 px-4 py-2 rounded-lg text-sm">
            Faire une offre
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm">
            Acheter
          </button>
        </div>

        {/* Liste des messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2">
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "Moi" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    msg.sender === "Moi"
                      ? "bg-teal-600 text-white"
                      : "bg-gray-200"
                  } px-3 py-2 rounded-lg text-sm max-w-[70%]`}
                >
                  {msg.content}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center mt-4">
              Sélectionnez une conversation pour commencer.
            </p>
          )}
        </div>

        {/* Zone d'envoi de message */}
        {selectedConversation && (
          <div className="p-4 bg-white border-t flex items-center">
            <input
              type="text"
              className="flex-1 border rounded-lg p-2 text-sm focus:outline-none"
              placeholder="Écrivez un message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <button
              onClick={sendMessage}
              className="ml-3 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
            >
              Envoyer
            </button>
          </div>
        )}

        {/* 🟢 Bouton ☰ Messages repositionné */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-white shadow-md p-3 flex justify-center">
          <button
            onClick={() => setShowConversations(!showConversations)}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg w-full"
          >
            {showConversations ? "✖ Fermer" : "☰ Messages"}
          </button>
        </div>
      </div>
    </div>
  );
}
