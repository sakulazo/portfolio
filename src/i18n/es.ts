import type { Translations } from './types';

const es: Translations = {
  lang: 'es',

  siteTitle: 'Lucas Sánchez | Desarrollador Web · SDD & Automatización con IA',
  siteDescription:
    'Técnico Superior en Desarrollo Web, especializado en SDD, automatización con IA y desarrollo de aplicaciones web con PHP, Laravel y JavaScript.',

  nav: {
    links: [
      { href: '#sobre-mi', label: 'Sobre Mí' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#contacto', label: 'Contacto' },
    ],
    contactBtn: 'Contáctame',
  },

  hero: {
    available: 'Explorando nuevas oportunidades',
    role: 'Desarrollador Web · SDD & Automatización con IA',
    description:
      'Técnico Superior en Desarrollo Web. Combino infraestructura Linux, automatización con IA generativa y buenas prácticas de desarrollo para construir soluciones web eficientes y bien documentadas.',
    ctaText: 'Ver Proyectos',
    contactText: 'Contáctame',
    techLabel: 'Pila Principal',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Docker', 'Linux'],
  },

  about: {
    title: 'Sobre Mí',
    bio: `Técnico Superior en Desarrollo Web con formación técnica en sistemas informáticos y una trayectoria previa en dirección empresarial y consultoría IT.

Mi enfoque actual se centra en el desarrollo guiado por especificaciones (SDD) y el uso estratégico de IA generativa local (Ollama, agentes autónomos) para optimizar el ciclo de vida del software. Gestiono mi propia infraestructura Linux en VPS con Docker, hardening y alta disponibilidad, y automatizo despliegues con Bash.

Anteriormente, durante más de 10 años dirigí una empresa de transportes internacionales, donde desarrollé habilidades de gestión, liderazgo y resolución de problemas que hoy aplico al desarrollo de software.`,
    badges: [
      { icon: '🎓', text: 'DAW · 2026' },
      { icon: '⚙️', text: 'Automatización SDLC' },
      { icon: '🧠', text: 'SDD & Agentes IA' },
    ],
    skillsTitle: 'Enfoque Tecnológico',
  },

  skills: [
    { name: 'PHP', level: 10, category: 'Pila Tecnológica' },
    { name: 'Laravel', level: 9, category: 'Pila Tecnológica' },
    { name: 'JavaScript', level: 9, category: 'Pila Tecnológica' },
    { name: 'MySQL', level: 8, category: 'Pila Tecnológica' },
    { name: 'API REST', level: 9, category: 'Pila Tecnológica' },
    { name: 'SDD', level: 8, category: 'Metodologías' },
    { name: 'Desarrollo Asistido por IA', level: 9, category: 'Metodologías' },
    { name: 'Automatización SDLC', level: 8, category: 'Metodologías' },
    { name: 'Ollama', level: 8, category: 'IA y Automatización' },
    { name: 'Modelos Locales', level: 8, category: 'IA y Automatización' },
    { name: 'Multiagentes IA', level: 8, category: 'IA y Automatización' },
    { name: 'OpenCode', level: 7, category: 'IA y Automatización' },
    { name: 'Bash Scripting', level: 9, category: 'IA y Automatización' },
    { name: 'Docker', level: 10, category: 'Sistemas e Infraestructura' },
    { name: 'Linux (WSL)', level: 10, category: 'Sistemas e Infraestructura' },
    { name: 'Git', level: 9, category: 'Sistemas e Infraestructura' },
    { name: 'HA en VPS', level: 9, category: 'Sistemas e Infraestructura' },
    { name: 'Hardening & Firewalling', level: 8, category: 'Sistemas e Infraestructura' },
  ],

  projects: {
    title: 'Proyectos',
    subtitle:
      'Aplicaciones web reales, desde la planificación hasta el despliegue en producción.',
    demo: 'Demo',
    code: 'Código',
    items: [
      {
        title: 'GesTaller',
        description:
          'Aplicación web para la gestión integral de un lavadero de camiones y taller mecánico. Control de clientes, vehículos, órdenes de trabajo, facturación y seguimiento de servicios.',
        techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker'],
        liveUrl: 'https://gestaller.sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/gestaller',
      },
      {
        title: 'sakulazo.com',
        description:
          'Landing page personal con currículum integrado, secciones informativas y enlaces a proyectos. Desarrollada con un enfoque limpio y minimalista.',
        techStack: ['PHP', 'JavaScript', 'HTML/CSS', 'Linux'],
        liveUrl: 'https://sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/sakulazo.com',
      },
    ],
  },

  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Proyectos Personales / I+D+i',
        position: 'Especialización en SDD y Automatización con IA',
        period: 'Actualidad',
        description:
          'Investigación y desarrollo de flujos de trabajo basados en especificaciones técnicas (SDD) asistidos por IA generativa local.',
        achievements: [
          'Orquestación de agentes autónomos con OpenCode y Ollama para automatización de tareas de despliegue y monitoreo',
          'Implementación de metodologías SDD donde la especificación técnica precisa es la base para la generación y validación de código',
          'Desarrollo de aplicaciones web con enfoques híbridos de desarrollo asistido, desde la lógica de negocio hasta su contenerización y despliegue',
        ],
      },
      {
        company: 'Empresa de transportes internacionales a temperatura controlada',
        position: 'Gerente',
        period: '2010 – 2020',
        description:
          'Máximo responsable de la producción, flota de vehículos y resultados económicos de una empresa de transportes internacionales.',
        achievements: [
          'Dirección general de la empresa, incluyendo gestión de flota, planificación de rutas y supervisión de operaciones internacionales',
          'Administración de RRHH: selección, contratación y gestión del equipo de empleados',
          'Gestión financiera y comercial: relación con clientes, supervisión de cuentas, pagos y cobros',
        ],
      },
      {
        company: 'Autónomo',
        position: 'Consultor Informático y Técnico de Sistemas',
        period: '2006 – 2010',
        description:
          'Consultoría informática y soporte técnico para empresas y particulares.',
        achievements: [
          'Gestión integral de clientes, resolución de incidencias técnicas complejas y soporte microinformático',
          'Mantenimiento de sistemas, despliegue de entornos y formación técnica a usuarios y empresas',
        ],
      },
    ],
  },

  contact: {
    title: 'Contacto',
    subtitle:
      '¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo? Estoy abierto a conversar.',
    formTitle: 'Envíame un mensaje',
    formName: 'Tu nombre',
    formEmail: 'Tu email',
    formMessage: 'Cuéntame sobre tu proyecto...',
    formSubmit: 'Enviar mensaje',
    formSuccess: 'Mensaje enviado correctamente. ¡Gracias!',
    formSuccessTitle: 'Mensaje enviado',
    captchaError: 'Por favor, completa el captcha.',
  },

  footer: {
    description:
      'Desarrollador web apasionado por la automatización, la infraestructura como código y la integración de IA en el ciclo de desarrollo.',
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    navigation: [
      { href: '#sobre-mi', label: 'Sobre Mí' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#contacto', label: 'Contacto' },
    ],
    copyright: 'Lucas Sánchez. Todos los derechos reservados.',
  },
};

export default es;
