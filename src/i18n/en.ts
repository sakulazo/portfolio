import type { Translations } from './types';

const en: Translations = {
  lang: 'en',

  siteTitle: 'Lucas Sánchez | Web Developer · SDD & AI Automation',
  siteDescription:
    'Higher Technician in Web Development, specialized in SDD, AI automation and web application development with PHP, Laravel and JavaScript.',

  nav: {
    links: [
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#contact', label: 'Contact' },
    ],
    contactBtn: 'Contact Me',
  },

  hero: {
    available: 'Exploring new opportunities',
    role: 'Web Developer · SDD & AI Automation',
    description:
      'Higher Technician in Web Development. I combine Linux infrastructure, generative AI automation and solid development practices to build efficient, well-documented web solutions.',
    ctaText: 'View Projects',
    contactText: 'Contact Me',
    techLabel: 'Main Stack',
    technologies: ['PHP', 'Laravel', 'JavaScript', 'Docker', 'Linux'],
  },

  about: {
    title: 'About Me',
    bio: `Higher Technician in Web Development with a technical background in computer systems and a previous career in business management and IT consulting.

My current focus is on Specification-Driven Development (SDD) and the strategic use of local generative AI (Ollama, autonomous agents) to optimize the software lifecycle. I manage my own Linux infrastructure on VPS with Docker, hardening and high availability, and automate deployments with Bash.

Previously, for over 10 years I ran an international transport company, where I developed management, leadership and problem-solving skills that I now apply to software development.`,
    badges: [
      { icon: '🎓', text: 'DAW · 2026' },
      { icon: '⚙️', text: 'SDLC Automation' },
      { icon: '🧠', text: 'SDD & AI Agents' },
    ],
    skillsTitle: 'Technical Focus',
  },

  skills: [
    { name: 'PHP', level: 10, category: 'Tech Stack' },
    { name: 'Laravel', level: 9, category: 'Tech Stack' },
    { name: 'JavaScript', level: 9, category: 'Tech Stack' },
    { name: 'MySQL', level: 8, category: 'Tech Stack' },
    { name: 'API REST', level: 9, category: 'Tech Stack' },
    { name: 'SDD', level: 8, category: 'Methodologies' },
    { name: 'AI-Assisted Development', level: 9, category: 'Methodologies' },
    { name: 'SDLC Automation', level: 8, category: 'Methodologies' },
    { name: 'Ollama', level: 8, category: 'AI & Automation' },
    { name: 'Local Models', level: 8, category: 'AI & Automation' },
    { name: 'Multi-Agent AI', level: 8, category: 'AI & Automation' },
    { name: 'OpenCode', level: 7, category: 'AI & Automation' },
    { name: 'Bash Scripting', level: 9, category: 'AI & Automation' },
    { name: 'Docker', level: 10, category: 'Systems & Infrastructure' },
    { name: 'Linux (WSL)', level: 10, category: 'Systems & Infrastructure' },
    { name: 'Git', level: 9, category: 'Systems & Infrastructure' },
    { name: 'HA on VPS', level: 9, category: 'Systems & Infrastructure' },
    { name: 'Hardening & Firewalling', level: 8, category: 'Systems & Infrastructure' },
  ],

  projects: {
    title: 'Projects',
    subtitle:
      'Real web applications, from planning to production deployment.',
    demo: 'Live',
    code: 'Code',
    items: [
      {
        title: 'GesTaller',
        description:
          'Web application for the comprehensive management of a truck wash and mechanical workshop. Client management, vehicles, work orders, invoicing and service tracking.',
        techStack: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'Docker'],
        liveUrl: 'https://gestaller.sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/gestaller',
      },
      {
        title: 'sakulazo.com',
        description:
          'Personal landing page with integrated resume, information sections and project links. Built with a clean, minimalist approach.',
        techStack: ['PHP', 'JavaScript', 'HTML/CSS', 'Linux'],
        liveUrl: 'https://sakulazo.com',
        repoUrl: 'https://github.com/sakulazo/sakulazo.com',
      },
    ],
  },

  experience: {
    title: 'Experience',
    jobs: [
      {
        company: 'Personal Projects / R&D',
        position: 'SDD and AI Automation Specialist',
        period: 'Present',
        description:
          'Research and development of specification-driven workflows (SDD) assisted by local generative AI.',
        achievements: [
          'Orchestration of autonomous agents with OpenCode and Ollama for automation of deployment and monitoring tasks',
          'Implementation of SDD methodologies where precise technical specification drives code generation and validation',
          'Development of web applications with hybrid assisted development approaches, from business logic to containerization and deployment',
        ],
      },
      {
        company: 'International temperature-controlled transport company',
        position: 'General Manager',
        period: '2010 – 2020',
        description:
          'Top responsible for production, vehicle fleet and economic results of an international transport company.',
        achievements: [
          'General management including fleet management, route planning and international operations supervision',
          'HR administration: recruitment, hiring and team management',
          'Financial and commercial management: client relations, account supervision, payments and collections',
        ],
      },
      {
        company: 'Self-employed',
        position: 'IT Consultant and Systems Technician',
        period: '2006 – 2010',
        description:
          'IT consulting and technical support for companies and individuals.',
        achievements: [
          'Comprehensive client management, complex technical issue resolution and microcomputer support',
          'Systems maintenance, environment deployment and technical training for users and businesses',
        ],
      },
    ],
  },

  contact: {
    title: 'Contact',
    subtitle:
      'Have a project in mind or want to know more about my work? I am open to talk.',
    formTitle: 'Send me a message',
    formName: 'Your name',
    formEmail: 'Your email',
    formMessage: 'Tell me about your project...',
    formSubmit: 'Send message',
    formSuccess: 'Message sent successfully. Thank you!',
    formSuccessTitle: 'Message sent',
    captchaError: 'Please complete the captcha.',
  },

  footer: {
    description:
      'Web developer passionate about automation, infrastructure as code and AI integration in the development lifecycle.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    navigation: [
      { href: '#about', label: 'About' },
      { href: '#projects', label: 'Projects' },
      { href: '#experience', label: 'Experience' },
      { href: '#contact', label: 'Contact' },
    ],
    copyright: 'Lucas Sánchez. All rights reserved.',
  },
};

export default en;
