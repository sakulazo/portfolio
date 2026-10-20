// Contenido del CV para ATS (/cv-ats y /cv-ats.txt).
//
// Documento deliberadamente distinto del CV visual (/cv) y del portfolio:
// una sola columna, sin foto, sin color, sin gráficos y sin tablas, con las
// palabras clave que piden las ofertas objetivo.
//
// El texto plano se genera con `toPlainText()` a partir de estos mismos
// datos, así que el .txt y el HTML no pueden desincronizarse. Al escribir el
// contenido: sin tabuladores, sin rayas Unicode (—, « »), sin viñetas con
// caracteres raros y con las fechas en formato inequívoco ("jun. 2025 -
// Actualidad"), que es lo que los parsers de ATS leen bien.

export interface AtsContact {
  label: string;
  value: string;
  href?: string;
}

export interface AtsSkillGroup {
  label: string;
  items: string[];
}

export interface AtsEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface AtsProject {
  title: string;
  stack: string[];
  bullets: string[];
  url?: string;
}

export const cvAts = {
  name: 'Lucas Sánchez Acosta',
  role: 'Desarrollador Fullstack (Python / TypeScript)',
  location: 'Remoto (España)',

  contact: [
    { label: 'Teléfono', value: '+34 637 449 107', href: 'tel:+34637449107' },
    { label: 'Email', value: 'lucassanchezacosta@gmail.com', href: 'mailto:lucassanchezacosta@gmail.com' },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/lucas-sánchez-dev',
      href: 'https://www.linkedin.com/in/lucas-s%C3%A1nchez-dev',
    },
    { label: 'GitHub', value: 'github.com/sakulazo', href: 'https://github.com/sakulazo' },
    {
      label: 'Portfolio',
      value: 'portfolio.sakulazo.com',
      href: 'https://portfolio.sakulazo.com',
    },
  ] as AtsContact[],

  profile:
    'Desarrollador fullstack con experiencia real entregando software a clientes desde junio ' +
    'de 2025: aplicación de gestión completa en producción (FastAPI + React / TypeScript sobre ' +
    'PostgreSQL), ~18.000 líneas, 25 modelos de dominio y 24 módulos de test con 218 casos. ' +
    'Dominio del negocio de facturación y gestión de flota en español (IVA, NIF, numeración ' +
    'correlativa) y trabajo habitual con IA generativa y agentes en el ciclo de desarrollo.',

  skills: [
    {
      label: 'Lenguajes',
      items: ['Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL', 'HTML5', 'CSS3', 'Bash'],
    },
    {
      label: 'Backend y API',
      items: [
        'FastAPI',
        'SQLAlchemy',
        'Pydantic',
        'Alembic',
        'REST',
        'OpenAPI',
        'JWT',
        'OAuth 2.0',
        'arquitectura por capas',
        'SOLID',
        'TDD',
      ],
    },
    {
      label: 'Frontend',
      items: [
        'React',
        'React Router',
        'TanStack Query',
        'Zod',
        'Tailwind CSS',
        'Vite',
        'Next.js',
        'Astro',
        'HTML5',
        'CSS3',
      ],
    },
    {
      label: 'Datos',
      items: ['PostgreSQL', 'MySQL', 'Redis', 'modelado de dominio', 'migraciones'],
    },
    {
      label: 'Infraestructura y control de versiones',
      items: [
        'Docker',
        'Docker Compose',
        'Linux',
        'Git',
        'GitHub',
        'GitHub Actions',
        'GitLab CI',
        'CI/CD',
        'Caddy',
      ],
    },
    {
      label: 'Alta disponibilidad y recuperación ante desastres',
      items: [
        'reinicio automático y healthchecks en contenedores',
        'health checks programados',
        'backups 3-2-1 con copia offsite',
        'test automatizado de restauración',
        'RPO 24 h',
      ],
    },
    {
      label: 'Ecommerce y plataforma',
      items: ['Medusa v2', 'Stripe', 'Turborepo', 'monorepo', 'SEO', 'JSON-LD'],
    },
    {
      label: 'Práctica',
      items: [
        'desarrollo guiado por especificaciones (SDD) y decisiones arquitectónicas (ADR)',
        'código review',
        'pruebas automatizadas',
        'documentación técnica',
        'despliegue en producción',
        'desarrollo iterativo con definición de requisitos',
        'desarrollo asistido por IA generativa',
      ],
    },
  ] as AtsSkillGroup[],

  experience: [
    {
      title: 'Desarrollador Fullstack (Freelance)',
      company: 'Software de gestión a medida - 2 clientes (1 activo)',
      period: 'jun. 2025 - Actualidad',
      bullets: [
        'Alcance completo: definición de requisitos, diseño, implementación, despliegue y mantenimiento.',
        'Aplicación de gestión para un lavadero de camiones y taller mecánico (FastAPI + React / TypeScript): ~18.000 líneas entre backend y frontend, 25 modelos de dominio (23 tablas) y 24 módulos de test con 218 casos sobre PostgreSQL.',
        'Backend FastAPI con SQLAlchemy 2.0, Pydantic v2 y Alembic: autenticación JWT (access y refresh), roles y permisos, CORS y rate limiting.',
        'Frontend React 18 + TypeScript con TanStack Query, Zod, React Router y Tailwind CSS, con pruebas en Vitest.',
        'Motor de facturación conforme a la normativa española: numeración correlativa serializada en transacción, snapshot de IVA congelado por línea, validación de NIF y facturas emitidas inmutables.',
        'Despliegue en Docker y PostgreSQL 16 con Caddy, copias de seguridad y demo pública.',
        'Segundo cliente activo: desarrollo y mantenimiento de software a medida.',
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
    {
      title: 'Gerente',
      company: 'Empresa de transporte internacional a temperatura controlada',
      period: '2010 - 2020',
      bullets: [
        'Dirección de operaciones, flota, personal y finanzas.',
        'Uso de software de gestión de flota y bolsa de viajes como usuario final.',
      ],
    },
  ] as AtsEntry[],

  projects: [
    {
      title: 'GestTaller',
      stack: ['FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Alembic'],
      bullets: [
        'Sistema de gestión para lavadero de camiones y taller mecánico con facturación legal española y generación de documentos legales.',
        'Demo: demo-gestaller.sakulazo.com',
        'Código: github.com/sakulazo/gestaller-web',
      ],
      url: 'https://github.com/sakulazo/gestaller-web',
    },
    {
      title: 'Núcleo Facturación (en curso)',
      stack: ['Especificaciones', 'FastAPI'],
      bullets: [
        'Dominio de facturación sin implementar: ~600 líneas de especificación (SDD-first) sobre numeración correlativa bajo concurrencia, inmutabilidad de facturas y snapshot de IVA.',
        'Capa de integración Veri*Factu diseñada: huellas, encadenamiento, código QR, reintentos y abstracción de proveedor.',
        'github.com/sakulazo/nucleo-facturacion',
      ],
      url: 'https://github.com/sakulazo/nucleo-facturacion',
    },
    {
      title: 'La Tinta (en curso)',
      stack: ['Medusa v2', 'Next.js', 'PostgreSQL', 'Stripe', 'Turborepo'],
      bullets: [
        'Ecommerce con catálogo, carrito, checkout, inventario, envíos y devoluciones.',
        'github.com/sakulazo/latinta',
      ],
      url: 'https://github.com/sakulazo/latinta',
    },
    {
      title: 'OpenCode Workbench',
      stack: ['OpenCode', 'SpecKit', 'ADR'],
      bullets: [
        'Biblioteca personal de conocimiento: patrones tecnológicos, workflows de orquestación de agentes y decisiones arquitectónicas documentadas.',
        'github.com/sakulazo/opencode-workbench',
      ],
      url: 'https://github.com/sakulazo/opencode-workbench',
    },
  ] as AtsProject[],

  education: [
    { title: 'Téc. Superior en Desarrollo Web (DAW)', year: '2026' },
    {
      title: 'Téc. Superior en Sistemas de Telecomunicaciones e Informáticos (STI)',
      year: '2005',
    },
  ],

  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'B2 (C1 en lectura)' },
  ],
};

