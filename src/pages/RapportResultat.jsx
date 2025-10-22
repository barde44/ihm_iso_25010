import React from "react";
import {
  FaDownload,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

const RapportResultat = () => {
  const tests = [
    {
      type: "Sécurité",
      methode: "Automatique",
      score: 92,
      date: "20/10/2025",
      statut: "Réussi",
    },
    {
      type: "Performance",
      methode: "Manuelle",
      score: 78,
      date: "19/10/2025",
      statut: "Moyen",
    },
    {
      type: "Fiabilité",
      methode: "Automatique",
      score: 64,
      date: "18/10/2025",
      statut: "À améliorer",
    },
  ];

  const historique = [
    { date: "18/10/2025", rapport: "Rapport n°001", type: "Automatique" },
    { date: "15/10/2025", rapport: "Rapport n°002", type: "Manuelle" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white min-h-screen font-['Poppins'] pb-20">
      {/* Barre de navigation */}
      <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#0F172A] to-[#1E293B] border-b border-white/10 z-50 shadow-lg shadow-[#8B5CF6]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8B5CF6] rounded-md shadow-md shadow-[#8B5CF6]/40"></div>
            <h1 className="font-semibold text-lg">ISOQualityApp</h1>
          </div>
          <nav className="flex items-center gap-8 text-gray-300 text-sm font-medium">
            <a href="/" className="hover:text-[#8B5CF6] transition-colors">
              Accueil
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">
              Évaluation
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">
              Tableau de bord
            </a>
            <a
              href="/rapport"
              className="text-[#8B5CF6] border-b border-[#8B5CF6] pb-1"
            >
              Rapports / Résultats
            </a>
            <a href="#" className="hover:text-[#8B5CF6] transition-colors">
              Paramètres
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              👤
            </div>
          </div>
        </div>
      </header>

      {/* En-tête principal */}
      <section className="pt-32 px-8 max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Rapports et Résultats d’Évaluation
          </h2>
          <p className="text-gray-400">
            Visualisez les indicateurs de qualité logicielle selon la norme ISO
            25010.
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] transition-all px-5 py-3 rounded-xl font-medium shadow-md shadow-[#10B981]/30">
          <FaDownload /> Exporter le rapport PDF
        </button>
      </section>

      {/* Résumé global */}
      <section className="bg-[#1E293B]/70 backdrop-blur-xl rounded-2xl mx-8 max-w-7xl p-8 mb-10 shadow-2xl shadow-[#8B5CF6]/20">
        <h3 className="text-xl font-semibold mb-6">Résumé global</h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-[#0F172A] rounded-xl p-6 transform hover:scale-105 transition-all shadow-md shadow-[#8B5CF6]/20">
            <div className="text-4xl font-bold text-[#10B981] mb-2">86/100</div>
            <p className="text-gray-400 text-sm">Score global</p>
          </div>
          <div className="bg-[#0F172A] rounded-xl p-6 transform hover:scale-105 transition-all shadow-md shadow-[#8B5CF6]/20">
            <div className="text-2xl font-semibold text-[#10B981]">✅</div>
            <p className="text-gray-400 text-sm">Qualité générale : Excellente</p>
          </div>
          <div className="bg-[#0F172A] rounded-xl p-6 transform hover:scale-105 transition-all shadow-md shadow-[#8B5CF6]/20">
            <div className="text-2xl font-semibold text-[#FACC15]">⚙</div>
            <p className="text-gray-400 text-sm">Performance : Bonne</p>
          </div>
          <div className="bg-[#0F172A] rounded-xl p-6 transform hover:scale-105 transition-all shadow-md shadow-[#8B5CF6]/20">
            <div className="text-2xl font-semibold text-[#EF4444]">🔐</div>
            <p className="text-gray-400 text-sm">Sécurité : Moyenne</p>
          </div>
        </div>
      </section>

      {/* Détails des tests */}
      <section className="max-w-7xl mx-auto px-8 mb-10">
        <h3 className="text-xl font-semibold mb-4">Détails des tests</h3>
        <table className="w-full border-collapse text-sm bg-[#1E293B]/80 rounded-xl overflow-hidden shadow-lg shadow-[#8B5CF6]/10">
          <thead className="bg-[#111827] text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Méthode</th>
              <th className="px-4 py-3 text-left">Score</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Statut</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {tests.map((t, i) => (
              <tr
                key={i}
                className="border-b border-white/10 hover:bg-[#273447] transition-all"
              >
                <td className="px-4 py-3">{t.type}</td>
                <td className="px-4 py-3">{t.methode}</td>
                <td className="px-4 py-3">{t.score}%</td>
                <td className="px-4 py-3">{t.date}</td>
                <td className="px-4 py-3">
                  {t.statut === "Réussi" ? (
                    <span className="text-[#10B981] flex items-center gap-1">
                      <FaCheckCircle /> {t.statut}
                    </span>
                  ) : t.statut === "Moyen" ? (
                    <span className="text-[#FACC15] flex items-center gap-1">
                      <FaExclamationTriangle /> {t.statut}
                    </span>
                  ) : (
                    <span className="text-[#EF4444] flex items-center gap-1">
                      <FaTimesCircle /> {t.statut}
                    </span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <button className="text-[#8B5CF6] hover:underline">
                    Voir détails
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Historique */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <h3 className="text-xl font-semibold mb-4">Historique des rapports</h3>
        <table className="w-full border-collapse text-sm bg-[#1E293B]/80 rounded-xl overflow-hidden shadow-lg shadow-[#8B5CF6]/10">
          <thead className="bg-[#111827] text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Rapport</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Export</th>
            </tr>
          </thead>
          <tbody>
            {historique.map((h, i) => (
              <tr
                key={i}
                className="border-b border-white/10 hover:bg-[#273447] transition-all"
              >
                <td className="px-4 py-3">{h.date}</td>
                <td className="px-4 py-3">{h.rapport}</td>
                <td className="px-4 py-3">{h.type}</td>
                <td className="px-4 py-3 text-[#10B981] cursor-pointer hover:underline">
                  ⬇
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        © 2025 ISOQualityApp — Tous droits réservés.
      </footer>
    </div>
  );
};

export default RapportResultat;