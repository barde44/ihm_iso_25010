import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaGithub,
  FaYoutube
} from "react-icons/fa6";
import logo from '../assets/logo.png'

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-400 transition-colors duration-300">
      {/* Logo et description + réseaux sociaux */}
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="md:w-2/5">
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 mr-3"
            />
            <span className="text-gray-900 dark:text-white font-semibold text-xl">
              ISOQualityApp
            </span>
          </div>
          <p className="text-base leading-relaxed mb-6">
            Making the world a better place through constructing elegant hierarchies.
          </p>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF className="hover:text-gray-900 dark:hover:text-white" /></a>
            <a href="#"><FaInstagram className="hover:text-gray-900 dark:hover:text-white" /></a>
            <a href="#"><FaXTwitter className="hover:text-gray-900 dark:hover:text-white" /></a>
            <a href="#"><FaGithub className="hover:text-gray-900 dark:hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-gray-900 dark:hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Colonnes Solutions / Support / Company / Legal */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-base">
        {/* Solutions */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Solutions</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Marketing</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Analytics</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Automation</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Commerce</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Insights</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Submit ticket</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Guides</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Jobs</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Press</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-semibold mb-4 text-lg">Legal</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-gray-900 dark:hover:text-white">License</a></li>
          </ul>
        </div>
      </div>

      {/* Ligne du bas */}
      <div className="border-t border-gray-300 dark:border-gray-700 py-6 text-center text-base text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} ISOQualityApp, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;