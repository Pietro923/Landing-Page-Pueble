'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: {
      // Navegación
      'nav.home': 'Inicio',
      'nav.about': 'Nosotros',
      'nav.company': 'Empresa',
      'nav.contact': 'Contacto',
      'nav.services': 'Servicios',
      'nav.equipment': 'Equipos',
      'nav.used': 'Usados',
      
      // Hero
      'hero.welcome': 'Bienvenido a',
      'hero.description': 'Líderes en maquinaria agrícola y de construcción. Innovación, calidad y servicio excepcional desde 2003.',
      'hero.explore': 'Explorar productos',
      'hero.contact': 'Contactar ahora',
      
      // Stats
      'stats.experience': 'Años de experiencia',
      'stats.support': 'Soporte técnico',
      'stats.commitment': 'Compromiso',
      
      // Botones comunes
      'common.learnMore': 'Conocer más',
      'common.contactUs': 'Contáctanos',
      'common.search': 'Buscar',
    }
  },
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About Us',
      'nav.company': 'Company',
      'nav.contact': 'Contact',
      'nav.services': 'Services',
      'nav.equipment': 'Equipment',
      'nav.used': 'Used',
      
      // Hero
      'hero.welcome': 'Welcome to',
      'hero.description': 'Leaders in agricultural and construction machinery. Innovation, quality and exceptional service since 2003.',
      'hero.explore': 'Explore products',
      'hero.contact': 'Contact now',
      
      // Stats
      'stats.experience': 'Years of experience',
      'stats.support': 'Technical support',
      'stats.commitment': 'Commitment',
      
      // Common buttons
      'common.learnMore': 'Learn more',
      'common.contactUs': 'Contact us',
      'common.search': 'Search',
    }
  }
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18next;