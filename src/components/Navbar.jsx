import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserIcon } from '@heroicons/react/24/solid';
import Mode from "./Mode";
import LanguageSelector from "./LanguageSelector";
import logo from '../assets/logo.png'  


const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) =>
    location.pathname === path
      ? "text-[#8B5CF6] border-b border-[#8B5CF6] pb-1"
      : "hover:text-[#8B5CF6]";

  return (
   <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo et nom */}

        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
          <img
            src={logo}
            alt="Logo ISOQualityApp"
            className="w-11 h-8 rounded-md object-cover"
          />
          <h1 className="font-semibold text-xl text-gray-900 dark:text-white">ISOQualityApp</h1>
        </Link>

        </div>

        

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-gray-700 dark:text-gray-300 text-base font-medium">
          <Link to="/" className={isActive("/")}>
            Accueil
          </Link>
          <Link to="/evaluation" className={isActive("/evaluation")}>
            Évaluation
          </Link>
          <Link to="/dashboard" className={isActive("/dashboard")}>
            Tableau de bord
          </Link>
          <Link to="/rapport" className={isActive("/rapport")}>
            Rapports / Résultats
          </Link>
          <Link to="/parametre" className={isActive("/parametre")}>
            Paramètres
          </Link>
        </nav>


  <div className="flex items-center gap-4">
    <Mode />

    <LanguageSelector />

    <div className="flex gap-2">
    <div
      className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md cursor-pointer 
                hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      onClick={() => navigate("/signin")}
    >
      <UserIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
      <span className="text-sm text-gray-800 dark:text-gray-200">Connexion</span>
    </div>

    </div>

  </div>

    </div>
    </header>
  );
};

export default Navbar;

