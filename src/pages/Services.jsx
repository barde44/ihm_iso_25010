import React from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  FaClipboardCheck,
  FaChartLine,
  FaBug,
  FaCloudUploadAlt,
  FaDatabase,
  FaLock,
  FaCogs,
  FaFileAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaClipboardCheck />,
      title: "Évaluation de la qualité logicielle",
      description:
        "Analyse complète des critères ISO 25010 : fiabilité, sécurité, maintenabilité et performance de vos logiciels.",
    },
    {
      icon: <FaChartLine />,
      title: "Audit de performance",
      description:
        "Mesurez la rapidité, la réactivité et l’efficacité de votre système à l’aide de nos outils avancés d’analyse.",
    },
    {
      icon: <FaBug />,
      title: "Détection et correction d’anomalies",
      description:
        "Identification proactive des défaillances et recommandations pour optimiser la stabilité de vos applications.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Intégration continue & automatisation",
      description:
        "Mettez en place des pipelines d’évaluation automatisés pour suivre la qualité à chaque mise à jour.",
    },
    {
      icon: <FaDatabase />,
      title: "Analyse des données qualité",
      description:
        "Extraction, suivi et visualisation des métriques de qualité logicielle grâce à notre tableau de bord intelligent.",
    },
    {
      icon: <FaLock />,
      title: "Sécurité & conformité",
      description:
        "Vérification de la robustesse, des vulnérabilités et de la conformité aux normes ISO et RGPD.",
    },
    {
      icon: <FaCogs />,
      title: "Conseil en amélioration continue",
      description:
        "Accompagnement personnalisé pour renforcer vos processus de développement et vos bonnes pratiques qualité.",
    },
    {
      icon: <FaFileAlt />,
      title: "Rapports d’évaluation détaillés",
      description:
        "Générez automatiquement des rapports lisibles et exploitables, conformes à la norme ISO/IEC 25010.",
    },
  ];

  return (
       <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white transition-colors duration-300">
      {/* 🔷 Navbar */}
      <Navbar />

      {/* 🧩 Section principale */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center mt-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white drop-shadow-md">
          Nos Services
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
          Découvrez les services offerts par{" "}
          <span className="text-[#8B5CF6] font-semibold">ISOQualityApp</span>{" "}
          pour garantir la qualité, la sécurité et la conformité de vos projets logiciels selon la norme ISO 25010.
        </p>

        {/* 🧱 Cartes des services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#1E293B] p-8 rounded-xl shadow-lg hover:shadow-[#8B5CF6]/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.03]"
            >
              <div className="text-[#8B5CF6] text-4xl mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* 🚀 CTA */}
        <div className="mt-16">
          <Link
            to="/signin"
            className="bg-[#8B5CF6] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#7C3AED] transition-all shadow-lg"
          >
            Soumettre un projet pour évaluation
          </Link>
        </div>
      </section>

      {/* 📜 Footer */}
      <Footer />
    </div>
  );
};

export default Services;
