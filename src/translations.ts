export type Language = 'en' | 'es' | 'de'

export const translations = {
  en: {
    // Navbar
    about: 'About',
    personal: 'Personal',
    projects: 'Projects',
    contact: 'Contact',
    
    // Header
    greeting: '👋 Hey there!',
    description: 'A full-stack developer who loves turning ideas into reality through clean code and creative solutions. I build web applications that people actually enjoy using.',
    btnWork: 'View My Work',          // ¡IMPORTANTE! Esta propiedad debe existir
    btnContact: 'Get in Touch',       // ¡IMPORTANTE! Esta propiedad debe existir
  },
  es: {
    about: 'Sobre mí',
    personal: 'Personal',
    projects: 'Proyectos',
    contact: 'Contacto',
    
    greeting: '👋 ¡Hola a todos!',
    description: 'Desarrollador full-stack apasionado por convertir ideas en realidad mediante código limpio y soluciones creativas. Creo aplicaciones web que la gente realmente disfruta usar.',
    btnWork: 'Ver mi trabajo',        // ¡IMPORTANTE! Esta propiedad debe existir
    btnContact: 'Contáctame',         // ¡IMPORTANTE! Esta propiedad debe existir
  },
  de: {
    about: 'Über mich',
    personal: 'Personal',
    projects: 'Projekte',
    contact: 'Kontakt',
    
    greeting: '👋 Hallo zusammen!',
    description: 'Full-Stack-Entwickler, der es liebt, Ideen durch sauberen Code und kreative Lösungen Wirklichkeit werden zu lassen. Ich erstelle Webanwendungen, die Menschen gerne nutzen.',
    btnWork: 'Meine Arbeit ansehen',  // ¡IMPORTANTE! Esta propiedad debe existir
    btnContact: 'Kontakt aufnehmen',  // ¡IMPORTANTE! Esta propiedad debe existir
  }
} as const