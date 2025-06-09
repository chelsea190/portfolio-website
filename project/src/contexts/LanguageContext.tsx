import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Hello, I\'m',
    'hero.title': 'Data Analyst',
    'hero.description': 'Passionate about transforming data into actionable insights with expertise in Excel, Power BI, SQL, and data visualization.',
    'hero.cta.contact': 'Get In Touch',
    'hero.cta.resume': 'Download Resume',
    
    // About Section
    'about.title': 'About Me',
    'about.description': 'An enthusiastic data analyst with almost two years experience of practicing data analytics with Excel and Power BI and a year of SQL experience. I specialize in data cleaning, transformation, and visualization to help businesses make informed decisions.',
    'about.education.title': 'Education',
    'about.education.degree': 'Bachelor of Pharmacy (B.Pharm)',
    'about.education.school': 'College of Medicine, University of Lagos',
    'about.languages.title': 'Languages',
    'about.languages.english': 'English (Fluent)',
    'about.languages.french': 'French (Basic)',
    
    // Experience Section
    'experience.title': 'Professional Experience',
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.technical': 'Technical Skills',
    'skills.soft': 'Soft Skills',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.placeholder.title': 'Project Placeholder',
    'projects.placeholder.description': 'This is a placeholder for future projects. More exciting work coming soon!',
    'projects.view': 'View Project',
    'projects.code': 'View Code',
    
    // Testimonials Section
    'testimonials.title': 'What People Say',
    'testimonials.placeholder.name': 'Client Name',
    'testimonials.placeholder.role': 'Position, Company',
    'testimonials.placeholder.text': 'Testimonial placeholder - Your feedback and recommendations will be featured here.',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': 'I\'m always open to discussing new opportunities and interesting projects.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Your Email',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with React & TypeScript',
    
    // 404 Page
    '404.title': 'Page Not Found',
    '404.description': 'Oops! The page you\'re looking for doesn\'t exist.',
    '404.home': 'Go Home'
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.experience': 'Expérience',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': 'Bonjour, je suis',
    'hero.title': 'Analyste de Données',
    'hero.description': 'Passionné par la transformation des données en insights exploitables avec une expertise en Excel, Power BI, SQL et visualisation de données.',
    'hero.cta.contact': 'Me Contacter',
    'hero.cta.resume': 'Télécharger CV',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description': 'Un analyste de données enthousiaste avec près de deux ans d\'expérience en analyse de données avec Excel et Power BI et une année d\'expérience SQL. Je me spécialise dans le nettoyage, la transformation et la visualisation des données.',
    'about.education.title': 'Formation',
    'about.education.degree': 'Licence en Pharmacie (B.Pharm)',
    'about.education.school': 'Faculté de Médecine, Université de Lagos',
    'about.languages.title': 'Langues',
    'about.languages.english': 'Anglais (Courant)',
    'about.languages.french': 'Français (Basique)',
    
    // Experience Section
    'experience.title': 'Expérience Professionnelle',
    
    // Skills Section
    'skills.title': 'Compétences et Expertise',
    'skills.technical': 'Compétences Techniques',
    'skills.soft': 'Compétences Relationnelles',
    
    // Projects Section
    'projects.title': 'Projets en Vedette',
    'projects.placeholder.title': 'Projet Placeholder',
    'projects.placeholder.description': 'Ceci est un placeholder pour les futurs projets. Plus de travaux passionnants à venir !',
    'projects.view': 'Voir le Projet',
    'projects.code': 'Voir le Code',
    
    // Testimonials Section
    'testimonials.title': 'Ce que Disent les Gens',
    'testimonials.placeholder.name': 'Nom du Client',
    'testimonials.placeholder.role': 'Poste, Entreprise',
    'testimonials.placeholder.text': 'Placeholder de témoignage - Vos commentaires et recommandations seront présentés ici.',
    
    // Contact Section
    'contact.title': 'Me Contacter',
    'contact.description': 'Je suis toujours ouvert à discuter de nouvelles opportunités et de projets intéressants.',
    'contact.form.name': 'Votre Nom',
    'contact.form.email': 'Votre Email',
    'contact.form.message': 'Votre Message',
    'contact.form.send': 'Envoyer le Message',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.location': 'Localisation',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    'footer.built': 'Construit avec React & TypeScript',
    
    // 404 Page
    '404.title': 'Page Non Trouvée',
    '404.description': 'Oups ! La page que vous cherchez n\'existe pas.',
    '404.home': 'Retour Accueil'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};