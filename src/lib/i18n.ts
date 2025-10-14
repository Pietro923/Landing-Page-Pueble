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
      'hero.excellence': 'Más de 20 años de excelencia',
      'hero.welcome': 'Bienvenido a',
      'hero.gp': 'Una Empresa de ',
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

      // GrupoPueble.tsx
      'grupoPueble.badge': 'Grupo Empresarial',
      'grupoPueble.title': 'Empresas que forman parte del',
      'grupoPueble.description': 'Un grupo empresarial consolidado que trabaja en conjunto para brindar soluciones integrales',
      'grupoPueble.learnMore': 'Conocer más',
      'grupoPueble.detail': 'Haz clic en cada empresa para conocer más detalles',
      'grupoPueble.pueble-sa': 'Maquinaria agrícola de primera línea y soluciones integrales para el sector agroindustrial',
      'grupoPueble.jcb': 'Maquinaria de construcción de primera línea y soluciones integrales para el sector de la construcción',
      'grupoPueble.kia': 'Vehículos comerciales y de pasajeros confiables y eficientes para todas las necesidades',
      'grupoPueble.semage-sa': 'Servicio de posventa de maquinarias agrícolas y viales CASE IH y CASE (servicio y repuestos originales)',
      'grupoPueble.masi-sa': 'Concesionario oficial DUCATI, ofreciendo motocicletas de alto rendimiento y estilo inigualable',
      'grupoPueble.ubmotors': 'Concesionario oficial AUDI, brindando vehículos de lujo con tecnología avanzada y diseño sofisticado',

      // Marcas.tsx
      'marcas.badge': 'Nuestras Marcas',
      'marcas.title': 'Maquinaria Agrícola y',
      'marcas.subtitle': 'de Construcción',
      'marcas.description': 'Representantes oficiales de las marcas más destacadas en cada segmento. Soluciones integrales para tu campo y construcción.',
      'marcas.explore': 'Explorar productos',
      'marcas.case.description': 'Máquinas confiables diseñadas para maximizar la productividad.',
      'marcas.case.features1': 'Maquinaria agrícola',
      'marcas.case.features2': 'Alta productividad',
      'marcas.case.features3': 'Última tecnología',
      'marcas.jcb.description': 'Soluciones innovadoras para la construcción y el movimiento de tierras.',
      'marcas.jcb.features1': 'Construcción',
      'marcas.jcb.features2': 'Vialidad',
      'marcas.jcb.features3': 'Tecnología avanzada',
      'marcas.cta': '¿Necesitás asesoramiento personalizado?',
      'marcas.cta2': 'Nuestro equipo de expertos está disponible 24/7 para brindarte la mejor atención y asesoramiento profesional.',
      'marcas.ctaButton': 'Contactar ahora',

      // Nosotros.tsx

      'nosotros.badge': 'Sobre nosotros',
      'nosotros.title': 'Líderes en maquinaria',
      'nosotros.subtitle': 'agrícola y vial',
      'nosotros.description1': 'Somos concesionario oficial de las marcas',
      'nosotros.description1.3': 'Comercializamos toda la línea de sus productos y diversas marcas de maquinarias agrícolas y de construcción usadas.',
      'nosotros.description2': 'Contamos con una sólida estructura en administración, venta de repuestos y servicio de posventa, manteniendo nuestro compromiso con la',
      'nosotros.description2.1': 'Responsabilidad Social Empresaria',
      'nosotros.button': 'Conoce más sobre nosotros',
      'nosotros.experience': 'Años de experiencia',
      'nosotros.stats1': 'Años de experiencia',
      'nosotros.stats2': 'Clientes satisfechos',
      'nosotros.stats3': 'Soporte',
      'nosotros.stats4': 'Crecimiento anual',

      // Novedades.tsx

      'novedades.badge': 'Novedades',
      'novedades.title': 'Nuestras Novedades en el Sector',

      // Contacto.tsx
      'contacto.badge': 'Hablemos',
      'contacto.title': 'Contáctanos',
      'contacto.description': 'Estamos aquí para responder tus consultas y brindarte la mejor atención',
      'contacto.form.title': 'Envía un mensaje',
      'contacto.name': 'Tu Nombre Completo',
      'contacto.email': 'Tu email',
      'contacto.asunto': 'Asunto',
      'contacto.message': 'Tu Mensaje',
      'contacto.button': 'Enviar Mensaje',
      'contacto.informacion': 'Información de Contacto',
      'contacto.phone': 'Teléfono',
      'contacto.emailInfo': 'Email',
      'contacto.address': 'Ubicación',
      'contacto.horarios.title': 'Horarios de atención',
      'contacto.horarios.days': 'Lunes - Viernes',
      'contacto.horarios.sab': 'Sábados',
      'contacto.horarios.emer': 'Servicio de emergencias 24/7',

      // Footer.tsx
      'footer.description':"Líder en maquinaria agrícola y de construcción.",
      'footer.description2': "Más de 20 años brindando soluciones confiables al campo argentino.",
      'footer.contact':"CONTACTO",
      'footer.job':"TRABAJA CON NOSOTROS",
      'footer.job.description':"¿Querés formar parte de nuestro equipo? Dejanos tus datos y te contactaremos.",
      'footer.job.button': "POSTULARME",
      'footer.info': "¿NECESITAS ASESORAMIENTO?",
      'footer.info.description':"Contactanos por WhatsApp.",
      'footer.info.button': "CHATEAR AHORA",
      'footer.copyright': "Todos los derechos reservados.",


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
      'hero.excellence': 'Over 20 years of excellence',
      'hero.welcome': 'Welcome to',
      'hero.gp': 'A Company of ',
      'hero.description': 'Leaders in agricultural and construction machinery. Innovation, quality, and exceptional service since 2003.',
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

      // GrupoPueble.tsx
      'grupoPueble.badge': 'Business Group',
      'grupoPueble.title': 'Companies that are part of the',
      'grupoPueble.description': 'A consolidated business group working together to provide comprehensive solutions',
      'grupoPueble.learnMore': 'Learn more',
      'grupoPueble.detail': 'Click on each company to learn more details',
      'grupoPueble.pueble-sa': 'Top-tier agricultural machinery and integrated solutions for the agribusiness sector',
      'grupoPueble.jcb': 'Leading construction machinery and complete solutions for the construction industry',
      'grupoPueble.kia': 'Reliable and efficient commercial and passenger vehicles for all needs',
      'grupoPueble.semage-sa': 'After-sales service for CASE IH and CASE agricultural and road machinery (original parts and service)',
      'grupoPueble.masi-sa': 'Official DUCATI dealer, offering high-performance motorcycles with unmatched style',
      'grupoPueble.ubmotors': 'Official AUDI dealer, providing luxury vehicles with advanced technology and sophisticated design',

      // Marcas.tsx
      'marcas.badge': 'Our Brands',
      'marcas.title': 'Agricultural and',
      'marcas.subtitle': 'Construction Machinery',
      'marcas.description': 'Official representatives of the most prominent brands in each segment. Comprehensive solutions for your field and construction needs.',
      'marcas.explore': 'Explore products',
      'marcas.case.description': 'Reliable machines designed to maximize productivity.',
      'marcas.case.features1': 'Agricultural machinery',
      'marcas.case.features2': 'High productivity',
      'marcas.case.features3': 'Latest technology',
      'marcas.jcb.description': 'Innovative solutions for construction and earthmoving.',
      'marcas.jcb.features1': 'Construction',
      'marcas.jcb.features2': 'Roadworks',
      'marcas.jcb.features3': 'Advanced technology',
      'marcas.cta': 'Need personalized advice?',
      'marcas.cta2': 'Our team of experts is available 24/7 to provide the best service and professional guidance.',
      'marcas.ctaButton': 'Contact now',

      // Nosotros.tsx
      'nosotros.badge': 'About us',
      'nosotros.title': 'Leaders in agricultural',
      'nosotros.subtitle': 'and road machinery',
      'nosotros.description1': 'We are the official dealer of the brands',
      'nosotros.description1.3': 'We market their full line of products and various used agricultural and construction machinery brands.',
      'nosotros.description2': 'We have a solid structure in administration, spare parts sales, and after-sales service, maintaining our commitment to',
      'nosotros.description2.1': 'Corporate Social Responsibility',
      'nosotros.button': 'Learn more about us',
      'nosotros.experience': 'Years of experience',
      'nosotros.stats1': 'Years of experience',
      'nosotros.stats2': 'Satisfied clients',
      'nosotros.stats3': 'Support',
      'nosotros.stats4': 'Annual growth',

      // Novedades.tsx
      'novedades.badge': 'News',
      'novedades.title': 'Our Latest Industry News',

      // Contacto.tsx
      'contacto.badge': "Let's talk",
      'contacto.title': 'Contact us',
      'contacto.description': 'We are here to answer your questions and provide the best service',
      'contacto.form.title': 'Send a message',
      'contacto.name': 'Your full name',
      'contacto.email': 'Your email',
      'contacto.asunto': 'Subject',
      'contacto.message': 'Your message',
      'contacto.button': 'Send message',
      'contacto.informacion': 'Contact information',
      'contacto.phone': 'Phone',
      'contacto.emailInfo': 'Email',
      'contacto.address': 'Location',
      'contacto.horarios.title': 'Customer service hours',
      'contacto.horarios.days': 'Monday - Friday',
      'contacto.horarios.sab': 'Saturdays',
      'contacto.horarios.emer': '24/7 emergency service',

      // Footer.tsx
      'footer.description': "Leader in agricultural and construction machinery.",
      'footer.description2': "Over 20 years providing reliable solutions to the Argentine countryside.",
      'footer.contact': "CONTACT",
      'footer.job': "WORK WITH US",
      'footer.job.description': "Want to join our team? Leave your information and we’ll get in touch.",
      'footer.job.button': "APPLY NOW",
      'footer.info': "NEED ASSISTANCE?",
      'footer.info.description': "Contact us via WhatsApp.",
      'footer.info.button': "CHAT NOW",
      'footer.copyright': "All rights reserved.",

    },
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    lng: 'es',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18next;