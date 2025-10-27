import {
  FaChartBar,
  FaLock,
  FaShieldAlt,
  FaCogs,
  FaTachometerAlt,
  FaCheckCircle,
  FaExclamationTriangle,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {

  // Données simulées pour les cartes
  const scores = [
    { title: "Performance", value: 92, icon: <FaTachometerAlt />, color: "#10B981" },
    { title: "Sécurité", value: 88, icon: <FaLock />, color: "#8B5CF6" },
    { title: "Fiabilité", value: 95, icon: <FaShieldAlt />, color: "#3B82F6" },
    { title: "Fonctionnalité", value: 90, icon: <FaCogs />, color: "#F59E0B" },
  ];

  const alerts = [
    { type: "Succès", message: "Toutes les métriques dépassent le seuil ISO 25010.", icon: <FaCheckCircle className="text-[#10B981]" /> },
    { type: "Avertissement", message: "La sécurité pourrait être améliorée (88%).", icon: <FaExclamationTriangle className="text-[#F59E0B]" /> },
  ];

  // Données pour le graphique de tendance (ligne)
  const lineData = [
    { mois: "Jan", Performance: 85, Sécurité: 80 },
    { mois: "Fév", Performance: 88, Sécurité: 82 },
    { mois: "Mar", Performance: 90, Sécurité: 85 },
    { mois: "Avr", Performance: 92, Sécurité: 88 },
    { mois: "Mai", Performance: 93, Sécurité: 90 },
    { mois: "Juin", Performance: 95, Sécurité: 91 },
  ];

  // Données pour le graphe radar ISO 25010
  const radarData = [
    { critère: "Performance", score: 92 },
    { critère: "Sécurité", score: 88 },
    { critère: "Fiabilité", score: 95 },
    { critère: "Compatibilité", score: 89 },
    { critère: "Maintenabilité", score: 90 },
    { critère: "Portabilité", score: 87 },
    { critère: "Fonctionnalité", score: 91 },
    { critère: "Utilisabilité", score: 93 },
  ];

  return (
   <div className="min-h-screen font-['Poppins'] bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white">

      <Navbar />
      <main className="pt-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-[#8B5CF6]">
          Tableau de bord ISO 25010
        </h2>

        {/* Cartes de scores */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {scores.map((item, i) => (
            <div
              key={i}
              className="bg-white/60 dark:bg-[#1E293B]/70 p-6 rounded-2xl shadow-lg border border-gray-200/20 dark:border-[#8B5CF6]/10 hover:shadow-[#8B5CF6]/30 transition-all transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <span className="text-2xl font-bold" style={{ color: item.color }}>
                  {item.value}%
                </span>
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-200">{item.title}</h4>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full mt-2">
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${item.value}%`, backgroundColor: item.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>


        {/* Résumé & Alertes */}
    <section className="bg-white dark:bg-[#1E293B]/60 rounded-2xl p-8 shadow-md border border-[#8B5CF6]/10 dark:border-[#8B5CF6]/20 mb-12">
      <h3 className="text-xl font-semibold mb-4 text-[#10B981] flex items-center gap-2">
        <FaChartBar /> Résumé des évaluations
      </h3>

      <ul className="space-y-3">
        {alerts.map((alert, i) => (
          <li
            key={i}
            className="flex items-start gap-3 bg-gray-100/80 dark:bg-[#0F172A]/70 p-4 rounded-lg border border-gray-300/30 dark:border-[#8B5CF6]/20"
          >
            <div className="text-2xl">{alert.icon}</div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-gray-200">{alert.type}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{alert.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>


        {/* Graphique de tendance */}
        <section className="bg-linear-to-br from-[#1E293B] to-[#334155] p-8 rounded-2xl shadow-lg border border-[#10B981]/20 mb-16">
          <h3 className="text-xl font-semibold mb-6 text-[#10B981] flex items-center gap-2">
            <FaChartBar /> Analyse de la performance
          </h3>

          <div className="w-full h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="mois" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="Performance"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Sécurité"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Graphique radar ISO 25010 */}
<section className="bg-white dark:bg-[#1E293B]/60 p-8 rounded-2xl shadow-lg border border-[#8B5CF6]/20 mb-20">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-[#8B5CF6] dark:text-[#8B5CF6]">
  <FaChartBar /> Vue globale des critères ISO 25010
</h3>


          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#334155" />
                <PolarAngleAxis dataKey="critère" tick={{ fill: "#E5E7EB", fontSize: 15 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#9CA3AF" />
                <Radar
                  name="Score ISO"
                  dataKey="score"
                  stroke="#8B5CF6"
                  fill="#8B5CF6"
                  fillOpacity={0.4}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  );
};

export default Dashboard;
