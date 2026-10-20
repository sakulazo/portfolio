export const site = {
  siteTitle: 'Lucas Sánchez Acosta · Backend Developer',
  siteDescription:
    'Técnico Superior en Desarrollo Web. Especialista en backend Python, automatización con IA generativa y desarrollo de software entregado a clientes freelance.',

  nav: {
    links: [
      { href: '#sobre-mi', label: 'Sobre mí' },
      { href: '#proyectos', label: 'Proyectos' },
      { href: '#experiencia', label: 'Experiencia' },
      { href: '#contacto', label: 'Contacto' },
    ],
  },

  hero: {
    available: 'Buscando ofertas remotas de backend',
    role: 'Backend Python Developer',
    description:
      'Técnico Superior en Desarrollo Web con experiencia entregando aplicaciones Python (FastAPI) a clientes freelance, con PostgreSQL, Docker y despliegues en producción. Trabajo con automatización con IA generativa y diseño de dominio.',
    ctaText: 'Proyectos',
    contactText: 'Contáctame',
    cvUrl: '/cv',
    techLabel: 'Stack Tecnológico',
    technologies: ['Python', 'Laravel', 'JavaScript', 'Node.js', 'Tailwind', 'React'],
  },

  about: {
    title: 'Sobre mí',
    bio: `Técnico Superior en Desarrollo Web con formación técnica en sistemas informáticos y experiencia en consultoría IT y soporte. Actualmente entrego aplicaciones Python (FastAPI) a clientes freelance, con PostgreSQL, Docker, despliegues en producción y automatización con IA generativa.

Mi enfoque combina el conocimiento de dominio (entender cómo funcionan las operaciones de negocio real) con desarrollo práctico. Construyo software que resuelve problemas reales de clientes, lo documento y lo entrego mantenible dentro de plazos y presupuestos.`,
    badges: [
      { icon: 'graduation', text: 'DAW · 2026' },
      { icon: 'gear', text: 'Linux · Docker' },
    ],
    skillsTitle: 'Enfoque Tecnológico',
  },

  skills: [
    { name: 'Python', category: 'STACKs' },
    { name: 'React', category: 'STACKs' },
    { name: 'JavaScript', category: 'STACKs' },
    { name: 'API REST', category: 'STACKs' },
    { name: 'SDD', category: 'Metodologías' },
    { name: 'Desarrollo Asistido por IA', category: 'Metodologías' },
    { name: 'Automatización SDLC', category: 'Metodologías' },
    { name: 'Multiagentes IA', category: 'IA y Automatización' },
    { name: 'OpenCode', category: 'IA y Automatización' },
    { name: 'Bash Scripting', category: 'IA y Automatización' },
    { name: 'Docker', category: 'Sistemas e Infraestructura' },
    { name: 'Linux', category: 'Sistemas e Infraestructura' },
    { name: 'Git', category: 'Sistemas e Infraestructura' },
    { name: 'Hardening & Firewalling', category: 'Sistemas e Infraestructura' },
  ],

  projects: {
    title: 'Proyectos',
    subtitle:
      'Aplicaciones reales entregadas a clientes, desde la planificación hasta el despliegue en producción.',
    demo: 'Demo',
    code: 'Código',
    visit: 'Ir a página',
    items: [
      {
        title: 'GestTaller',
        description:
          `Aplicación web para gestión integral de un lavadero de camiones y taller mecánico: control de clientes, vehículos, órdenes de trabajo, facturación y seguimiento de servicios. Desarrollada con FastAPI backend, React/TypeScript frontend, PostgreSQL, Docker y Alembic. Aproximadamente 18.000 líneas entre backend y frontend, 25 modelos, 49 suites de tests (pytest). La única experiencia entregada con cliente activo con alcance completo: desde definición de requisitos hasta despliegue y mantenimiento. Dos clientes.`,
        techStack: ['FastAPI', 'Python', 'TypeScript', 'React', 'PostgreSQL', 'Docker', 'Alembic'],
        liveUrl: 'https://demo-gestaller.sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/gestaller-api',
        logo: '/gestaller-logo.svg',
      },
      {
        title: 'La Tinta',
        description:
          `Proyecto ecommerce en curso: backend Medusa v2 (Next.js storefront, PostgreSQL, Stripe payments, jobs programados, módulos custom, workflows). Monorepo Turborepo (apps/backend, apps/storefront). Desarrollado actualmente con colaborador, cubriendo catálogo, carrito, checkout, inventario, envío y devoluciones.`,
        techStack: ['Medusa v2', 'Next.js', 'Stripe', 'PostgreSQL', 'Turborepo'],
        liveUrl: '',
        repoUrl: 'https://github.com/sakulazo/latinta',
        logo: '',
      },
      {
        title: 'OpenCode Workbench',
        description:
          `Biblioteca personal de recursos reutilizables para OpenCode: conocimiento conceptual, patrones tecnológicos específicos, workflows de orquestación de agentes y tooling. Decisiones arquitectónicas documentadas como ADR. Arquitectura conceptual, sin código de aplicación específico; evoluciona continuamente junto a OpenCode workflows y SpecKit.`,
        techStack: ['OpenCode', 'SpecKit', 'Decisiones Arquitectónicas'],
        liveUrl: '',
        repoUrl: 'https://github.com/sakulazo/opencode-workbench',
        logo: '',
      },
      {
        title: 'Silika',
        description:
          'Web corporativa de Silika Innovaciones del Vidrio S.L. (El Ejido, Almería), especializada en manipulación y transformación de vidrio plano, cerramientos, trabajos en pladur y reformas integrales.',
        techStack: ['Astro', 'JavaScript', 'HTML/CSS'],
        liveUrl: 'https://silika.sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/silika',
        logo: '/silika-logo.svg',
      },
      {
        title: 'sakulazo.com',
        description:
          'Página personal del portfolio con currículum integrado, secciones informativas y enlaces a proyectos. Desarrollada con enfoque limpio y minimalista.',
        techStack: ['Astro', 'Tailwind', 'HTML/CSS'],
        liveUrl: 'https://sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/sakulazo.com',
        logo: '/sakulazo-logo.svg',
      },
      {
        title: 'Núcleo Facturación',
        description:
          'Dominio del conocimiento de sistemas de facturación en curso: especificaciones (~597 LOC de especificaciones, sin implementación todavía). Áreas de foco: numeración secuencial de facturas bajo concurrencia, facturas emitidas inmutables, snapshot de IVA congelado, validación NIF, generación de documentos legales españoles.',
        techStack: ['Especificaciones', 'FastAPI'],
        liveUrl: '',
        repoUrl: '',
        logo: '',
      },
    ],
  },

  experience: {
    title: 'Experiencia',
    jobs: [
      {
        company: 'Lavadero de camiones y taller mecánico (cliente freelance)',
        position: 'Desarrollador Backend (Freelance)',
        period: 'Activo',
        description:
          'Desarrollo backend freelance de alcance completo para un cliente lavadero de camiones y taller mecánico: requisitos, diseño, implementación, despliegue y mantenimiento. Aplicación FastAPI + React/TypeScript (~18.000 LOC, 25 modelos, 49 suites de tests) con PostgreSQL, Docker, Alembic y generación de documentos legales (facturas, certificados de estancia). Dos clientes activos.',
        achievements: [
          'Construí backend FastAPI en producción que genera facturas y documentos legales (numeración, snapshot de IVA, validación NIF)',
          'Entregué frontend React/TypeScript y despliegue Docker con Alembic migrations',
          'Gestión completa del ciclo de vida: requisitos, diseño, entrega, despliegue y mantenimiento',
        ],
      },
      {
        company: 'Empresa de transporte internacional controlado por temperatura',
        position: 'Gerente',
        period: '2010 – 2020',
        description:
          'Gerente general de una empresa de transporte internacional con frío: operaciones, flota, RRHH, finanzas y rutas internacionales.',
        achievements: [
          'Gestión general: operaciones, flota, RRHH, finanzas y relaciones comerciales',
          'Uso experto de software de terceros para gestión de flota, bolsa de viajes y productividad de oficina',
        ],
      },
      {
        company: 'Consultor autónomo',
        position: 'Consultor Informático y Soporte Técnico',
        period: '2006 – 2010',
        description:
          'Consultoría informática y soporte técnico para empresas y particulares.',
        achievements: [
          'Gestión integral de clientes, resolución de incidencias técnicas complejas y soporte microinformático',
          'Mantenimiento de sistemas, despliegue de entornos y formación técnica a usuarios',
        ],
      },
    ],
  },

  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes un proyecto en mente o quieres saber más sobre mi trabajo?',
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
      'Titular: Lucas Sánchez Acosta. Contacto: lucassanchezacosta@gmail.com. Este sitio web es personal e informativo y tiene como finalidad dar a conocer el perfil profesional y los proyectos del titular. Los contenidos, textos, imágenes y código aquí mostrados son propiedad del titular, salvo indicación contraria, y no pueden reproducirse sin autorización. Los logotipos, marcas y nombres comerciales de tecnologías, empresas y productos mencionados o mostrados en este sitio son propiedad de sus respectivos titulares y se utilizan con fines meramente descriptivos o informativos. El titular no se responsabiliza del uso que se haga de la información publicada ni del contenido de los sitios externos enlazados. Para cualquier consulta puedes escribir a lucassanchezacosta@gmail.com.',
  },
};
