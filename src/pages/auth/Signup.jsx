import logo from '../../assets/logo.png'
import NavBarMinimal from '../../components/NavBarMinimal';

function Signup() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // ici tu peux ajouter la logique pour créer un compte via ton API
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !")
      return
    }
    console.log("Création de compte:", formData)
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-20 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      
       <NavBarMinimal />
      {/* Logo et titre */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="ISOQualityApp"
          src={logo}
          className="mx-auto h-30 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Créez votre compte
        </h2>
      </div>

      {/* Formulaire */}
<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
  <form onSubmit={handleSubmit} className="space-y-6">

    {/* Nom et Email sur une ligne */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Nom */}
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Nom complet
        </label>
        <div className="mt-2">
          <input
            id="nom"
            name="nom"
            type="text"
            required
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Adresse e-mail
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>
    </div>

    {/* Mot de passe et confirmation sur une ligne */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Mot de passe */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Mot de passe
        </label>
        <div className="mt-2">
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>

      {/* Confirmation */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900 dark:text-gray-100">
          Confirmer le mot de passe
        </label>
        <div className="mt-2">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-2 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
          />
        </div>
      </div>
    </div>

    {/* Bouton création de compte */}
    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Créer mon compte
      </button>
    </div>
  </form>
</div>

    </div>
  )
}

export default Signup;
