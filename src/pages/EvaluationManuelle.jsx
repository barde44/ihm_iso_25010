import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoardNavBar from "../components/BoardNavBar";
import Footer from "../components/Footer";

const EvaluationManuelle = () => {
  const navigate = useNavigate();

  const criteres = [
    { nom: "Fonctionnalité", desc: "Capacité du logiciel à répondre aux besoins." },
    { nom: "Fiabilité", desc: "Stabilité et tolérance aux erreurs du logiciel." },
    { nom: "Performance", desc: "Temps de réponse et efficacité des ressources." },
    { nom: "Sécurité", desc: "Protection contre les accès non autorisés." },
    { nom: "Utilisabilité", desc: "Facilité d’utilisation et d’apprentissage." },
    { nom: "Compatibilité", desc: "Capacité à fonctionner dans différents environnements." },
    { nom: "Maintenabilité", desc: "Facilité à corriger ou améliorer le logiciel." },
    { nom: "Portabilité", desc: "Aptitude à être transféré sur d’autres plateformes." },
  ];

  const [scores, setScores] = useState({});
  const [average, setAverage] = useState(null);

  const handleScoreChange = (critere, value) => {
    const updatedScores = { ...scores, [critere]: Number(value) };
    setScores(updatedScores);

    const values = Object.values(updatedScores);
    if (values.length > 0) {
      const avg = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(2);
      setAverage(avg);
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white transition-colors duration-300">
      {/* 🌐 Navbar */}
      <BoardNavBar />

      {/* 🧭 Titre principal + bouton retour */}
      <header className="relative text-center mt-18 mb-8">
        <button
          onClick={() => navigate("/evaluation")}
          className="mt-5 absolute left-6 top-1/2 -translate-y-1/2 
            bg-gray-200 dark:bg-[#1E293B] hover:bg-gray-300 dark:hover:bg-[#334155]
            text-gray-800 dark:text-gray-100 font-semibold px-6 py-2 
            rounded-lg shadow-md hover:shadow-[#8B5CF6]/20 transition-all duration-300"
        >
          ← Retour
        </button>

        <div>
          <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
            Évaluation manuelle des critères de qualité
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Veuillez évaluer chaque critère selon la norme ISO 25010.
          </p>
        </div>
      </header>

      {/* 🧩 Grille des critères */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {criteres.map((critere, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-[#1E293B] backdrop-blur-lg rounded-xl shadow-lg 
            hover:shadow-[#8B5CF6]/30 p-6 transform hover:-translate-y-1 transition-all duration-300 
            border border-gray-200 dark:border-[#8B5CF6]/10"
          >
            <h3 className="font-semibold text-lg mb-2 text-[#8B5CF6]">
              {critere.nom}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {critere.desc}
            </p>

            <select
              className="w-full bg-white dark:bg-[#0F172A] text-gray-900 dark:text-white 
              border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mb-4 
              focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] transition-all duration-200"
              onChange={(e) => handleScoreChange(critere.nom, e.target.value)}
            >
              <option value="">Note (1–5)</option>
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>

            <button className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] transition rounded-md py-2 text-sm font-semibold text-white">
              Sauvegarder
            </button>
          </div>
        ))}
      </div>

      {/* 📊 Moyenne + boutons finaux */}
      <div className="text-center mt-10 mb-10">
        {average && (
          <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
            Score moyen global :{" "}
            <span className="text-[#8B5CF6] font-bold">{average}/5</span>
          </p>
        )}
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-green-400/30 transition-all duration-300">
            Sauvegarder tout
          </button>

          <button className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-[#8B5CF6]/40 transition-all duration-300">
            Générer le rapport d’évaluation
          </button>
        </div>
      </div>

      {/* 📜 Footer */}
      <Footer />
    </div>
  );
};

export default EvaluationManuelle;
