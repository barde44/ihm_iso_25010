import {
  FaClipboardCheck,
  FaRobot,
  FaChartLine,
  FaCode,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Evaluation = () => {

  return (
    <div className="bg-white dark:bg-[#0F172A] text-white min-h-screen">

      <Navbar />

      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4 text-black dark:text-white">
          Choisissez votre mode d’<span className="text-[#8B5CF6]">évaluation</span>
        </h2>
        <p className="text-gray-700 dark:text-gray-400 text-lg mb-12">
          Lancez une analyse manuelle ou automatique de la qualité logicielle
          selon la norme <strong>ISO 25010</strong>.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Évaluation manuelle */}
          <div className="bg-white dark:bg-[#1E293B] bg-linear-to-br from-[#E0E7FF] to-[#C7D2FE] dark:from-[#1E293B] dark:to-[#334155] rounded-2xl p-8 w-full md:w-1/2 border border-[#8B5CF6]/20 dark:border-[#8B5CF6]/30 shadow-lg hover:shadow-[#8B5CF6]/30 dark:hover:shadow-[#8B5CF6]/50 transition-all transform hover:-translate-y-2">
            <div className="text-[#8B5CF6] dark:text-[#A78BFA] text-5xl mb-4 flex justify-center">
              <FaClipboardCheck />
            </div>
            <h3 className="text-gray-900 dark:text-white text-2xl font-semibold mb-2">
              Évaluation manuelle
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
              Remplissez les critères ISO 25010 manuellement pour évaluer la qualité de votre logiciel. Idéal pour les tests personnalisés ou internes.
            </p>
            <button className="bg-[#8B5CF6] dark:bg-[#A78BFA] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#7C3AED] dark:hover:bg-[#7C3AED] transition-all">
              Commencer l’évaluation
            </button>
          </div>

          {/* Évaluation automatique */}
          <div className="bg-white dark:bg-[#1E293B] bg-linear-to-br from-[#D1FAE5] to-[#6EE7B7] dark:from-[#1E293B] dark:to-[#10B981]/30 rounded-2xl p-8 w-full md:w-1/2 border border-[#10B981]/30 dark:border-[#10B981]/40 shadow-lg hover:shadow-[#10B981]/40 dark:hover:shadow-[#10B981]/60 transition-all transform hover:-translate-y-2">
            <div className="text-[#10B981] dark:text-[#34D399] text-5xl mb-4 flex justify-center">
              <FaRobot />
            </div>
            <h3 className="text-gray-900 dark:text-white text-2xl font-semibold mb-2">
              Évaluation automatique
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm md:text-base">
              Téléversez votre code ou entrez un lien GitHub pour une évaluation automatique selon les métriques de performance, fiabilité et sécurité.
            </p>
            <button className="bg-[#10B981] dark:bg-[#34D399] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0EA371] dark:hover:bg-[#059669] transition-all">
              Lancer l’analyse
            </button>
          </div>
        </div>

      </section>

   {/* Étapes du processus */}
    <section className="bg-white dark:bg-[#1E293B] bg-linear-to-tr from-[#F3F4F6] via-[#E5E7EB] to-[#F3F4F6] dark:from-[#1E293B] dark:via-[#273549] dark:to-[#1E293B] text-gray-900 dark:text-white rounded-2xl shadow-2xl mx-8 max-w-7xl p-10 mb-20 transition-transform duration-500">
      <h3 className="text-3xl font-semibold mb-8 text-center text-[#10B981] dark:text-[#34D399] drop-shadow-md">
        Étapes du processus d’évaluation
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            icon: <FaSearch />,
            title: "1. Analyse initiale",
            desc: "Collecte des informations sur le logiciel et vérification des composants.",
          },
          {
            icon: <FaCode />,
            title: "2. Vérification technique",
            desc: "Inspection du code, détection de bugs et test de conformité ISO 25010.",
          },
          {
            icon: <FaChartLine />,
            title: "3. Résultats & synthèse",
            desc: "Génération d’un rapport complet et visualisation dans le tableau de bord.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/70 dark:bg-[#1E293B]/70 hover:bg-gray-200 dark:hover:bg-[#334155]/80 rounded-xl p-6 shadow-lg hover:shadow-[#10B981]/30 dark:hover:shadow-[#10B981]/50 transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="text-[#10B981] dark:text-[#34D399] text-4xl mb-3">
              {item.icon}
            </div>
            <h4 className="font-semibold mb-2 dark:text-white">{item.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>


      {/* Section de synchronisation */}
      <section className="max-w-7xl mx-auto text-center mb-20 px-8">
        <div className="bg-white dark:bg-[#1E293B] border border-[#8B5CF6]/20 dark:border-[#8B5CF6]/20 rounded-2xl p-10 shadow-lg hover:shadow-[#8B5CF6]/30 dark:hover:shadow-[#8B5CF6]/50 transition-all">
          <div className="flex justify-center text-5xl text-[#8B5CF6] dark:text-[#34D399] mb-4">
            <FaSyncAlt className="animate-spin-slow" />
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
            Synchronisation en cours
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Connectez votre projet pour synchroniser automatiquement les
            indicateurs ISO 25010.
          </p>
        </div>
      </section>


       <Footer />
    </div>
  );
};

export default Evaluation;
