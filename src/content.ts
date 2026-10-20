// Todo el texto del sitio en español e inglés.
// Para editar un texto, cámbialo aquí en ambos idiomas.

import abel from './assets/img/abel.webp';
import recSelect from './assets/img/rec-select.webp';
import recTop10 from './assets/img/rec-top10.webp';
import recPbfScreen from './assets/img/rec-pbf-screen.webp';
import recPbfStage from './assets/img/rec-pbf-stage.webp';
import recPbfTrophy from './assets/img/rec-pbf-trophy.webp';
import mfPlatform from './assets/img/mf-platform.webp';
import mfDashboard from './assets/img/mf-dashboard.webp';
import mfSupply from './assets/img/mf-supply.webp';
import destinai1 from './assets/img/destinai-1.webp';
import destinai2 from './assets/img/destinai-2.webp';
import destinai3 from './assets/img/destinai-3.webp';
import logoUpc from './assets/logos/upc.png';
import logoFiu from './assets/logos/fiu.png';
import logoUniandes from './assets/logos/uniandes.png';
import logoCentrum from './assets/logos/centrum.png';
import logoCoes from './assets/logos/coes.png';
import logoOz from './assets/logos/oz.png';

export type Lang = 'es' | 'en';

export interface Slide {
  src: string;
  alt: string;
  caption?: string;
  fit?: 'cover' | 'contain';
  position?: string;
}

export const links = {
  email: 'abelandresvallez@gmail.com',
  phoneDisplay: '+51 989 095 048',
  whatsapp: 'https://wa.me/51989095048',
  linkedin: 'https://www.linkedin.com/in/abel-andres-valle-zuta',
  github: 'https://github.com/AndresVZ23',
  myfix: 'https://myfix.es',
  cv: '/cv/CV-Abel-Andres-Valle-Zuta.pdf',
};

export const photo = abel;

export const logos = [
  { src: logoUpc, alt: 'UPC — Universidad Peruana de Ciencias Aplicadas', h: 52 },
  { src: logoFiu, alt: 'FIU — Florida International University', h: 58 },
  { src: logoUniandes, alt: 'Universidad de los Andes', h: 54 },
  { src: logoCentrum, alt: 'Centrum PUCP', h: 40 },
  { src: logoCoes, alt: 'COES SINAC', h: 42 },
  { src: logoOz, alt: 'Oz Digital AI', h: 46 },
];

const recImages = [recSelect, recTop10, recPbfScreen, recPbfStage, recPbfTrophy];
const recFit: Array<Pick<Slide, 'fit' | 'position'>> = [
  { fit: 'contain' },
  { fit: 'cover', position: '50% 48%' },
  { fit: 'cover', position: '50% 62%' },
  { fit: 'cover', position: '50% 40%' },
  { fit: 'cover', position: '50% 45%' },
];

const mfImages = [mfPlatform, mfDashboard, mfSupply];
const deImages = [destinai1, destinai2, destinai3];

