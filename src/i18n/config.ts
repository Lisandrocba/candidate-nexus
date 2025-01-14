import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        jobs: "Jobs",
        contact: "Contact",
      },
      hero: {
        title: "Your IT Talent Partner",
        subtitle: "We connect top companies with the best IT professionals",
        cta1: "View Open Positions",
        cta2: "Contact Us",
      },
      stats: {
        title: "Numbers That Speak",
        placements: "Successful Placements",
        satisfaction: "Client Satisfaction",
        clients: "Active Clients",
        response: "Average Response Time",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        jobs: "Empleos",
        contact: "Contacto",
      },
      hero: {
        title: "Tu Socio en Talento IT",
        subtitle: "Conectamos las mejores empresas con los mejores profesionales IT",
        cta1: "Ver Posiciones Abiertas",
        cta2: "Contáctanos",
      },
      stats: {
        title: "Números que Hablan",
        placements: "Colocaciones Exitosas",
        satisfaction: "Satisfacción de Clientes",
        clients: "Clientes Activos",
        response: "Tiempo de Respuesta Promedio",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;