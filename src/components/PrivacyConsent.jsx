import { useEffect, useState } from "react";
import { CheckCircleIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/privacy-illustration.jpg"; // 🖼️ ton image RGPD

const PrivacyConsent = () => {
  const [visible, setVisible] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const consent = localStorage.getItem("privacy_consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 800);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAcceptAll = () => {
    localStorage.setItem("privacy_consent", "accepted_all");
    setVisible(false);
    showToast("✅ Vous avez accepté tous les cookies !");
  };

  const handleCustom = () => {
    localStorage.setItem("privacy_consent", "custom");
    setVisible(false);
    showToast("⚙️ Préférences personnalisées enregistrées");
  };

    const handleSkip = () => {
    // Ferme simplement le bandeau sans stocker quoi que ce soit
    setVisible(false);
    showToast("⚠️ Vous continuez sans accepter les cookies");
  };

  if (!visible)
    return (
      <>
        {/* 👉 Toast centré ou en bas à gauche */}
        {toast && (
          <div
            className={`fixed 
              bottom-8 right-1/2 transform -translate-x-1/2
              md:bottom-8 md:right-8 md:translate-x-0
              px-5 py-3 rounded-lg shadow-2xl text-white text-sm font-medium
              ${toast.type === "success" ? "bg-green-600" : "bg-gray-700"} 
              animate-fade-in z-50`}
          >
            {toast.message}
          </div>
        )}
      </>
    );

  return (
    <>
      {/* Toast (visible même quand le bandeau est affiché) */}
      {toast && (
        <div
          className={`fixed 
            bottom-8 left-1/2 transform -translate-x-1/2
            md:bottom-8 md:left-8 md:translate-x-0
            px-5 py-3 rounded-lg shadow-2xl text-white text-sm font-medium
            ${toast.type === "success" ? "bg-green-600" : "bg-gray-700"} 
            animate-fade-in z-50`}
        >
          {toast.message}
        </div>
      )}

      {/* Bandeau RGPD principal */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-[750px] z-40">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 border border-gray-200 dark:border-gray-700 flex flex-col md:flex-row items-center gap-5 animate-slide-up">
          
          {/* Illustration */}
          <div className="hidden md:block shrink-0">
            <img
              src={illustration}
              alt="Confidentialité"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Texte et boutons */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <AdjustmentsHorizontalIcon className="w-6 h-6 text-[#8B5CF6]" />
              Gestion de la confidentialité
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
              Nous utilisons des cookies pour améliorer votre expérience, mesurer les performances et personnaliser le contenu.
              Vous pouvez accepter tous les cookies ou définir vos préférences.
            </p>

            <div className="flex flex-col md:flex-row justify-end gap-3 mt-4">
              <button
                onClick={handleCustom}
                className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                  text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                Pour moi
              </button>
              <button
                onClick={handleAcceptAll}
                className="w-full md:w-auto px-4 py-2 rounded-lg bg-[#8B5CF6] text-white font-medium hover:bg-[#7C3AED] 
                  transition flex items-center justify-center gap-2"
              >
                <CheckCircleIcon className="w-5 h-5" />
                Tout accepter
              </button>

               <button
                  onClick={handleSkip}
                  className="w-full md:w-auto px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                    text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition flex items-center justify-center gap-2"
                >
                  Continuer sans accepter
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyConsent;
