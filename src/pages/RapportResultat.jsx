import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bar, Radar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaDownload, FaShieldAlt, FaBolt, FaCogs } from "react-icons/fa";

Chart.register(...registerables);

const RapportResultat = () => {
  const location = useLocation();
  const isActive = (path) =>
    location.pathname === path ? "text-[#8B5CF6] border-b border-[#8B5CF6] pb-1" : "hover:text-[#8B5CF6]";

  const radarData = {
    labels: [
      "Fiabilité",
      "Sécurité",
      "Performance",
      "Maintenabilité",
      "Compatibilité",
      "Utilisabilité",
      "Portabilité",
    ],
    datasets: [
      {
        label: "Score global",
        data: [85, 78, 82, 76, 88, 90, 83],
        backgroundColor: "rgba(56, 189, 248, 0.25)",
        borderColor: "#38bdf8",
        borderWidth: 2,
      },
    ],
  };

  const lineData = {
    labels: ["Semaine -3", "Semaine -2", "Semaine -1", "Semaine actuelle"],
    datasets: [
      {
        label: "Performance",
        data: [72, 75, 78, 82],
        borderColor: "#60a5fa",
        backgroundColor: "rgba(96,165,250,0.12)",
        fill: true,
        tension: 0.35,
      },
      {
        label: "Fiabilité",
        data: [80, 82, 83, 85],
        borderColor: "#34d399",
        backgroundColor: "rgba(52,211,153,0.10)",
        fill: true,
        tension: 0.35,
      },
      {
        label: "Sécurité",
        data: [70, 74, 77, 78],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245,158,11,0.08)",
        fill: true,
        tension: 0.35,
      },
    ],
  };

  const barData = {
    labels: [
      "Fiabilité",
      "Sécurité",
      "Performance",
      "Maintenabilité",
      "Compatibilité",
      "Utilisabilité",
      "Portabilité",
    ],
    datasets: [
      {
        label: "Score %",
        data: [86, 80, 78, 76, 84, 89, 82],
        backgroundColor: [
          "#22c55e",
          "#3b82f6",
          "#f59e0b",
          "#a855f7",
          "#10b981",
          "#06b6d4",
          "#ef4444",
        ],
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white min-h-screen font-['Poppins'] pb-20">
      {/* Barre de navigation */}
      <header className="fixed top-0 left-0 w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#8B5CF6] rounded-md shadow-md shadow-[#8B5CF6]/30"></div>
            <h1 className="font-semibold text-lg">ISOQualityApp</h1>
          </div>

          <nav className="flex items-center gap-8 text-gray-300 text-sm font-medium">
            <Link to="/" className={isActive("/")}>
              Accueil
            </Link>
            <Link to="/evaluation" className={isActive("/evaluation")}>
              Évaluation
            </Link>
            <Link to="/tableau" className={isActive("/tableau")}>
              Tableau de bord
            </Link>
            <Link to="/rapport" className={isActive("/rapport")}>
              Rapports / Résultats
            </Link>
            <Link to="/parametre" className={isActive("/parametre")}>
              Paramètres
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">👤</div>
          </div>
        </div>
      </header>

      {/* En-tête principal */}
      <section className="pt-32 px-8 max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Rapports et Résultats d’Évaluation</h2>
          <p className="text-gray-400">
            Visualisez les indicateurs de qualité logicielle selon la norme ISO 25010.
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

      {/* Section principale: score + bar chart */}
      <div className="bg-[#0F172A]/0 max-w-7xl mx-auto px-8">
        <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg mb-10">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Score global */}
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-[#22c55e] animate-pulse"></div>
                <span className="text-4xl font-bold">86</span>
                <span className="text-sm text-gray-400 absolute bottom-2">/100</span>
              </div>
            </div>

            {/* Graphique à barres */}
            <div className="flex-1 ml-0 md:ml-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Scores de qualité</h3>
                <button className="flex items-center gap-2 bg-[#1e40af] hover:bg-[#1d4ed8] px-4 py-2 rounded-md text-sm">
                  <FaDownload /> Exporter le rapport PDF
                </button>
              </div>
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: { ticks: { color: "#cbd5e1" }, grid: { color: "rgba(255,255,255,0.03)" } },
                    y: { ticks: { color: "#cbd5e1" }, grid: { color: "rgba(255,255,255,0.03)" } },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Détails des tests + radar */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Détails des tests</h2>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400">
                  <th>Type</th>
                  <th>Méthode</th>
                  <th>Score</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700">
                  <td>Sécurité</td>
                  <td>Automatique</td>
                  <td>92%</td>
                  <td>20/10/2025</td>
                </tr>
                <tr className="border-t border-gray-700">
                  <td>Performance</td>
                  <td>Manuelle</td>
                  <td>78%</td>
                  <td>19/10/2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#1E293B] p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-4">Radar de performance</h2>
            <Radar
              data={radarData}
              options={{
                scales: {
                  r: {
                    angleLines: { color: "rgba(255,255,255,0.06)" },
                    grid: { color: "rgba(255,255,255,0.04)" },
                    pointLabels: { color: "#cbd5e1" },
                    ticks: { display: false },
                  },
                },
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Recommandations */}
        <div className="bg-[#1E293B] p-6 rounded-xl mt-10">
          <h2 className="text-xl font-bold mb-4">Recommandations automatiques</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <FaShieldAlt className="text-[#3b82f6] text-2xl" />
              <div>
                <h4 className="font-semibold">Renforcez la sécurité</h4>
                <p className="text-gray-400 text-sm">Certaines dépendances ne sont pas à jour.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaBolt className="text-[#f59e0b] text-2xl" />
              <div>
                <h4 className="font-semibold">Optimisez la performance</h4>
                <p className="text-gray-400 text-sm">Temps de réponse supérieur à la norme.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaCogs className="text-[#10b981] text-2xl" />
              <div>
                <h4 className="font-semibold">Améliorez la maintenabilité</h4>
                <p className="text-gray-400 text-sm">Structure du code trop complexe.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Graphique d'évolution */}
        <div className="bg-[#1E293B] p-6 rounded-xl mt-10">
          <h2 className="text-xl font-bold mb-4">Évolution de la qualité</h2>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: { legend: { position: "bottom", labels: { color: "#cbd5e1" } } },
              scales: {
                x: { ticks: { color: "#cbd5e1" }, grid: { color: "rgba(255,255,255,0.03)" } },
                y: { ticks: { color: "#cbd5e1" }, grid: { color: "rgba(255,255,255,0.03)" } },
              },
            }}
          />
        </div>
      </div>
{/* Pied de page */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        <div className="flex justify-center gap-6 mb-2">
          <a href="#" className="hover:text-white">
            À propos
          </a>
          <a href="#" className="hover:text-white">
            Confidentialité
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-white">
            Support
          </a>
        </div>
        <p>© 2025 ISOQualityApp — Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default RapportResultat;