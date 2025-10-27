import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import Mode from "./Mode";
import LanguageSelector from "./LanguageSelector";

const NavbarMinimal = () => {
  return (
   <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo et nom */}
        <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo ISOQualityApp"
            className="w-11 h-8 rounded-md object-cover"
          />
          <h1 className="font-semibold text-xl text-gray-900 dark:text-white">ISOQualityApp</h1>
        </Link>
      </div>

        {/* Mode et langue */}
        <div className="flex items-center gap-4">
          <Mode />
          <LanguageSelector />
        </div>

      </div>
    </header>
  );
};

export default NavbarMinimal;
