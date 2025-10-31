import React from "react";
import { FaUsers, FaCheckCircle, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
       <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white transition-colors duration-300">
      {/* 🔷 Navbar */}
      <Navbar />

      {/* 🧠 Contenu principal */}
      <section className="max-w-6xl mx-auto text-center py-16 px-6 mt-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          À propos de ISOQualityApp
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          ISOQualityApp est une plateforme dédiée à l’évaluation de la qualité logicielle selon la norme
          <span className="text-[#8B5CF6] font-semibold"> ISO/IEC 25010</span>.  
          Notre objectif est d’aider les entreprises et développeurs à mesurer, analyser et améliorer
          la fiabilité, la performance et la maintenabilité de leurs projets logiciels.
        </p>

        {/* 💎 Cartes de mission */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-[#1E293B] p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaLightbulb className="text-[#8B5CF6] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Notre Vision</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Favoriser une culture de qualité logicielle durable et mesurable
              dans tous les domaines du développement numérique.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#1E293B] p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaUsers className="text-[#8B5CF6] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Notre Équipe</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Composée d’experts en ingénierie logicielle et en conformité ISO, 
              notre équipe met l’accent sur la précision et la transparence.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#1E293B] p-8 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <FaCheckCircle className="text-[#8B5CF6] text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Nos Engagements</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Offrir des évaluations fiables, des rapports clairs et des recommandations pratiques 
              pour améliorer la qualité logicielle.
            </p>
          </div>
        </div>

        {/* 🪪 Section de contact */}
        <div className="mt-16 bg-gray-100 dark:bg-[#1E293B] p-10 rounded-xl shadow-md max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-[#8B5CF6]">
            Contactez-nous
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Vous souhaitez en savoir plus sur nos services ou collaborer avec nous ?  
            N’hésitez pas à nous écrire :
          </p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            📧 contact@isoqualityapp.com
          </p>
        </div>
      </section>

      {/* 📜 Footer */}
      <Footer />
    </div>
  );
};

export default About;