import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaClipboardCheck,
  FaRobot,
  FaChartLine,
  FaCode,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";

const Evaluation = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#8B5CF6] border-b border-[#8B5CF6] pb-1"
      : "hover:text-[#8B5CF6]";

  return (
    <div className="bg-[#0F172A] text-white min-h-screen font-['Poppins']">
      {/* Barre de navigation */}
      <header className="fixed top-0 left-0 w-full bg-[#0F172A]/90 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md"></div>
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
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              👤
            </div>
          </div>
        </div>
      </header>

      {/* Bande d’introduction */}
      <section className="pt-32 pb-20 px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-4">
          Choisissez votre mode d’<span className="text-[#8B5CF6]">évaluation</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Lancez une analyse manuelle ou automatique de la qualité logicielle
          selon la norme <strong>ISO 25010</strong>.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {/* Évaluation manuelle */}
          <div className="bg-gradient-to-br from-[#1E293B] to-[#334155] rounded-2xl p-8 w-full md:w-1/2 border border-[#8B5CF6]/20 shadow-lg hover:shadow-[#8B5CF6]/30 transition-all transform hover:-translate-y-2">
            <div className="text-[#8B5CF6] text-5xl mb-4 flex justify-center">
              <FaClipboardCheck />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Évaluation manuelle</h3>
            <p className="text-gray-400 mb-6">
              Remplissez les critères ISO 25010 manuellement pour évaluer la
              qualité de votre logiciel. Idéal pour les tests personnalisés ou
              internes.
            </p>
            <button className="bg-[#8B5CF6] px-6 py-3 rounded-xl font-medium hover:bg-[#7C3AED] transition-all">
              Commencer l’évaluation
            </button>
          </div>

          {/* Évaluation automatique */}
          <div className="bg-gradient-to-br from-[#1E293B] to-[#10B981]/30 rounded-2xl p-8 w-full md:w-1/2 border border-[#10B981]/30 shadow-lg hover:shadow-[#10B981]/40 transition-all transform hover:-translate-y-2">
            <div className="text-[#10B981] text-5xl mb-4 flex justify-center">
              <FaRobot />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Évaluation automatique</h3>
            <p className="text-gray-400 mb-6">
              Téléversez votre code ou entrez un lien GitHub pour une évaluation
              automatique selon les métriques de performance, fiabilité et sécurité.
            </p>
            <button className="bg-[#10B981] px-6 py-3 rounded-xl font-medium hover:bg-[#0EA371] transition-all">
              Lancer l’analyse
            </button>
          </div>
        </div>
      </section>

      {/* Étapes du processus */}
      <section className="bg-gradient-to-tr from-[#1E293B] via-[#273549] to-[#1E293B] text-white rounded-2xl shadow-2xl mx-8 max-w-7xl p-10 mb-20 transition-transform duration-500">
        <h3 className="text-3xl font-semibold mb-8 text-center text-[#10B981] drop-shadow-md">
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
              className="bg-[#1E293B]/70 hover:bg-[#334155]/80 rounded-xl p-6 shadow-lg hover:shadow-[#10B981]/30 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="text-[#10B981] text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section de synchronisation */}
      <section className="max-w-7xl mx-auto text-center mb-20 px-8">
        <div className="bg-[#1E293B] border border-[#8B5CF6]/20 rounded-2xl p-10 shadow-lg hover:shadow-[#8B5CF6]/30 transition-all">
          <div className="flex justify-center text-5xl text-[#8B5CF6] mb-4">
            <FaSyncAlt className="animate-spin-slow" />
          </div>
          <h3 className="text-2xl font-semibold mb-2">Synchronisation en cours</h3>
          <p className="text-gray-400">
            Connectez votre projet pour synchroniser automatiquement les
            indicateurs ISO 25010.
          </p>
        </div>
      </section>

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

export default Evaluation;
