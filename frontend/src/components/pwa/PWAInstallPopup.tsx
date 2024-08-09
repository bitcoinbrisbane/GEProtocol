// components/PWAInstallPopup.tsx
"use client";
import { useEffect, useState } from "react";

const PWAInstallPopup = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hidePopupUntil = localStorage.getItem("pwa-hide-popup-until");
    if (hidePopupUntil && new Date(hidePopupUntil) > new Date()) {
      return;
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!localStorage.getItem("pwa-installed")) {
        setShowInstallPopup(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          localStorage.setItem("pwa-installed", "true");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setShowInstallPopup(false);
      });
    }
  };

  const handleClosePopup = () => {
    if (dontShowAgain) {
      const oneWeekLater = new Date();
      oneWeekLater.setDate(oneWeekLater.getDate() + 7);
      localStorage.setItem("pwa-hide-popup-until", oneWeekLater.toISOString());
    }
    setShowInstallPopup(false);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDontShowAgain(e.target.checked);
  };

  if (!showInstallPopup) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-xs md:text-base bg-secondary-dark-500 text-white mx-2 p-4 rounded-lg shadow-lg text-center">
        <h2 className="text-lg font-bold mb-4">Install App?</h2>
        <p className="mb-4">
          Install this app on your device for a better experience.
        </p>
        <div className="mt-4 mb-2">
          <input
            type="checkbox"
            id="dontShowAgain"
            checked={dontShowAgain}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="dontShowAgain" className="ml-2">
            {"Don't show this again for a week"}
          </label>
        </div>
        <button
          className="bg-primary-gold-500 text-white px-4 py-2 rounded mr-2"
          onClick={handleInstallClick}
        >
          Install
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handleClosePopup}
        >
          Later
        </button>
      </div>
    </div>
  );
};

export default PWAInstallPopup;
