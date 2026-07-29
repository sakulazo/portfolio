export interface Translations {
  lang: 'es' | 'en';

  siteTitle: string;
  siteDescription: string;

  nav: {
    links: { href: string; label: string }[];
    contactBtn: string;
  };

  hero: {
    available: string;
    role: string;
    description: string;
    ctaText: string;
    contactText: string;
    techLabel: string;
    technologies: string[];
  };

  about: {
    title: string;
    bio: string;
    badges: { icon: string; text: string }[];
    skillsTitle: string;
  };

  skills: { name: string; level: number; category: string }[];

  projects: {
    title: string;
    subtitle: string;
    demo: string;
    code: string;
    items: {
      title: string;
      description: string;
      techStack: string[];
      liveUrl: string;
      repoUrl: string;
    }[];
  };

  experience: {
    title: string;
    jobs: {
      company: string;
      position: string;
      period: string;
      description: string;
      achievements: string[];
    }[];
  };

  contact: {
    title: string;
    subtitle: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
    formSuccessTitle: string;
    captchaError: string;
  };

  footer: {
    description: string;
    navTitle: string;
    contactTitle: string;
    navigation: { href: string; label: string }[];
    copyright: string;
  };
}
