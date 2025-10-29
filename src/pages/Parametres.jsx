import React, { useState, useEffect } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  KeyIcon,
  GlobeAltIcon,
  MoonIcon,
  BellIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Parametres() {
  const [langue, setLangue] = useState("Français");
  const [auth2FA, setAuth2FA] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // ⬇️ Met à jour le thème du site quand on change
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />

      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Paramètres</h1>

        {/* SECTION 1 : Compte et Application */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Compte */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Compte</h2>
            <div className="space-y-4">
              {[
                { icon: <UserIcon className="h-5 w-5" />, label: "Informations personnelles" },
                { icon: <EnvelopeIcon className="h-5 w-5" />, label: "Adresse e-mail" },
                { icon: <KeyIcon className="h-5 w-5" />, label: "Changer de mot de passe" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Application</h2>
            <div className="space-y-4">
              {/* Langue */}
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="h-5 w-5" />
                  <span>Langue</span>
                </div>
                <span>{langue}</span>
              </div>

              {/* Thème clair/sombre */}
              <div
                className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg cursor-pointer"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <div className="flex items-center space-x-3">
                  <MoonIcon className="h-5 w-5" />
                  <span>Thème</span>
                </div>
                <span className="text-sm font-medium">
                  {isDarkMode ? "Sombre" : "Clair"}
                </span>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <BellIcon className="h-5 w-5" />
                  <span>Notifications</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 : Sécurité et Support */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Sécurité */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sécurité</h2>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg cursor-pointer"
                onClick={() => setAuth2FA(!auth2FA)}
              >
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="h-5 w-5" />
                  <span>Authentification à deux facteurs</span>
                </div>
                <input
                  type="checkbox"
                  checked={auth2FA}
                  readOnly
                  className="w-4 h-4 accent-indigo-600"
                />
              </div>
              <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <span>Sessions actives</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <div className="space-y-4">
              {[
                { icon: <QuestionMarkCircleIcon className="h-5 w-5" />, label: "Centre d’aide" },
                { icon: <ChatBubbleLeftRightIcon className="h-5 w-5" />, label: "Nous contacter" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 3 : Support technique (table) */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Support technique</h2>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-500 dark:text-gray-400">
                <th>Centre d’aide</th>
                <th>Statut</th>
                <th>Durée</th>
                <th>Pourcentage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Test Authentification", "Manuel", "2.3 s", "100%"],
                ["Test Sécurité API", "Automatique", "3.7 s", "80%"],
                ["Test Interface", "Manuelle", "1.5 s", "60%"],
              ].map(([test, statut, duree, pourcentage], index) => (
                <tr
                  key={index}
                  className="bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition"
                >
                  <td className="p-3">{test}</td>
                  <td>{statut}</td>
                  <td>{duree}</td>
                  <td>{pourcentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
