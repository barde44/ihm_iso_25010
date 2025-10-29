
import { Bar, Radar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { FaDownload, FaShieldAlt, FaBolt, FaCogs } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from '../context/ThemeContext'

Chart.register(...registerables);

const RapportResultat = () => {

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

const { theme } = useTheme()
const isDarkMode = theme === 'dark'

  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-linear-to-b dark:from-[#0F172A] dark:to-[#1E293B] dark:text-white transition-colors duration-500">
      <Navbar />

      {/* En-tête */}
      <section className="pt-32 px-8 max-w-7xl mx-auto flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-semibold mb-2">
            Rapports et Résultats d’Évaluation
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Visualisez les indicateurs de qualité logicielle selon la norme ISO 25010.
          </p>
        </div>
      </section>

      {/* Résumé global */}
      <section className="bg-white dark:bg-[#1E293B]/70 backdrop-blur-xl rounded-2xl mx-8 max-w-7xl p-8 mb-10 shadow-xl">
        <h3 className="text-xl font-semibold mb-6">Résumé global</h3>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { value: "86/100", label: "Score global", color: "#10B981" },
            { value: "✅", label: "Qualité générale : Excellente", color: "#10B981" },
            { value: "⚙", label: "Performance : Bonne", color: "#FACC15" },
            { value: "🔐", label: "Sécurité : Moyenne", color: "#EF4444" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#0F172A] rounded-xl p-6 transform hover:scale-105 transition-all shadow-md"
            >
              <div className="text-3xl font-bold mb-2" style={{ color: item.color }}>
                {item.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section principale: score + bar chart */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-white dark:bg-[#1E293B] p-8 rounded-xl shadow-lg mb-10 transition-colors">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Score global */}
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-8 border-[#22c55e] animate-pulse"></div>
                <span className="text-4xl font-bold">86</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 absolute bottom-2">
                  /100
                </span>
              </div>
            </div>

            {/* Graphique à barres */}
            <div className="flex-1 md:ml-10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Scores de qualité</h3>
                <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md text-sm text-white">
                  <FaDownload /> Exporter PDF
                </button>
              </div>
              <Bar
                data={barData}
                options={{
                  responsive: true,
                  plugins: { legend: { display: false } },
                  scales: {
                    x: {
                      ticks: { color: isDarkMode ? "#cbd5e1" : "#334155" },
                      grid: { color: "rgba(0,0,0,0.05)" },
                    },
                    y: {
                      ticks: { color: isDarkMode ? "#cbd5e1" : "#334155" },
                      grid: { color: "rgba(0,0,0,0.05)" },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>

        {/* Détails des tests + radar */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-[#1E293B] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Détails des tests</h2>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400">
                  <th>Type</th>
                  <th>Méthode</th>
                  <th>Score</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sécurité", "Automatique", "92%", "20/10/2025"],
                  ["Performance", "Manuelle", "78%", "19/10/2025"],
                ].map(([type, methode, score, date], i) => (
                  <tr
                    key={i}
                    className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="py-2">{type}</td>
                    <td>{methode}</td>
                    <td>{score}</td>
                    <td>{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white dark:bg-[#1E293B] p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold mb-4">Radar de performance</h2>
            <Radar
              data={radarData}
              options={{
                scales: {
                  r: {
                    angleLines: { color: "rgba(0,0,0,0.05)" },
                    grid: { color: "rgba(0,0,0,0.05)" },
                    pointLabels: { color: isDarkMode ? "#cbd5e1" : "#334155" },
                    ticks: { display: false },
                  },
                },
                plugins: { legend: { display: false } },
              }}
            />
          </div>
        </div>

        {/* Recommandations */}
        <div className="bg-white dark:bg-[#1E293B] p-6 rounded-xl mt-10 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Recommandations automatiques</h2>
          <div className="space-y-4">
            {[
              {
                icon: <FaShieldAlt className="text-[#3b82f6] text-2xl" />,
                title: "Renforcez la sécurité",
                text: "Certaines dépendances ne sont pas à jour.",
              },
              {
                icon: <FaBolt className="text-[#f59e0b] text-2xl" />,
                title: "Optimisez la performance",
                text: "Temps de réponse supérieur à la norme.",
              },
              {
                icon: <FaCogs className="text-[#10b981] text-2xl" />,
                title: "Améliorez la maintenabilité",
                text: "Structure du code trop complexe.",
              },
            ].map((r, i) => (
              <div key={i} className="flex items-start gap-4">
                {r.icon}
                <div>
                  <h4 className="font-semibold">{r.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{r.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Graphique d’évolution */}
        <div className="bg-white dark:bg-[#1E293B] p-6 rounded-xl mt-10 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Évolution de la qualité</h2>
          <Line
            data={lineData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                  labels: { color: isDarkMode ? "#cbd5e1" : "#334155" },
                },
              },
              scales: {
                x: {
                  ticks: { color: isDarkMode ? "#cbd5e1" : "#334155" },
                  grid: { color: "rgba(0,0,0,0.05)" },
                },
                y: {
                  ticks: { color: isDarkMode ? "#cbd5e1" : "#334155" },
                  grid: { color: "rgba(0,0,0,0.05)" },
                },
              },
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RapportResultat;