/**
 * Versión en texto plano del mismo contenido.
 *
 * Es la que se sube al portal de empleo o se pega en el formulario: una
 * línea por dato, un "- " por viñeta y los encabezados en mayúsculas, que es
 * como los parsers de ATS segmented las secciones.
 */
export function toPlainText(): string {
  const lines: string[] = [];

  lines.push(cvAts.name);
  lines.push(cvAts.role);
  lines.push(cvAts.location);
  lines.push('');
  for (const item of cvAts.contact) {
    lines.push(`${item.label}: ${item.value}`);
  }

  lines.push('');
  lines.push('PERFIL PROFESIONAL');
  lines.push(cvAts.profile);

  lines.push('');
  lines.push('APTITUDES TÉCNICAS');
  for (const group of cvAts.skills) {
    lines.push(`${group.label}: ${group.items.join(', ')}`);
  }

  lines.push('');
  lines.push('EXPERIENCIA');
  for (const job of cvAts.experience) {
    lines.push('');
    lines.push(`${job.title} | ${job.company} | ${job.period}`);
    for (const bullet of job.bullets) {
      lines.push(`- ${bullet}`);
    }
  }

  lines.push('');
  lines.push('PROYECTOS');
  for (const project of cvAts.projects) {
    lines.push('');
    lines.push(`${project.title} - ${project.stack.join(', ')}`);
    for (const bullet of project.bullets) {
      lines.push(`- ${bullet}`);
    }
  }

  lines.push('');
  lines.push('FORMACIÓN');
  for (const item of cvAts.education) {
    lines.push(`${item.title} - ${item.year}`);
  }

  lines.push('');
  lines.push('IDIOMAS');
  for (const item of cvAts.languages) {
    lines.push(`${item.language}: ${item.level}`);
  }

  return `${lines.join('\n')}\n`;
}
