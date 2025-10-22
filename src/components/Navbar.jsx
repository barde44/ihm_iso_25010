import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">ISO 25010 IHM</h1>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-300">Accueil</Link>
        <Link to="/evaluation" className="hover:text-gray-300">Évaluation</Link>
        <Link to="/tableau-de-bord" className="hover:text-gray-300">Tableau de bord</Link>
      </div>
    </nav>
  );
}
