import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import BoardNavBar from "../components/BoardNavBar";
import { useNavigate } from "react-router-dom";

const SoumissionProjet = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-white via-gray-50 to-gray-100 text-gray-900 dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A] dark:text-white transition-colors duration-500">
      {/* 🌐 Navbar */}
      <BoardNavBar />

      {/* 🧭 Titre principal + bouton retour */}
        <button
          onClick={() => navigate("/evaluation")}
          className="
            fixed top-[90px] left-6 z-50
            bg-white text-gray-800 font-semibold
            px-6 py-2 rounded-lg shadow-lg
            hover:bg-gray-100 hover:shadow-gray-400/40
            transition-all duration-300
          ">
          ← Retour
        </button>


      {/* 🧾 Formulaire de soumission */}
      <main className="pt-32 pb-20 flex justify-center px-4">
        <div className="bg-white dark:bg-[#1E293B] text-gray-800 dark:text-gray-100 rounded-2xl shadow-2xl w-full max-w-3xl p-10 transition-colors duration-300">
          <h2 className="text-3xl font-semibold text-center mb-4 text-black dark:text-white">
            Soumission de projet pour évaluation
          </h2>
          <p className="text-center text-gray-500 dark:text-gray-300 mb-10">
            Veuillez remplir le formulaire ci-dessous pour soumettre votre projet selon la norme ISO 25010.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Nom du projet</label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0F172A] focus:ring-2 focus:ring-blue-400"
                placeholder="Ex: Application de gestion des ventes"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Description du projet</label>
              <textarea
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0F172A] focus:ring-2 focus:ring-blue-400"
                placeholder="Décrivez brièvement le projet et ses fonctionnalités principales..."
              ></textarea>
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                Lien GitHub / site web / fichier à évaluer
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0F172A] focus:ring-2 focus:ring-blue-400"
                placeholder="https://github.com/utilisateur/projet"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">Type de projet</label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0F172A] focus:ring-2 focus:ring-blue-400"
                >
                  <option>Application web</option>
                  <option>Application mobile</option>
                  <option>Système embarqué</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-200">
                  Délai souhaité pour l’évaluation
                </label>
                <select
                  required
                  className="w-full px-4 py-3 rounded-lg border border-blue-200 dark:border-gray-600 bg-gray-50 dark:bg-[#0F172A] focus:ring-2 focus:ring-blue-400"
                >
                  <option>Urgent (24h)</option>
                  <option>Standard (3 jours)</option>
                  <option>Flexible (1 semaine)</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-blue-400 text-white font-medium text-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
            >
              Soumettre le projet
            </button>
          </form>
        </div>
      </main>

      {/* ✅ Popup de confirmation */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity animate-fade-in">
          ✅ Votre projet a bien été soumis. Vous recevrez un rapport dès que l’évaluation sera terminée.
        </div>
      )}

      {/* ⚙ Animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default SoumissionProjet;
