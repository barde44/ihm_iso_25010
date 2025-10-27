import { useState } from "react";
import frFlag from "../assets/flags/fr.png";
import enFlag from "../assets/flags/en.png";

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState({ code: "fr", label: "FR", flag: frFlag });

  const languages = [
    { code: "fr", label: "FR", flag: frFlag },
    { code: "en", label: "EN", flag: enFlag },
  ];

  return (
<div className="relative">
  <button
    onClick={() => setOpen(!open)}
    className="flex items-center bg-gray-200 dark:bg-gray-800 
               text-gray-800 dark:text-gray-200 text-base px-2 py-1 rounded-md 
               border border-gray-300 dark:border-gray-700 
               hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
  >
    <img src={lang.flag} alt={lang.label} className="w-5 h-5 mr-2 rounded-sm" />
    <span className="mr-2">{lang.label}</span>

    {/* Flèche dropdown */}
    <svg
      className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {open && (
    <div className="absolute mt-1 bg-gray-100 dark:bg-gray-800 
                    border border-gray-300 dark:border-gray-700 
                    rounded-md w-full z-10 shadow-lg">
      {languages.map((l) => (
        <div
          key={l.code}
          onClick={() => { setLang(l); setOpen(false); }}
          className="flex items-center px-3 py-2 text-gray-800 dark:text-gray-200 
                     hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
        >
          <img src={l.flag} alt={l.label} className="w-5 h-5 mr-2 rounded-sm" />
          {l.label}
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default LanguageSelector;
