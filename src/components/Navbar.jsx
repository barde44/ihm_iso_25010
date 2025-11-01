import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Mode from "./Mode";
import LanguageSelector from "./LanguageSelector";
import logo from '../assets/logo.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

const isActive = (path) =>
  location.pathname === path
    ? "block text-[#8B5CF6] border-b border-[#8B5CF6] pb-2 hover:text-[#8B5CF6]"
    : "block text-gray-700 dark:text-gray-300 pb-2 hover:text-[#8B5CF6]";



  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition">
          <img src={logo} alt="Logo ISOQualityApp" className="w-11 h-8 rounded-md object-cover" />
          <h1 className="font-semibold text-xl text-gray-900 dark:text-white hidden sm:block">
            ISOQuality
          </h1>
        </Link>


        {/* Hamburger mobile */}
        <div className="md:hidden flex items-center gap-2">
          <Mode />
          <LanguageSelector />
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            {open ? <XMarkIcon className="w-6 h-6 text-gray-900 dark:text-white" /> : <Bars3Icon className="w-6 h-6 text-gray-900 dark:text-white" />}
          </button>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-300 text-base font-medium">
          <Link to="/" className={isActive("/")}>Accueil</Link>
          <Link to="/about" className={isActive("/about")}>A propos</Link>
          <Link to="/services" className={isActive("/services")}>Services</Link>
          <Link to="/contact" className={isActive("/contact")}>Contact</Link>
          <Mode />
          <LanguageSelector />
          <div
            className="flex items-center gap-1 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            onClick={() => navigate("/login")}
          >
            <UserIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
            <span className="text-sm text-gray-800 dark:text-gray-200">Connexion</span>
          </div>
        </nav>

      </div>

    {/* Mobile menu */}
    {open && (
      <div className="md:hidden bg-white dark:bg-[#0F172A]/95 border-t border-gray-200 dark:border-white/10 py-4 px-4 flex flex-col gap-3">
          <Link to="/" className={isActive("/")}>Accueil</Link>
          <Link to="/about" className={isActive("/about")}>A propos</Link>
          <Link to="/services" className={isActive("/services")}>Services</Link>
          <Link to="/contact" className={isActive("/contact")}>Contact</Link>
        <div className="flex flex-col gap-2">
          <LanguageSelector />
        </div>
        <Link to="/signin" className={isActive("/login")}>Connexion</Link>
      </div>
    )}
    </header>
  );
};

export default Navbar;
