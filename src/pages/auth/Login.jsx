import logo from '../../assets/logo.png'
import NavBarMinimal from '../../components/NavBarMinimal';

function Login() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
      
      {/* Navbar */}
      <NavBarMinimal />

      {/* Contenu centré verticalement avec un peu plus de padding-top */}
      <div className="flex flex-col justify-center flex-1 px-6 py-3 lg:px-8 mt-20">

        {/* Logo et titre */}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="ISOQualityApp"
            src={logo}
            className="mx-auto h-30 w-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Connectez-vous à votre compte
          </h2>
        </div>

        {/* Formulaire */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Adresse e-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="votre@email.com"
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
                  >
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="block w-full rounded-md bg-white dark:bg-gray-800 px-3 py-1.5 text-base text-gray-900 dark:text-gray-100 outline-1 -outline-offset-1 outline-gray-300 dark:outline-gray-700 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Bouton connexion */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 dark:bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 dark:hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>

          {/* Lien vers création de compte */}
          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            Pas encore de compte?{' '}
            <a
              href="/signup"
              className="font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              Créez-en un ici
            </a>
          </p>
        </div>

      </div>
    </div>
  )
}

export default Login;
