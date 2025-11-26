export type Language = "en" | "fr"

export const translations = {
  en: {
    // Header & Navigation
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    // Hero Section
    hero: {
      name: "Modou DIA",
      title: "AI & Software Engineering",
      description:
        "Computer engineering student specializing in Artificial Intelligence, Data Engineering, and software development. Passionate about NLP, computer vision, and building reliable data-driven systems.",
      viewProjects: "View Projects",
      getInTouch: "Get in Touch",
      fullStack: "AI-Focused Software Engineer",
    },
    // About Section
    about: {
      title: "About Me",
      para1:
        "I am a final-year Computer Engineering student at ENICarthage with strong academic results and a consistent distinction. My background in software engineering and computer science has grown through hands-on projects and two professional internships.",
      para2:
        "I have worked on Natural Language Processing, computer vision, data processing, backend development, and database design. My recent projects include genetic disease classification from text datasets, YOLO-based object detection, and building dashboards and backend modules for a hotel management system.",
      para3:
        "I enjoy learning, designing clean systems, and solving real problems with practical AI and solid engineering principles.",
      approach: "Approach",
      approachText:
        "I combine strong fundamentals with a pragmatic mindset. I aim for clarity, maintainability, and impact in every project.",
      vision: "Vision",
      visionText:
        "To contribute to the development of efficient AI systems and support the technological growth of my country.",
      currently: "Currently",
      currentlyText:
        "Exploring advanced ML techniques, improving my software engineering skills, and working on real-world AI applications.",
    },
    // Skills Section
    skills: {
      title: "Skills & Expertise",
      categories: {
        aiml: "AI & Machine Learning",
        dataeng: "Data & Databases",
        softdev: "Software Development",
        devops: "DevOps & Tools",
      },
      items: {
        aiml: [
          "Machine Learning (Scikit-learn)",
          "Deep Learning (PyTorch, TensorFlow)",
          "NLP (text preprocessing, classification)",
          "Computer Vision (YOLO, OpenCV)",
          "Data preparation & feature engineering",
        ],
        dataeng: ["SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB)", "Data Cleaning", "ETL basics", "Power BI"],
        softdev: ["Python", "Java", "C/C++", "Angular", "Flask", "Node.js", "REST APIs"],
        devops: ["Docker", "Git/GitHub", "Linux", "CI basics", "Project documentation"],
      },
    },
    // Projects Section
    projects: {
      title: "Featured Projects",
      subtitle:
        "Engineering solutions bridging the gap between complex data processing, reliable backend systems, and AI integration.",
      viewProject: "Live Demo",
      code: "Source Code",
      items: {
        nlp_disease: {
          title: "Genetic Disease NLP Classifier",
          description:
            "Engineered a text classification pipeline to detect genetic diseases from unstructured medical data. Implemented text preprocessing (tokenization, lemmatization), feature extraction, and model integration via a Flask API.",
        },
        hotel_bi: {
          title: "Hotel Management & BI System",
          description:
            "Developed core backend modules for a hotel ERP (reservations, billing). Designed high-level Power BI dashboards connected to SQL databases to assist management in operational decision-making.",
        },
        fullstack_security: {
          title: "Secure Distributed Architecture",
          description:
            "Architected a secure REST API using Spring Boot and Angular. Implemented JWT (JSON Web Token) authentication stateless security and containerized the application using Docker for consistent deployment.",
        },
        bigdata: {
          title: "Big Data Processing & NoSQL",
          description:
            "Explored massive dataset processing using the Apache Spark & Hadoop ecosystem. Optimized data storage performance and query structures using MongoDB (NoSQL) for non-relational data handling.",
        },
      },
    },
    // Experience Section
    experience: {
      title: "Experience & Education",
      professionalExperience: "Professional Experience",
      education: "Education",
      experiences: [
        {
          title: "Software & Data Engineering Intern",
          company: "SFM Technologies",
          period: "2025",
          description:
            "Worked on backend development, database management, and business dashboards for a hotel information system.",
        },
        {
          title: "AI/NLP Intern",
          company: "Research Laboratory",
          period: "2023",
          description:
            "Developed a text classification model for genetic disease detection. Built preprocessing pipelines and evaluated ML architectures.",
        },
        
      ],
      educations: [
        {
          degree: "Engineering Degree in Computer Science",
          school: "National Engineering School of Carthage (ENICarthage)",
          period: "2023 - 2026",
          focus: "Computer Engineering – AI & Software Development",
        },
        {
          degree: "Bachelor in Software Engineering",
          school: "Faculty of Sciences of Bizerte",
          period: "2020 - 2023",
          focus: "Software Engineering ",
        },
      ],
    },
    // Contact Section
    contact: {
      title: "Let's Connect",
      description:
        "Feel free to reach out for collaborations, internships, or opportunities in AI and software engineering.",
      sendMessage: "Send Message",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      connectWithMe: "Connect With Me",
      connectDescription:
        "Available via email, LinkedIn, or GitHub. I generally respond within 24 hours.",
      quickResponse: "Fast Response",
      quickResponseText: "Usually available for tech discussions and opportunities.",
    },
    // Footer
    footer: {
      built: "Built with",
      allRights: "All rights reserved.",
    },
  },

  // ==================== VERSION FRANÇAISE ========================
  fr: {
    // Navigation
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
    },
    hero: {
      name: "Modou DIA",
      title: "Ingénierie IA & Logiciels",
      description:
        "Élève ingénieur en Informatique spécialisé en Intelligence Artificielle, Data Engineering et développement logiciel. Passionné par le NLP, la vision par ordinateur et la création de systèmes fiables basés sur les données.",
      viewProjects: "Voir les projets",
      getInTouch: "Me contacter",
      fullStack: "Ingénieur Logiciel orienté IA",
    },
    about: {
      title: "À propos de moi",
      para1:
        "Je suis élève ingénieur en dernière année à l’ENICarthage, avec un parcours marqué par de bons résultats et plusieurs projets concrets en IA, développement logiciel et bases de données.",
      para2:
        "J’ai réalisé deux stages : un en NLP dans un laboratoire de recherche, et un en développement logiciel et data engineering chez SFM Technologies. J’ai également travaillé sur plusieurs projets personnels en IA et vision par ordinateur.",
      para3:
        "Je m’intéresse particulièrement aux applications pratiques de l’IA et à la création de solutions robustes, bien conçues et documentées.",
      approach: "Approche",
      approachText:
        "Rigueur, simplicité, maintenabilité et efficacité guident ma manière de travailler.",
      vision: "Vision",
      visionText:
        "Mettre l’IA au service du développement technologique et contribuer à l’innovation dans mon pays.",
      currently: "Actuellement",
      currentlyText:
        "Approfondissement des techniques avancées de ML et développement d’applications IA réelles.",
    },
    skills: {
      title: "Compétences & Expertise",
      categories: {
        aiml: "IA & Machine Learning",
        dataeng: "Données & Bases de données",
        softdev: "Développement Logiciel",
        devops: "DevOps & Outils",
      },
      items: {
        aiml: [
          "Machine Learning (Scikit-learn)",
          "Deep Learning (PyTorch, TensorFlow)",
          "NLP (prétraitement & classification)",
          "Vision par ordinateur (YOLO, OpenCV)",
          "Préparation & analyse de données",
        ],
        dataeng: ["SQL (MySQL, PostgreSQL)", "NoSQL (MongoDB)", "Nettoyage & préparation de données", "ETL", "Power BI"],
        softdev: ["Python", "Java", "C/C++", "Angular", "Flask", "Node.js", "APIs REST"],
        devops: ["Docker", "Git/GitHub", "Linux", "CI/CD (bases)", "Documentation technique"],
      },
    },
    projects: {
     title: "Projets Réalisés",
      subtitle: "Des solutions d'ingénierie alliant traitement de données complexe, systèmes backend robustes et intégration d'IA.",
      viewProject: "Démo Live",
      code: "Code Source",
      items: {
        nlp_disease: {
          title: "Classification NLP - Maladies Génétiques",
          description:
            "Conception d'un pipeline de classification textuelle pour détecter les maladies génétiques. Implémentation du prétraitement (nettoyage, vectorisation), de l'entraînement du modèle et de son exposition via une API Flask.",
        },
        hotel_bi: {
          title: "Système de Gestion Hôtelier & BI",
          description:
            "Développement de modules backend critiques (réservations, facturation). Conception de tableaux de bord décisionnels Power BI connectés aux bases SQL pour le pilotage stratégique de l'établissement.",
        },
        fullstack_security: {
          title: "Architecture Distribuée Sécurisée",
          description:
            "Architecture d'une API REST complète avec Spring Boot et Angular. Mise en place d'une sécurité stateless via JWT (JSON Web Token) et conteneurisation de l'application via Docker.",
        },
        bigdata: {
          title: "Traitement Big Data & NoSQL",
          description:
            "Exploration et traitement de données massives via l'écosystème Apache Spark & Hadoop. Optimisation des performances de stockage et structuration des requêtes sur MongoDB (NoSQL).",
        },
      },
    },
    experience: {
      title: "Expérience & Éducation",
      professionalExperience: "Expérience Professionnelle",
      education: "Éducation",
      experiences: [
        {
          title: "Stagiaire Développement & Data",
          company: "SFM Technologies",
          period: "2025",
          description:
            "Développement backend, conception de base de données et création de tableaux de bord BI.",
        },
        {
          title: "Stagiaire IA / NLP",
          company: "Laboratoire de Recherche",
          period: "2023",
          description:
            "Développement d’un modèle de classification pour la détection automatique de maladies génétiques à partir de textes.",
        },
        
      ],
      educations: [
        {
          degree: "Cycle Ingénieur en Génie Informatique",
          school: "Ecole Nationale d’Ingénieurs de Carthage (ENICarthage)",
          period: "2023 - 2026",
          focus: "IA, Développement Logiciel, Systèmes d’Information",
        },
        {
          degree: "Licence en  Génie Logiciel et systèmes d’Information",
          school: "Faculté des sciences de Bizerte",
          period: "2020 - 2023",
          focus: "Développement Logiciel ",
        },
      ],
    },
    contact: {
      title: "Contact",
      description:
        "N'hésitez pas à me contacter pour des opportunités, collaborations ou questions.",
      sendMessage: "Envoyer",
      name: "Votre Nom",
      email: "Votre Email",
      subject: "Sujet",
      message: "Votre Message",
      submit: "Envoyer",
      connectWithMe: "Réseaux",
      connectDescription:
        "Disponible via email, LinkedIn ou GitHub.",
      quickResponse: "Réponse rapide",
      quickResponseText: "Généralement dans les 24h",
    },
    footer: {
      built: "Construit avec",
      allRights: "Tous droits réservés.",
    },
  },
}

export function getTranslation(lang: Language, key: string): any {
  const keys = key.split(".")
  let value: any = translations[lang]

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k]
    } else {
      return key // fallback en cas de clé manquante
    }
  }
  return value
}

