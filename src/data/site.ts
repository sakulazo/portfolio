export const site = {
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
  },

  hero: {
    available: 'Explorando nuevas oportunidades',
    role: 'Desarrollador Web · SDD & Automatización con IA',
    description:
      'Técnico Superior en Desarrollo Web. Combino infraestructura Linux, automatización con IA generativa y buenas prácticas de desarrollo para construir soluciones web eficientes y bien documentadas.',
    ctaText: 'Proyectos',
    contactText: 'Contáctame',
    techLabel: 'Stack Tecnológico',
    technologies: ['Python', 'Laravel', 'JavaScript', 'Node.js', 'Tailwind', 'React'],
  },

  about: {
    title: 'Sobre Mí',
    bio: `Técnico Superior en Desarrollo Web con formación técnica en sistemas informáticos y una trayectoria previa en dirección empresarial y consultoría IT.

Mi enfoque actual se centra en el desarrollo guiado por especificaciones (SDD) y el uso estratégico de IA generativa para optimizar el ciclo de vida del software. Gestiono mi propia infraestructura Linux en VPS con Docker, hardening y alta disponibilidad, y automatizo despliegues con Bash.

Anteriormente, durante más de 10 años dirigí una empresa de transportes internacionales, donde desarrollé habilidades de gestión, liderazgo y resolución de problemas que hoy aplico al desarrollo de software.`,
    badges: [
      { icon: 'graduation', text: 'DAW · 2026' },
      { icon: 'gear', text: 'Automatización SDLC' },
      { icon: 'brain', text: 'SDD & Agentes IA' },
    ],
    skillsTitle: 'Enfoque Tecnológico',
  },

  skills: [
    { name: 'Laravel', level: 9.2, category: 'STACKs' },
    { name: 'JavaScript', level: 9, category: 'STACKs' },
    { name: 'Python', level: 8.3, category: 'STACKs' },
    { name: 'Tailwind', level: 7.7, category: 'STACKs' },
    { name: 'React', level: 8, category: 'STACKs' },
    { name: 'API REST', level: 9, category: 'STACKs' },
    { name: 'SDD', level: 9.1, category: 'Metodologías' },
    { name: 'Desarrollo Asistido por IA', level: 9, category: 'Metodologías' },
    { name: 'Automatización SDLC', level: 8, category: 'Metodologías' },
    { name: 'Multiagentes IA', level: 8, category: 'IA y Automatización' },
    { name: 'OpenCode', level: 9.4, category: 'IA y Automatización' },
    { name: 'Bash Scripting', level: 9, category: 'IA y Automatización' },
    { name: 'Docker', level: 9.8, category: 'Sistemas e Infraestructura' },
    { name: 'Linux', level: 9.7, category: 'Sistemas e Infraestructura' },
    { name: 'Git', level: 9, category: 'Sistemas e Infraestructura' },
    { name: 'Hardening & Firewalling', level: 9.5, category: 'Sistemas e Infraestructura' },
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
        liveUrl: 'https://demo-gestaller.sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/gestaller-web',
        logo: '/gestaller-logo.svg',
      },
      {
        title: 'Silika',
        description:
          'Web corporativa de Silika Innovaciones del Vidrio S.L. (El Ejido, Almería), especializada en el manipulado y transformación de vidrio plano, cerramientos, trabajos en pladur y reformas integrales.',
        techStack: ['Astro', 'JavaScript', 'HTML/CSS', 'Linux'],
        liveUrl: 'https://silika.sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/silika',
        logo: '/silika-logo.svg',
      },
      {
        title: 'sakulazo.com',
        description:
          'Landing page personal con currículum integrado, secciones informativas y enlaces a proyectos. Desarrollada con un enfoque limpio y minimalista.',
        techStack: ['PHP', 'JavaScript', 'HTML/CSS', 'Linux'],
        liveUrl: 'https://sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/sakulazo.com',
        logo: '/sakulazo-logo.svg',
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
    copyright: 'Todos los derechos reservados.',
    legalTitle: 'Aviso legal',
    legalText:
      'Titular: Lucas Sánchez Acosta. Contacto: lucassanchezacosta@gmail.com. Este sitio web es de carácter personal e informativo y tiene como finalidad dar a conocer el perfil profesional y los proyectos del titular. Los contenidos, textos, imágenes y código aquí mostrados son propiedad del titular, salvo indicación contraria, y no pueden reproducirse sin autorización. Los logotipos, marcas y nombres comerciales de tecnologías, empresas y productos mencionados o mostrados en este sitio son propiedad de sus respectivos titulares y se utilizan con fines meramente descriptivos o informativos. El titular no se responsabiliza del uso que se haga de la información publicada ni del contenido de los sitios externos enlazados. Para cualquier consulta puedes escribir a lucassanchezacosta@gmail.com.',
  },
};
