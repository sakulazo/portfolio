// Contenido del currículum (/cv).
//
// Deliberadamente independiente de `src/data/site.ts` (el portfolio): el CV
// tiene su propio enfoque y puede cambiar —o cambiar el portfolio— sin que
// uno dependa del otro. Lo único que comparten es el nombre.

export const cv = {
  header: {
    name: 'Lucas Sánchez Acosta',
    role: 'Desarrollador Backend Python',
    location: 'España · Remoto · Híbrido',
    phone: '+34 637449107',
    email: 'lucassanchezacosta@gmail.com',
    portfolioUrl: 'https://portfolio.sakulazo.com',
  },

  // Aptitudes técnicas: hechos, sin adjetivos ni eslóganes.
  skills: [
    {
      label: 'Lenguajes',
      items: ['Python', 'PHP', 'JavaScript', 'TypeScript'],
    },
    {
      label: 'Frameworks y datos',
      items: ['FastAPI', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Alembic', 'Medusa'],
    },
    {
      label: 'Sistemas',
      items: ['Linux', 'Git', 'Bash', 'Hardening', 'Alta disponibilidad'],
    },
  ],

  // Cómo se trabaja: tres líneas, no una lista de etiquetas.
  practice: [
    'Desarrollo guiado por especificaciones (SDD)',
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

  profile:
    'Técnico Superior en Desarrollo Web. Entrego backends Python (FastAPI) para clientes: ' +
    'requisitos, diseño, PostgreSQL, Docker y despliegue en producción. Trabajo con desarrollo ' +
    'guiado por especificaciones y automatización con IA generativa.',

  experience: [
    {
      title: 'Desarrollador Backend (Freelance)',
      company: 'Lavadero de camiones y taller mecánico · 2 clientes',
      period: 'Activo',
      bullets: [
        'Aplicación de gestión completa (FastAPI + React/TypeScript): ~18.000 líneas, 25 modelos y 49 suites de tests sobre PostgreSQL.',
        'Facturación legal española, escalable a Verifactu.',
        'Despliegue en Docker con migraciones de Alembic y mantenimiento del sistema en producción.',
      ],
    },
    {
      title: 'Gerente',
      company: 'Empresa de transporte internacional a temperatura controlada',
      period: '2010 – 2020',
      bullets: [
        'Dirección de operaciones, flota, personal y finanzas.',
        'Gestión comercial con clientes y proveedores.',
        'Software de gestión, bolsa de viajes y productividad de oficina.',
      ],
    },
    {
      title: 'Consultor Informático y Soporte Técnico',
      company: 'Autónomo',
      period: '2006 – 2010',
      bullets: [
        'Soporte y mantenimiento de sistemas para empresas y particulares, con resolución de incidencias complejas.',
        'Despliegue de entornos y formación técnica a usuarios.',
      ],
    },
  ],

  projects: [
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
        'Biblioteca personal de recursos para OpenCode: patrones, workflows de orquestación de agentes y decisiones arquitectónicas documentadas como ADR.',
        'Sin código de aplicación: conocimiento y tooling reutilizable.',
      ],
      stack: ['OpenCode', 'SpecKit', 'ADR'],
      url: 'https://github.com/sakulazo/opencode-workbench',
      urlLabel: 'github.com/sakulazo/opencode-workbench',
    },
    {
      title: 'Núcleo Facturación',
      bullets: [
        'Dominio de facturación en curso, sin implementar: ~600 líneas de especificación.',
        'Área de foco: implementación Verifactu.',
      ],
      stack: ['Especificaciones', 'FastAPI'],
    },
  ],
};
