// Contenido del currículum (/cv).
//
// Deliberadamente independiente de `src/data/site.ts` (el portfolio): el CV
// tiene su propio enfoque y puede cambiar —o cambiar el portfolio— sin que
// uno dependa del otro. Lo único que comparten es el nombre.

export const cv = {
  header: {
    name: 'Lucas Sánchez Acosta',
    role: 'FullStack (Python / React)',
    location: 'España · Remoto · Híbrido',
    phone: '+34 637449107',
    email: 'lucassanchezacosta@gmail.com',
    portfolioUrl: 'https://portfolio.sakulazo.com',
  },

  // Aptitudes técnicas: hechos, sin adjetivos ni eslóganes.
  skills: [
    {
      label: 'Lenguajes',
      items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3', 'Bash'],
    },
    {
      label: 'Frameworks y datos',
      items: ['FastAPI', 'React', 'Next.js', 'SQLAlchemy', 'Pydantic', 'Alembic', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Medusa'],
    },
    {
      label: 'Sistemas',
      items: ['Linux', 'Git', 'GitHub Actions', 'CI/CD', 'Caddy'],
    },
    {
      label: 'Continuidad y seguridad',
      items: ['Alta disponibilidad', 'Reinicio automático y healthchecks', 'Backups 3-2-1 con offsite', 'Test de restauración', 'Hardening y auditoría'],
    },
  ],

  // Cómo se trabaja: cuatro líneas, no una lista de etiquetas.
  practice: [
    'Desarrollo guiado por especificaciones (SDD) y decisiones arquitectónicas (ADR)',
    'Arquitectura por capas, SOLID y TDD',
    'IA generativa y agentes en el ciclo de desarrollo',
    'Despliegue en producción con Docker y PostgreSQL',
  ],

  education: [
    { title: 'Téc. Superior en Desarrollo Web (DAW)', year: '2026' },
    {
      title: 'Téc. Superior en Sistemas de Telecomunicaciones e Informáticos (STI)',
      year: '2005',
    },
  ],

  // Niveles autodeclarados: el lector_cv no exige certificado y no se
  // adjunta ninguno.
  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'B2 (C1 en lectura)' },
  ],

  profile:
    'Técnico Superior en Desarrollo Web. Entrego backends y frontends a clientes ' +
    'desde junio de 2025: requisitos, diseño, FastAPI y React/TypeScript, ' +
    'PostgreSQL, Docker y despliegue en producción. Trabajo con IA generativa y ' +
    'agentes, especificaciones y decisiones arquitectónicas documentadas.',

  experience: [
    {
      title: 'Desarrollador Fullstack (Freelance)',
      company: 'Software de gestión a medida · 2 clientes (1 activo)',
      period: 'jun. 2025 - Actualidad',
      bullets: [
        'Aplicación de gestión para un lavadero de camiones y taller mecánico (FastAPI + React/TypeScript): ~18.000 líneas, 25 modelos de dominio (23 tablas) y 24 módulos de test con 218 casos sobre PostgreSQL.',
        'Backend FastAPI con SQLAlchemy 2.0, Pydantic v2 y Alembic: autenticación JWT (access y refresh), roles y permisos, CORS y rate limiting.',
        'Frontend React 18 + TypeScript con TanStack Query, Zod, React Router y Tailwind CSS, con pruebas en Vitest.',
        'Motor de facturación conforme a la normativa española: numeración correlativa serializada en transacción, snapshot de IVA congelado por línea, validación de NIF y facturas emitidas inmutables.',
        'Despliegue en Docker y PostgreSQL 16 con Caddy, copias de seguridad y demo pública.',
        'Segundo cliente activo: software a medida.',
      ],
    },
    {
      title: 'Gerente',
      company: 'Empresa de transporte internacional a temperatura controlada',
      period: '2010 - 2020',
      bullets: [
        'Dirección de operaciones, flota, personal y finanzas.',
        'Uso de software de gestión de flota y bolsa de viajes como usuario final.',
      ],
    },
    {
      title: 'Consultor Informático y Soporte Técnico',
      company: 'Autónomo',
      period: '2006 - 2010',
      bullets: [
        'Soporte y mantenimiento de sistemas para empresas y particulares, con resolución de incidencias complejas.',
        'Despliegue de entornos y formación técnica a usuarios.',
      ],
    },
  ],

  projects: [
    {
      title: 'Núcleo Facturación',
      bullets: [
        'Dominio de facturación en curso, sin implementar: ~600 líneas de especificación (SDD-first) sobre numeración correlativa bajo concurrencia, inmutabilidad de facturas y snapshot de IVA.',
        'Capa de integración Veri*Factu diseñada: huellas, encadenamiento, código QR, reintentos y abstracción de proveedor.',
      ],
      stack: ['Especificaciones', 'FastAPI'],
      url: 'https://github.com/sakulazo/nucleo-facturacion',
      urlLabel: 'github.com/sakulazo/nucleo-facturacion',
    },
    {
      title: 'La Tinta',
      bullets: [
        'Ecommerce en curso con Medusa v2, Next.js, PostgreSQL, Stripe y monorepo Turborepo.',
        'Jobs programados, módulos propios y workflows; en desarrollo: catálogo, carrito, checkout...',
      ],
      stack: ['Medusa v2', 'Next.js', 'Stripe', 'PostgreSQL', 'Turborepo'],
      url: 'https://github.com/sakulazo/latinta',
      urlLabel: 'github.com/sakulazo/latinta',
    },
    {
      title: 'OpenCode Workbench',
      bullets: [
        'Biblioteca personal para OpenCode: patrones, workflows de orquestación de agentes y decisiones arquitectónicas documentadas (ADR).',
        'Sin código de aplicación: conocimiento y tooling reutilizable.',
      ],
      stack: ['OpenCode', 'SpecKit', 'ADR'],
      url: 'https://github.com/sakulazo/opencode-workbench',
      urlLabel: 'github.com/sakulazo/opencode-workbench',
    },
  ],
};