const es = {
  nav: {
    about: 'sobre-mí',
    myfix: 'myfix',
    experience: 'experiencia',
    projects: 'proyectos',
    education: 'formación',
    contact: 'contacto',
    menu: 'Abrir menú',
    close: 'Cerrar menú',
    themeToLight: 'Cambiar a modo claro',
    themeToDark: 'Cambiar a modo oscuro',
    language: 'Idioma',
    cv: 'CV',
  },
  boot: {
    lines: ['INICIANDO SISTEMA', 'CARGANDO MÓDULOS DE IA', 'VERIFICANDO IDENTIDAD', 'ACCESO CONCEDIDO'],
    skip: 'Saltar intro',
  },
  hero: {
    status: '> sistema en línea · Lima, Perú',
    roles: ['CO-FOUNDER & CTO · MYFIX', 'SOFTWARE ENGINEER', 'IA · CLOUD · AUTOMATIZACIÓN'],
    intro:
      'Ingeniero de Software de la Universidad Peruana de Ciencias Aplicadas (UPC), con experiencia académica internacional en Florida International University (FIU), Miami, y experiencia profesional en inteligencia artificial, ingeniería de software, automatización y cloud computing.',
    ctaProjects: 'VER PROYECTOS',
    ctaContact: 'hablemos →',
    stats: [
      { k: 'UPC · PROMEDIO', v: '17.93 / 20' },
      { k: 'FIU · GPA', v: '4.00 / 4.00' },
      { k: 'SHELLHACKS 2025', v: 'TEAM LEADER' },
      { k: 'COFIDE LAUNCHPAD', v: 'TOP 10 · 2026' },
    ],
  },
  marquee: 'FORMACIÓN Y EXPERIENCIA EN //',
  about: {
    eyebrow: '// 01 · sobre mí',
    title: ['Tecnología con ', 'impacto global'],
    paragraphs: [
      'Actualmente trabajo en desarrollo de software e IA, creando soluciones con C#/.NET, Python, Angular, APIs, Azure, Google Cloud Platform y OpenAI en entornos empresariales y tecnológicos.',
      'Más allá del desarrollo, me interesan especialmente los agentes de IA, la automatización, las tecnologías cloud y los productos digitales: explorar cómo las tecnologías emergentes pueden convertirse en soluciones escalables a problemas reales. Me apasiona la intersección entre tecnología, innovación y emprendimiento, con la meta de construir y liderar productos tecnológicos de impacto global.',
    ],
    closing:
      'Siempre abierto a conectar con personas apasionadas por la tecnología, la IA, la innovación y por construir el futuro.',
    facts: [
      { k: 'UBICACIÓN', v: 'Lima, Perú', accent: 'red' },
      { k: 'IDIOMAS', v: 'Español nativo · Inglés profesional', accent: 'red' },
      { k: 'CICLO', v: '9.º ciclo', accent: 'gold' },
      { k: 'ENFOQUE', v: 'Agentes de IA · Full stack', accent: 'gold' },
    ],
    stackTitle: 'ARSENAL TÉCNICO',
    stack: [
      { name: 'Lenguajes', items: ['Python', 'C#', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'C++', 'Kotlin', 'Swift'] },
      { name: 'Frontend y móvil', items: ['Angular', 'Vue.js', 'PrimeVue', 'Flutter', 'HTML', 'CSS'] },
      { name: 'Backend y bases de datos', items: ['.NET', 'Laravel', 'REST APIs', 'SQL Server', 'MySQL', 'MongoDB'] },
      { name: 'IA y datos', items: ['Agentes de IA', 'OpenAI API', 'Google ADK', 'Prompt Engineering', 'TensorFlow', 'Data Science', 'Power BI'] },
      { name: 'Cloud e integraciones', items: ['Google Cloud Platform', 'Azure', 'Microsoft Graph', 'Entra ID · OAuth 2.0', 'Exchange Online', 'APIs de Meta', 'Google Drive API', 'GoHighLevel'] },
      { name: 'Automatización y seguridad', items: ['UiPath Studio', 'StudioX', 'RPA', 'Hacking ético', 'Seguridad web'] },
      { name: 'Herramientas y metodologías', items: ['Git', 'Postman', 'Scrum', 'Microsoft Office'] },
    ],
  },
  myfix: {
    eyebrow: '// 02 · startup · co-founder & cto',
    title: ['MyFix: IA que pone al día ', 'a las MYPEs'],
    description:
      'Agentes de IA que llevan caja, contabilidad, impuestos SUNAT y planilla de pequeñas empresas (RUC 20) y personas con negocio (RUC 10). El dueño manda una foto por WhatsApp; la IA registra y prepara todo, y él aprueba en un clic. Como CTO lidero la arquitectura, la IA y la ejecución técnica.',
    metrics: [
      { value: 190, suffix: '', label: 'REGLAS SUNAT' },
      { value: 234, suffix: '/234', label: 'PRUEBAS DE INTEGRACIÓN' },
      { value: 24, suffix: '/7', label: 'ASISTENTE IA' },
    ],
    cta: 'myfix.es →',
    badge: 'RECONOCIMIENTOS',
    recognitions: [
      { k: 'COFIDE LAUNCHPAD 2026', v: 'Startup seleccionada dentro del Top 10' },
      { k: 'PERU BUSINESS FEST 2026', v: 'Invitados por COFIDE y Endeavor · reconocimiento en la categoría Pre-Seed / Seed' },
    ],
    slides: [
      'Startup seleccionada · COFIDE Launchpad 2026',
      'Top 10 COFIDE · Peru Business Fest 2026',
      'Categoría Pre-Seed / Seed · Peru Business Fest 2026',
      'Peru Business Fest 2026 · Lima',
      'Reconocimiento COFIDE · Peru Business Fest 2026',
    ],
    alts: [
      'Anuncio de MyFix como startup seleccionada del COFIDE Launchpad 2026',
      'Pantalla del Top 10 COFIDE en el Peru Business Fest con MyFix entre las startups',
      'Pantalla de la categoría Pre-Seed / Seed del Peru Business Fest con MyFix',
      'Escenario del Peru Business Fest 2026',
      'Reconocimiento de COFIDE a MyFix en el Peru Business Fest 2026',
    ],
  },
  experience: {
    eyebrow: '// 03 · experiencia',
    title: ['Trayectoria ', 'profesional'],
    jobs: [
      {
        role: 'Practicante de Software',
        company: 'COES SINAC',
        href: 'https://www.coes.org.pe',
        dates: 'ENE 2026 — ACTUALIDAD',
        logo: logoCoes,
        current: true,
        points: [
          'Mantenimiento y mejora de aplicaciones internas en C#/.NET, corrección de errores y soporte funcional, con control de cambios en Git.',
          'Administración de usuarios y permisos, consultas SQL, validación de datos y mejora de dashboards de Power BI.',
          'Proyecto de pruebas de seguridad de aplicaciones web (hacking ético): evaluación de riesgos, vulnerabilidades y mitigación.',
          'POC de trazabilidad de correos con Microsoft Graph y Exchange Online Message Trace; autenticación con Entra ID (OAuth 2.0).',
        ],
        tags: ['C#', '.NET', 'SQL', 'Power BI', 'Microsoft Graph', 'Entra ID'],
      },
      {
        role: 'Full Stack Developer',
        company: 'Oz Digital AI',
        href: 'https://www.ozdigital.ai/',
        dates: 'ENE 2026 — JUL 2026',
        logo: logoOz,
        current: false,
        points: [
          'Desarrollo end-to-end de soluciones basadas en IA: frontend, backend, procesamiento de datos y despliegue.',
          'Agentes de IA con OpenAI API y GCP, con interacción basada en eventos y ejecución automatizada de acciones.',
          'Integración de APIs de Meta, Google Drive y GoHighLevel para pipelines de datos, automatización de marketing y dashboards.',
        ],
        tags: ['OpenAI', 'GCP', 'Agentes IA', 'APIs'],
      },
      {
        role: 'Practicante de Ingeniería de Software',
        company: 'Centrum PUCP',
        href: 'https://centrum.pucp.edu.pe',
        dates: 'MAR 2025 — AGO 2025',
        logo: logoCentrum,
        current: false,
        points: [
          'Desarrollo y optimización de módulos web con Vue.js, PHP y Laravel sobre Microsoft SQL Server.',
          'Refactorización del sistema de notificaciones por WhatsApp y mejora de los módulos de Gestión Académica, Tesis y sincronización con Canvas.',
        ],
        tags: ['Vue.js', 'Laravel', 'PHP', 'SQL Server'],
      },
      {
        role: 'Practicante de RPA / Webmaster',
        company: 'Centrum PUCP',
        href: 'https://centrum.pucp.edu.pe',
        dates: 'AGO 2024 — FEB 2025',
        logo: logoCentrum,
        current: false,
        points: [
          'Automatización de procesos con UiPath Studio y StudioX; gestión de contenidos web bajo Scrum.',
          'Reducción del envío de certificados de dos semanas a un día.',
        ],
        tags: ['UiPath', 'RPA', 'Scrum'],
      },
    ],
  },
  projects: {
    eyebrow: '// 04 · proyectos',
    title: ['Lo que he ', 'construido'],
    prev: 'Imagen anterior',
    next: 'Imagen siguiente',
    goTo: 'Ir a la imagen',
    items: [
      {
        kicker: 'STARTUP · CO-FOUNDER & CTO',
        name: 'MyFix',
        desc: 'Agentes de IA para el back office de las MYPEs: caja, contabilidad, SUNAT y planilla desde WhatsApp, con aprobación en un clic.',
        tags: ['Agentes IA', 'TypeScript', 'Next.js', 'WhatsApp'],
        href: 'https://myfix.es',
        cta: 'myfix.es →',
        alts: [
          'Plataforma MyFix: comprobante enviado por WhatsApp y registrado en el dashboard',
          'Panel de MyFix en escritorio y asistente en el celular',
          'Módulo de cadena de suministro de MyFix',
        ],
      },
      {
        kicker: 'SHELLHACKS 2025 · TEAM LEADER',
        name: 'DestinAI',
        desc: 'Planificador de viajes con IA: vuelos y hoteles reales, clima y lugares según tus intereses, convertidos en un itinerario día a día con Google Gemini.',
        tags: ['Python', 'FastAPI', 'Gemini', 'SerpAPI'],
        href: 'https://github.com/Cintraa/destinai',
        cta: 'ver repositorio →',
        alts: ['Ilustración de DestinAI', 'Logo de DestinAI', 'Paso del formulario de viaje de DestinAI'],
      },
    ],
  },
  education: {
    eyebrow: '// 05 · formación y logros',
    title: ['Formación ', 'internacional'],
    schools: [
      { name: 'UPC · Ingeniería de Software', logo: logoUpc, meta: 'LIMA · 2022 — ACTUALIDAD', score: '17.93 / 20', desc: '9.º ciclo en curso.' },
      { name: 'Florida International University', logo: logoFiu, meta: 'MIAMI · AGO — DIC 2025', score: '4.00 / 4.00', desc: 'Primer estudiante de la UPC en hacer intercambio en FIU. Cursos: Python, Data Science, Computing and Network Security y Organizational Communication.' },
      { name: 'Universidad de los Andes', logo: logoUniandes, meta: 'BOGOTÁ · 2024 · 2025', score: '2 misiones', desc: 'Ciberseguridad e IoT (2024); IA y desarrollo de software con certificación NVIDIA (2025).' },
    ],
    wins: [
      { k: 'COFIDE LAUNCHPAD 2026', v: 'Top 10 con MyFix', tone: 'red' },
      { k: 'PERU BUSINESS FEST 2026', v: 'Reconocimiento COFIDE · categoría Pre-Seed / Seed', tone: 'red' },
      { k: 'SHELLHACKS 2025 · FIU', v: 'Team Leader de DestinAI', tone: 'gold' },
      { k: 'NVIDIA · 2025', v: 'Building LLM Applications with Prompt Engineering', tone: 'none' },
      { k: 'GOOGLE · 2024', v: 'Machine Learning with TensorFlow on Google Cloud', tone: 'none' },
      { k: 'U. COLORADO BOULDER · 2025', v: 'Bases de Datos para Científicos de Datos', tone: 'none' },
      { k: 'IBM · 2024', v: 'IBM Cybersecurity Analyst', tone: 'none' },
    ],
    more: { k: '+ MÁS CERTIFICACIONES', v: 'Ver todas en mi LinkedIn ↗' },
  },
  contact: {
    eyebrow: '// 06 · contacto',
    title: ['¿Construimos algo ', 'juntos?'],
    text: 'Abierto a oportunidades, colaboraciones, y conversaciones sobre tecnología o el día a día.',
    formTitle: 'ABRIR CANAL DE COMUNICACIÓN',
    subject: 'Asunto',
    email: 'Correo',
    message: 'Mensaje',
    send: 'ENVIAR MENSAJE →',
    sending: 'ENVIANDO…',
    ok: 'Mensaje enviado. Te responderé pronto.',
    error: 'No se pudo enviar. Escríbeme directamente a mi correo.',
    inactive: 'El buzón aún no está activado. Escríbeme directamente a mi correo.',
  },
  footer: {
    tagline: 'Construyendo productos de IA con impacto real desde Lima, Perú.',
    role: 'SOFTWARE ENGINEER · CO-FOUNDER & CTO @ MYFIX',
    nav: 'NAVEGACIÓN',
    connect: 'CONECTA',
    cv: 'Descargar CV ↓',
    rights: 'Todos los derechos reservados',
    top: '↑ volver arriba',
  },
};

