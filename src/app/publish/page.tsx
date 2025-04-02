"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const PublishForm = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("0,00 €");
  const [category, setCategory] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Ajouter un état pour l'image sélectionnée

  // Fonction pour afficher l'image en grand
  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  // Fonction pour fermer la modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  // Génération des URL des images pour éviter les fuites mémoire
  useEffect(() => {
    const urls = images.map((image) => URL.createObjectURL(image));
    setImagePreviews(urls);

    return () => urls.forEach((url) => URL.revokeObjectURL(url)); // Nettoyage des URL
  }, [images]);

  // Gestion de l'upload d'images
  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const newImages = Array.from(event.target.files);

        if (images.length + newImages.length > 5) {
          setErrors((prev) => ({
            ...prev,
            image: "Vous ne pouvez ajouter que 5 images maximum.",
          }));
          return;
        }

        setErrors((prev) => ({ ...prev, image: "" }));
        setImages((prev) => [...prev, ...newImages]);
      }
    },
    [images]
  );

  // Suppression d'une image sélectionnée
  const removeImage = useCallback((index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }, []);

  // Validation du formulaire
  const validateForm = () => {
    let newErrors: Record<string, string> = {};

    if (!title) newErrors.title = "Le titre est obligatoire.";
    if (!description) newErrors.description = "La description est obligatoire.";
    if (!category) newErrors.category = "Sélectionnez une catégorie.";
    if (!price || Number(price) <= 0)
      newErrors.price = "Le prix doit être valide.";
    if (images.length === 0) newErrors.image = "Ajoutez au moins une image.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Soumission du formulaire
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form submission

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    images.forEach((image) => formData.append("images", image));

    try {
      const response = await fetch("/api/publish", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Article publié avec succès !");
      } else {
        alert("Erreur lors de la publication.");
      }
    } catch (error) {
      console.error("Erreur API :", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto  p-6 my-6 rounded-lg bg-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="border border-gray-300 p-6 rounded-md mb-4 flex flex-col items-center">
          <div className="w-full h-40  border border-dashed border-gray-400 flex items-center justify-center">
            <p className="text-gray-500">Ajoute jusqu'à 5 photos</p>
          </div>
          <button
            type="button"
            className="mt-4 px-4 py-2 border border-gray-400 text-gray-600 rounded-md"
            onClick={() => document.getElementById("fileInput")?.click()}
          >
            + Ajoute des photos
          </button>
          <input
            id="fileInput"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />

          <p className="text-sm text-gray-500">
            Le premier servira de couverture.
          </p>
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image}</p>
          )}

          {/* Affichage des images sélectionnées */}
          <div>
            <div className="flex gap-2 mt-3">
              {imagePreviews.map((src, index) => (
                <div key={index} className="relative">
                  <Image
                    src={src}
                    alt="Prévisualisation"
                    className="h-20 w-20 object-cover rounded-md cursor-pointer"
                    width={80} // Ajoute la largeur
                    height={80} // Ajoute la hauteur
                    onClick={() => handleImageClick(src)} // Lors du clic, afficher l'image en grand
                  />

                  <button
                    className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1 rounded"
                    onClick={() => removeImage(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            {/* Modal pour afficher l'image en grand */}
            {selectedImage && (
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="relative">
                  <Image
                    src={selectedImage}
                    alt="Image agrandie"
                    className="max-w-full max-h-full"
                    width={800} // Largeur à ajuster selon tes besoins
                    height={800} // Hauteur à ajuster selon tes besoins
                  />

                  <button
                    className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded"
                    onClick={handleCloseModal}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full  py-6 bg-gray-100">
          <div className="border border-gray-300 rounded-md mb-4 bg-white">
            <label className="block px-4 py-2 font-semibold">Titre</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border-t border-gray-300 focus:outline-none"
              placeholder="ex : Chemise Sézane verte"
            />
          </div>

          <div className="border border-gray-300 rounded-md mb-4 bg-white">
            <label className="block px-4 py-2 font-semibold">
              Décris ton article
            </label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border-t border-gray-300 focus:outline-none"
              placeholder="ex : porté quelques fois, taille correctement"
            />
          </div>

          <div className="border border-gray-300 rounded-md mb-4 bg-white">
            <label className="block px-4 py-2 font-semibold">Catégorie</label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border-t border-gray-300 focus:outline-none"
            >
              <option value="">Sélectionne une catégorie</option>
              <option value="vetements">Vêtements</option>
              <option value="accessoires">Accessoires</option>
              <option value="electronique">Électronique</option>
            </select>
          </div>

          <div className="border border-gray-300 rounded-md bg-white">
            <label className="block px-4 py-2 font-semibold">Prix</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-2 border-t border-gray-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
          >
            Sauvegarder en brouillon
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-teal-600 text-white rounded-md"
          >
            Ajouter l'annonce
          </button>
        </div>
      </form>
    </div>
  );
};

export default PublishForm;
