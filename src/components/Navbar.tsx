import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary-dark">
            IT Solutions
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">
              {t("nav.home")}
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-primary">
              {t("nav.jobs")}
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">
              {t("nav.contact")}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition"
            >
              {i18n.language === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {t("nav.home")}
              </Link>
              <Link
                to="/jobs"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {t("nav.jobs")}
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary"
              >
                {t("nav.contact")}
              </Link>
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-2 text-gray-700 hover:text-primary"
              >
                {i18n.language === "es" ? "English" : "Español"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};