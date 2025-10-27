
import { FaUserCog, FaLock, FaPalette, FaGlobe, FaDatabase } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Parametres = () => {

  return (
    <div className="bg-[#0F172A] text-white min-h-screen font-['Poppins']">

      <Navbar />

      <main className="pt-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-[#8B5CF6]">
          Paramètres de l’application
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaUserCog />,
              title: "Profil utilisateur",
              desc: "Gérez vos informations personnelles, votre photo et vos préférences de compte.",
              color: "from-[#1E293B] to-[#334155]",
            },
            {
              icon: <FaLock />,
              title: "Sécurité et mots de passe",
              desc: "Changez votre mot de passe, configurez la double authentification et gérez l’accès.",
              color: "from-[#1E293B] to-[#3B82F6]",
            },
            {
              icon: <FaPalette />,
              title: "Apparence et thème",
              desc: "Choisissez entre le mode clair, sombre ou personnalisé selon vos goûts.",
              color: "from-[#1E293B] to-[#8B5CF6]",
            },
            {
              icon: <FaGlobe />,
              title: "Langue et région",
              desc: "Définissez la langue, le fuseau horaire et les formats de date ou de nombre.",
              color: "from-[#1E293B] to-[#10B981]",
            },
            {
              icon: <FaDatabase />,
              title: "Sauvegarde & Données",
              desc: "Sauvegardez ou restaurez vos paramètres, et gérez les données locales.",
              color: "from-[#1E293B] to-[#F59E0B]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`bg-linear-to-br ${item.color} p-6 rounded-2xl shadow-lg hover:shadow-[#8B5CF6]/30 border border-[#8B5CF6]/10 transition-all duration-500 transform hover:-translate-y-2`}
            >
              <div className="text-4xl text-[#8B5CF6] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
              <button className="mt-4 px-4 py-2 bg-[#8B5CF6] rounded-lg text-sm hover:bg-[#7C3AED] transition-all">
                Gérer
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Parametres;
