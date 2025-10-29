import {
  FaShieldAlt,
  FaLock,
  FaTools,
  FaBalanceScale,
  FaTachometerAlt,
  FaUserCheck,
  FaExchangeAlt,
  FaCogs,
} from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from '../assets/logo.png'
import Newsletter from "../components/Newsletter";
import Prices from "../components/Prices";

const Accueil = () => {

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0F172A] dark:text-white">

        <Navbar />

      <section className="pt-32 pb-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Évaluez la qualité de vos logiciels selon la norme{" "}
            <span className="text-[#8B5CF6]">ISO 25010</span>
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Une solution numérique complète pour mesurer, visualiser et
            améliorer la performance, la sécurité et la fiabilité de vos
            applications.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#10B981] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#0EA371] transition-all">
              Évaluation manuelle
            </button>
            <button className="bg-[#8B5CF6] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#7C3AED] transition-all">
              Évaluation automatique
            </button>
          </div>
        </div>

       <div className="flex justify-center">
        <img
          src={logo}
          alt="Illustration Dashboard"
          className="w-96 md:w-lg animate-[float_6s_ease-in-out_infinite]"
        />
      </div>

      </section>

      {/* Pourquoi ISO 25010 */}
<section
  className="
    bg-linear-to-br from-gray-200 via-gray-200 to-white text-gray-900
    dark:from-[#1E293B] dark:via-[#273549] dark:to-[#1E293B] dark:text-white
    rounded-2xl shadow-2xl mx-8 max-w-7xl p-10 mb-20
    transform hover:scale-[1.01] transition-transform duration-500">
      
  <h3 className="text-3xl font-semibold mb-8 text-center text-[#8B5CF6] drop-shadow-md">
    Pourquoi ISO 25010 ?
  </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FaShieldAlt />, title: "Fiabilité" },
            { icon: <FaLock />, title: "Sécurité" },
            { icon: <FaTools />, title: "Maintenabilité" },
            { icon: <FaBalanceScale />, title: "Conformité" },
            { icon: <FaTachometerAlt />, title: "Performance" },
            { icon: <FaUserCheck />, title: "Utilisabilité" },
            { icon: <FaExchangeAlt />, title: "Portabilité" },
            { icon: <FaCogs />, title: "Fonctionnalité" },
          ].map((item, i) => (
            <div
              key={i}
              className="
              bg-white/80 dark:bg-[#1E293B]/70 backdrop-blur-md 
              hover:bg-gray-100 dark:hover:bg-[#334155]/80 
              shadow-lg hover:shadow-[#8B5CF6]/30 rounded-xl p-6 
              border border-gray-200 dark:border-[#8B5CF6]/10 text-center 
              transition-all duration-500 transform hover:-translate-y-2">

              <div className="text-[#8B5CF6] text-4xl mb-3 drop-shadow-lg">
                {item.icon}
              </div>
              <h4 className="font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-400 text-sm">
                Description courte de {item.title.toLowerCase()} selon ISO 25010.
              </p>
            </div>
          ))}
        </div>
      </section>


    {/* Comment ça marche */}
     <section 
       className="
        bg-linear-to-br from-gray-200 via-gray-200 to-white text-gray-900
        dark:from-[#1E293B] dark:via-[#273549] dark:to-[#1E293B] dark:text-white
        rounded-2xl shadow-2xl mx-8 max-w-7xl p-10 mb-20
        transform hover:scale-[1.01] transition-transform duration-500">

    <h3 className="text-3xl font-semibold mb-8 text-center text-[#10B981] drop-shadow-md">
      Comment ça marche ?
    </h3>

  <div className="grid md:grid-cols-3 gap-6">
    {[
      {
        step: 1,
        title: "Analyse du logiciel",
        desc: "L’utilisateur renseigne les informations du produit à tester.",
      },
      {
        step: 2,
        title: "Évaluation",
        desc: "Manuelle ou automatique selon les besoins.",
      },
      {
        step: 3,
        title: "Résultats & Tableau de bord",
        desc: "Visualisation complète des métriques ISO 25010.",
      },
    ].map((item) => (
      <div
        key={item.step}
        className="
          bg-white/80 dark:bg-[#1E293B]/70 
          hover:bg-gray-100 dark:hover:bg-[#334155]/80 
          rounded-xl p-6 shadow-lg hover:shadow-[#10B981]/30 
          border border-gray-200 dark:border-[#10B981]/10 
          text-center transition-all duration-500 transform hover:-translate-y-2">

        <div className="text-[#10B981] text-3xl font-bold mb-3 drop-shadow-lg">
          {item.step}
        </div>
        <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h4>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Aperçu en direct */}
    <section className="max-w-7xl mx-auto px-8 mb-20 transition-colors duration-500">
      <h3 className="text-3xl font-semibold mb-8 text-center text-[#8B5CF6]">
        Aperçu en direct
      </h3>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Première carte */}
        <div
          className="
            bg-linear-to-br from-gray-100 to-white 
            dark:from-[#1E293B] dark:to-[#0F172A] 
            border border-[#8B5CF6]/30 p-6 rounded-2xl 
            shadow-[0_10px_25px_rgba(139,92,246,0.15)] 
            hover:shadow-[0_20px_40px_rgba(139,92,246,0.35)] 
            transform hover:-translate-y-2 
            transition-all duration-500">
              
          <p className="italic text-gray-700 dark:text-gray-300">
            “Une plateforme complète pour auditer nos produits logiciels.”
          </p>
        </div>

        {/* Deuxième carte */}
        <div
          className="
            bg-linear-to-br from-gray-100 to-white 
            dark:from-[#1E293B] dark:to-[#0F172A] 
            border border-[#10B981]/30 p-6 rounded-2xl 
            shadow-[0_10px_25px_rgba(16,185,129,0.15)] 
            hover:shadow-[0_20px_40px_rgba(16,185,129,0.35)] 
            transform hover:-translate-y-2 
            transition-all duration-500">

          <p className="italic text-gray-700 dark:text-gray-300">
            “Grâce à l’évaluation ISO 25010, nous avons amélioré notre performance de 30 % !”
          </p>
        </div>
      </div>
    </section>


      <Prices/>

      <Newsletter />

      <Footer />
    </div>
  );
};

export default Accueil