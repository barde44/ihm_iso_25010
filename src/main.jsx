import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Evaluation from "./pages/Evaluation";
import TableauDeBord from "./pages/TableauDeBord";
import RapportResultat from "./pages/RapportResultat";
import Parametre from "./pages/Parametres";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/tableau" element={<TableauDeBord />} />
        <Route path="/rapport" element={<RapportResultat />} />
        <Route path="/parametre" element={<Parametre />} />
      </Routes>
    </Router>
  </React.StrictMode>
);