export type Content = typeof es;

const en: Content = {
  nav: {
    about: 'about',
    myfix: 'myfix',
    experience: 'experience',
    projects: 'projects',
    education: 'education',
    contact: 'contact',
    menu: 'Open menu',
    close: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    language: 'Language',
    cv: 'CV',
  },
  boot: {
    lines: ['BOOTING SYSTEM', 'LOADING AI MODULES', 'VERIFYING IDENTITY', 'ACCESS GRANTED'],
    skip: 'Skip intro',
  },
  hero: {
    status: '> system online · Lima, Peru',
    roles: ['CO-FOUNDER & CTO · MYFIX', 'SOFTWARE ENGINEER', 'AI · CLOUD · AUTOMATION'],
    intro:
      'Software Engineer at Universidad Peruana de Ciencias Aplicadas (UPC), with international academic experience at Florida International University (FIU), Miami, and professional experience across Artificial Intelligence, Software Engineering, Automation and Cloud Computing.',
    ctaProjects: 'SEE PROJECTS',
    ctaContact: "let's talk →",
    stats: [
      { k: 'UPC · GPA', v: '17.93 / 20' },
      { k: 'FIU · GPA', v: '4.00 / 4.00' },
      { k: 'SHELLHACKS 2025', v: 'TEAM LEADER' },
      { k: 'COFIDE LAUNCHPAD', v: 'TOP 10 · 2026' },
    ],
  },
  marquee: 'EDUCATION AND EXPERIENCE AT //',
  about: {
    eyebrow: '// 01 · about me',
    title: ['Technology with ', 'global impact'],
    paragraphs: [
      'Currently working in software development and AI, building solutions with C#/.NET, Python, Angular, APIs, Azure, Google Cloud Platform and OpenAI across enterprise and technology environments.',
      'Beyond software development, I am particularly interested in AI agents, automation, cloud technologies and digital products, exploring how emerging technologies can become scalable solutions to real-world problems. I am passionate about the intersection of technology, innovation and entrepreneurship, with a long-term goal of building and leading technology products with global impact.',
    ],
    closing: 'Always open to connecting with people passionate about technology, AI, innovation and shaping the future.',
    facts: [
      { k: 'LOCATION', v: 'Lima, Peru', accent: 'red' },
      { k: 'LANGUAGES', v: 'Spanish native · English professional', accent: 'red' },
      { k: 'TERM', v: '9th term', accent: 'gold' },
      { k: 'FOCUS', v: 'AI agents · Full stack', accent: 'gold' },
    ],
    stackTitle: 'TECH ARSENAL',
    stack: [
      { name: 'Languages', items: ['Python', 'C#', 'TypeScript', 'JavaScript', 'Java', 'PHP', 'C++', 'Kotlin', 'Swift'] },
      { name: 'Frontend & mobile', items: ['Angular', 'Vue.js', 'PrimeVue', 'Flutter', 'HTML', 'CSS'] },
      { name: 'Backend & databases', items: ['.NET', 'Laravel', 'REST APIs', 'SQL Server', 'MySQL', 'MongoDB'] },
      { name: 'AI & data', items: ['AI agents', 'OpenAI API', 'Google ADK', 'Prompt Engineering', 'TensorFlow', 'Data Science', 'Power BI'] },
      { name: 'Cloud & integrations', items: ['Google Cloud Platform', 'Azure', 'Microsoft Graph', 'Entra ID · OAuth 2.0', 'Exchange Online', 'Meta APIs', 'Google Drive API', 'GoHighLevel'] },
      { name: 'Automation & security', items: ['UiPath Studio', 'StudioX', 'RPA', 'Ethical hacking', 'Web security'] },
      { name: 'Tools & methods', items: ['Git', 'Postman', 'Scrum', 'Microsoft Office'] },
    ],
  },
  myfix: {
    eyebrow: '// 02 · startup · co-founder & cto',
    title: ['MyFix: AI that keeps ', 'small businesses up to date'],
    description:
      'AI agents that handle cash flow, accounting, SUNAT taxes and payroll for small businesses (RUC 20) and self-employed owners (RUC 10). The owner sends a photo on WhatsApp; the AI records and prepares everything, and they approve in one click. As CTO I lead the architecture, the AI and the technical execution.',
    metrics: [
      { value: 190, suffix: '', label: 'SUNAT RULES' },
      { value: 234, suffix: '/234', label: 'INTEGRATION TESTS' },
      { value: 24, suffix: '/7', label: 'AI ASSISTANT' },
    ],
    cta: 'myfix.es →',
    badge: 'RECOGNITION',
    recognitions: [
      { k: 'COFIDE LAUNCHPAD 2026', v: 'Selected startup in the Top 10' },
      { k: 'PERU BUSINESS FEST 2026', v: 'Invited by COFIDE and Endeavor · recognized in the Pre-Seed / Seed category' },
    ],
    slides: [
      'Selected startup · COFIDE Launchpad 2026',
      'COFIDE Top 10 · Peru Business Fest 2026',
      'Pre-Seed / Seed category · Peru Business Fest 2026',
      'Peru Business Fest 2026 · Lima',
      'COFIDE recognition · Peru Business Fest 2026',
    ],
    alts: [
      'MyFix announced as a selected startup of COFIDE Launchpad 2026',
      'COFIDE Top 10 screen at Peru Business Fest with MyFix among the startups',
      'Pre-Seed / Seed category screen at Peru Business Fest with MyFix',
      'Peru Business Fest 2026 stage',
      'COFIDE recognition to MyFix at Peru Business Fest 2026',
    ],
  },
  experience: {
    eyebrow: '// 03 · experience',
    title: ['Professional ', 'journey'],
    jobs: [
      {
        role: 'Software Intern',
        company: 'COES SINAC',
        href: 'https://www.coes.org.pe',
        dates: 'JAN 2026 — PRESENT',
        logo: logoCoes,
        current: true,
        points: [
          'Maintenance and improvement of internal C#/.NET applications, bug fixing and functional support, with change control in Git.',
          'User and permission management, SQL queries, data validation and Power BI dashboard improvements.',
          'Web application security testing project (ethical hacking): risk assessment, vulnerabilities and mitigation.',
          'Email traceability POC with Microsoft Graph and Exchange Online Message Trace; Entra ID authentication (OAuth 2.0).',
        ],
        tags: ['C#', '.NET', 'SQL', 'Power BI', 'Microsoft Graph', 'Entra ID'],
      },
      {
        role: 'Full Stack Developer',
        company: 'Oz Digital AI',
        href: 'https://www.ozdigital.ai/',
        dates: 'JAN 2026 — JUL 2026',
        logo: logoOz,
        current: false,
        points: [
          'End-to-end development of AI-based solutions: frontend, backend, data processing and deployment.',
          'AI agents with OpenAI API and GCP, with event-driven interaction and automated action execution.',
          'Integration of Meta, Google Drive and GoHighLevel APIs for data pipelines, marketing automation and dashboards.',
        ],
        tags: ['OpenAI', 'GCP', 'AI agents', 'APIs'],
      },
      {
        role: 'Software Engineering Intern',
        company: 'Centrum PUCP',
        href: 'https://centrum.pucp.edu.pe',
        dates: 'MAR 2025 — AUG 2025',
        logo: logoCentrum,
        current: false,
        points: [
          'Development and optimization of web modules with Vue.js, PHP and Laravel on Microsoft SQL Server.',
          'Refactored the WhatsApp notification system and improved the Academic Management, Thesis and Canvas sync modules.',
        ],
        tags: ['Vue.js', 'Laravel', 'PHP', 'SQL Server'],
      },
      {
        role: 'RPA Intern / Webmaster',
        company: 'Centrum PUCP',
        href: 'https://centrum.pucp.edu.pe',
        dates: 'AUG 2024 — FEB 2025',
        logo: logoCentrum,
        current: false,
        points: [
          'Process automation with UiPath Studio and StudioX; web content management under Scrum.',
          'Cut certificate delivery time from two weeks to one day.',
        ],
        tags: ['UiPath', 'RPA', 'Scrum'],
      },
    ],
  },
  projects: {
    eyebrow: '// 04 · projects',
    title: ["What I've ", 'built'],
    prev: 'Previous image',
    next: 'Next image',
    goTo: 'Go to image',
    items: [
      {
        kicker: 'STARTUP · CO-FOUNDER & CTO',
        name: 'MyFix',
        desc: 'AI agents for the back office of small businesses: cash flow, accounting, taxes and payroll from WhatsApp, approved in one click.',
        tags: ['AI agents', 'TypeScript', 'Next.js', 'WhatsApp'],
        href: 'https://myfix.es',
        cta: 'myfix.es →',
        alts: [
          'MyFix platform: receipt sent on WhatsApp and recorded in the dashboard',
          'MyFix dashboard on desktop and assistant on mobile',
          'MyFix supply chain module',
        ],
      },
      {
        kicker: 'SHELLHACKS 2025 · TEAM LEADER',
        name: 'DestinAI',
        desc: 'AI travel planner: real flights and hotels, weather and places matched to your interests, turned into a day-by-day itinerary with Google Gemini.',
        tags: ['Python', 'FastAPI', 'Gemini', 'SerpAPI'],
        href: 'https://github.com/Cintraa/destinai',
        cta: 'view repository →',
        alts: ['DestinAI illustration', 'DestinAI logo', 'DestinAI trip form step'],
      },
    ],
  },
  education: {
    eyebrow: '// 05 · education & achievements',
    title: ['International ', 'education'],
    schools: [
      { name: 'UPC · Software Engineering', logo: logoUpc, meta: 'LIMA · 2022 — PRESENT', score: '17.93 / 20', desc: 'Currently in 9th term.' },
      { name: 'Florida International University', logo: logoFiu, meta: 'MIAMI · AUG — DEC 2025', score: '4.00 / 4.00', desc: 'First UPC student to complete an exchange at FIU. Courses: Python, Data Science, Computing and Network Security and Organizational Communication.' },
      { name: 'Universidad de los Andes', logo: logoUniandes, meta: 'BOGOTÁ · 2024 · 2025', score: '2 missions', desc: 'Cybersecurity and IoT (2024); AI and software development with NVIDIA certification (2025).' },
    ],
    wins: [
      { k: 'COFIDE LAUNCHPAD 2026', v: 'Top 10 with MyFix', tone: 'red' },
      { k: 'PERU BUSINESS FEST 2026', v: 'COFIDE recognition · Pre-Seed / Seed category', tone: 'red' },
      { k: 'SHELLHACKS 2025 · FIU', v: 'Team Leader of DestinAI', tone: 'gold' },
      { k: 'NVIDIA · 2025', v: 'Building LLM Applications with Prompt Engineering', tone: 'none' },
      { k: 'GOOGLE · 2024', v: 'Machine Learning with TensorFlow on Google Cloud', tone: 'none' },
      { k: 'U. COLORADO BOULDER · 2025', v: 'Databases for Data Scientists', tone: 'none' },
      { k: 'IBM · 2024', v: 'IBM Cybersecurity Analyst', tone: 'none' },
    ],
    more: { k: '+ MORE CERTIFICATIONS', v: 'See them all on my LinkedIn ↗' },
  },
  contact: {
    eyebrow: '// 06 · contact',
    title: ["Let's build something ", 'together'],
    text: 'Open to opportunities, collaborations, and conversations about technology or everyday life.',
    formTitle: 'OPEN COMMUNICATION CHANNEL',
    subject: 'Subject',
    email: 'Email',
    message: 'Message',
    send: 'SEND MESSAGE →',
    sending: 'SENDING…',
    ok: "Message sent. I'll get back to you soon.",
    error: "Couldn't send it. Please write to my email directly.",
    inactive: 'The inbox is not activated yet. Please write to my email directly.',
  },
  footer: {
    tagline: 'Building AI products with real impact from Lima, Peru.',
    role: 'SOFTWARE ENGINEER · CO-FOUNDER & CTO @ MYFIX',
    nav: 'NAVIGATION',
    connect: 'CONNECT',
    cv: 'Download CV ↓',
    rights: 'All rights reserved',
    top: '↑ back to top',
  },
};

export const content: Record<Lang, Content> = { es, en };

export function recognitionSlides(c: Content): Slide[] {
  return recImages.map((src, i) => ({ src, alt: c.myfix.alts[i], caption: c.myfix.slides[i], ...recFit[i] }));
}

export function projectSlides(c: Content, index: number): Slide[] {
  const imgs = index === 0 ? mfImages : deImages;
  const fit: Slide['fit'] = index === 0 ? 'cover' : 'contain';
  return imgs.map((src, i) => ({ src, alt: c.projects.items[index].alts[i], fit }));
}
