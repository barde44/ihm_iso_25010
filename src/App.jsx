import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Accueil from './pages/Accueil'
import RapportResultat from './pages/RapportResultat'
import Evaluation from './pages/Evaluation'
import Dashboard from './pages/Dashboard'
import Parametre from './pages/Parametres'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Accueil />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rapport" element={<RapportResultat />} />
        <Route path="/parametre" element={<Parametre />} />
      </Routes>
    </Router>
   </div>
  )
}

export default App
