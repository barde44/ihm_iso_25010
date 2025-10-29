import React, { useState } from "react";
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
  const [darkMode, setDarkMode] = useState(true);
  const [langue, setLangue] = useState("Français");
  const [auth2FA, setAuth2FA] = useState(false);

  return (

    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>

      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Paramètres</h1>

        {/* SECTION 1 : Compte et Application */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Compte */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Compte</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <UserIcon className="h-5 w-5" />
                  <span>Informations personnelles</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>Adresse e-mail</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <KeyIcon className="h-5 w-5" />
                  <span>Changer de mot de passe</span>
                </div>
              </div>
            </div>
          </div>

          {/* Application */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Application</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <GlobeAltIcon className="h-5 w-5" />
                  <span>Langue</span>
                </div>
                <span>{langue}</span>
              </div>
              <div
                className="flex items-center justify-between bg-gray-700 p-3 rounded-lg cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              >
                <div className="flex items-center space-x-3">
                  <MoonIcon className="h-5 w-5" />
                  <span>Thème</span>
                </div>
                <span>{darkMode ? "Sombre" : "Clair"}</span>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
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
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Sécurité</h2>
            <div className="space-y-4">
              <div
                className="flex items-center justify-between bg-gray-700 p-3 rounded-lg cursor-pointer"
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
                  className="w-4 h-4 accent-blue-500"
                />
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <span>Sessions actives</span>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Support</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <QuestionMarkCircleIcon className="h-5 w-5" />
                  <span>Centre d’aide</span>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <ChatBubbleLeftRightIcon className="h-5 w-5" />
                  <span>Nous contacter</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 3 : Support technique (table) */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Support</h2>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-400">
                <th>Centre d’aide</th>
                <th>Statut</th>
                <th>Durée</th>
                <th>Pourcentage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-700 rounded-lg">
                <td className="p-3">Test Authentification</td>
                <td>Manuel</td>
                <td>2.3 s</td>
                <td>100%</td>
              </tr>
              <tr className="bg-gray-700 rounded-lg">
                <td className="p-3">Test Sécurité API</td>
                <td>Automatique</td>
                <td>3.7 s</td>
                <td>80%</td>
              </tr>
              <tr className="bg-gray-700 rounded-lg">
                <td className="p-3">Test Interface</td>
                <td>Manuelle</td>
                <td>1.5 s</td>
                <td>60%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
   
  );
}