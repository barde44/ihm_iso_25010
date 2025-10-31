import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Accueil from './pages/Accueil'
import RapportResultat from './pages/RapportResultat'
import Evaluation from './pages/Evaluation'
import Dashboard from './pages/Dashboard'
import Parametre from './pages/Parametres'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import PrivacyConsent from './components/PrivacyConsent'
import Contact from './pages/Contact';
import Services from './pages/Services';
import About from './pages/about'
import EvaluationManuelle from './pages/EvaluationManuelle'
import SoumissionProjet from './pages/SoumissionProjet'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/evaluation/manual" element={< EvaluationManuelle/>} />
        <Route path="/evaluation/automatic" element={< SoumissionProjet/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rapport" element={<RapportResultat />} />
        <Route path="/parametre" element={<Parametre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <PrivacyConsent />
    </Router>
   </div>
  )
}

export default App
