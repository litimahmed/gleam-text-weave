import React, { createContext, useContext, useState } from 'react';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
  };
}

const translations: Translations = {
  // Header
  'nav.partnerships': { en: 'Partnerships', fr: 'Partenariats' },
  'nav.aboutUs': { en: 'About Us', fr: 'À propos' },
  'nav.privacy': { en: 'Privacy & Policy', fr: 'Confidentialité' },
  'nav.contact': { en: 'Contact Us', fr: 'Contact' },
  'nav.clientPortal': { en: 'Client Portal', fr: 'Portail client' },
  'nav.signin': { en: 'Sign In (Professionals)', fr: 'Connexion (Professionnels)' },
  
  // Hero
  'hero.title': { en: 'Smart Queue Management', fr: 'Gestion intelligente des files' },
  'hero.subtitle': { en: 'Transform your customer experience with intelligent appointment scheduling, real-time queue management, and seamless digital workflows.', fr: 'Transformez l\'expérience client avec la planification intelligente de rendez-vous, la gestion en temps réel des files d\'attente et des flux numériques fluides.' },
  'hero.cta': { en: 'Get Started Free', fr: 'Commencer gratuitement' },
  'hero.trusted': { en: 'Trusted by 25,000+ businesses worldwide', fr: 'Fait confiance par plus de 25 000 entreprises dans le monde' },
  'hero.reduction': { en: 'reduction in wait times', fr: 'réduction des temps d\'attente' },
  'hero.rating': { en: 'customer rating', fr: 'note client' },
  
  // Partnerships
  'partnerships.title': { en: 'Our Trusted Partnerships', fr: 'Nos partenariats de confiance' },
  'partnerships.subtitle': { en: 'We collaborate with leading organizations to deliver exceptional service', fr: 'Nous collaborons avec des organisations de premier plan pour offrir un service exceptionnel' },
  
  // About Us
  'about.tagline': { en: 'WHO WE ARE', fr: 'QUI NOUS SOMMES' },
  'about.title': { en: 'About Toorrii', fr: 'À propos de Toorrii' },
  'about.subtitle': { en: 'We are dedicated to revolutionizing how businesses manage appointments and queues', fr: 'Nous nous consacrons à révolutionner la façon dont les entreprises gèrent les rendez-vous et les files d\'attente' },
  'about.mission': { en: 'Our Mission', fr: 'Notre Mission' },
  'about.missionDesc': { en: 'Transform how businesses interact with customers through intelligent queue management', fr: 'Transformer la façon dont les entreprises interagissent avec les clients grâce à une gestion intelligente des files' },
  'about.innovation': { en: 'Innovation First', fr: 'Innovation d\'abord' },
  'about.innovationDesc': { en: 'Cutting-edge technology that adapts to your business needs and scales with growth', fr: 'Technologie de pointe qui s\'adapte aux besoins de votre entreprise et évolue avec la croissance' },
  'about.customer': { en: 'Customer Focused', fr: 'Centré sur le client' },
  'about.customerDesc': { en: 'Every feature designed to enhance user experience and satisfaction', fr: 'Chaque fonctionnalité conçue pour améliorer l\'expérience et la satisfaction des utilisateurs' },
  'about.excellence': { en: 'Excellence', fr: 'Excellence' },
  'about.excellenceDesc': { en: 'Committed to delivering the highest quality service and support', fr: 'Engagés à fournir un service et un support de la plus haute qualité' },
  'about.readMore': { en: 'Learn More About Us', fr: 'En savoir plus' },
  
  // Privacy
  'privacy.title': { en: 'Privacy & Security', fr: 'Confidentialité et sécurité' },
  'privacy.subtitle': { en: 'Your privacy and data security are our top priorities', fr: 'Votre confidentialité et la sécurité de vos données sont nos priorités absolues' },
  'privacy.description': { en: 'We are committed to protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data. Our comprehensive privacy policy outlines our practices and your rights regarding your information.', fr: 'Nous nous engageons à protéger vos informations personnelles et à garantir la transparence dans la façon dont nous collectons, utilisons et protégeons vos données. Notre politique de confidentialité complète décrit nos pratiques et vos droits concernant vos informations.' },
  'privacy.dataProtection': { en: 'Data Protection', fr: 'Protection des données' },
  'privacy.dataProtectionDesc': { en: 'Your data is protected with industry-leading security measures and protocols', fr: 'Vos données sont protégées par des mesures et protocoles de sécurité de pointe' },
  'privacy.encryption': { en: 'End-to-End Encryption', fr: 'Chiffrement de bout en bout' },
  'privacy.encryptionDesc': { en: 'All sensitive information is encrypted during transmission and storage', fr: 'Toutes les informations sensibles sont cryptées pendant la transmission et le stockage' },
  'privacy.transparency': { en: 'Full Transparency', fr: 'Transparence totale' },
  'privacy.transparencyDesc': { en: 'Clear communication about how your data is collected, used, and stored', fr: 'Communication claire sur la façon dont vos données sont collectées, utilisées et stockées' },
  'privacy.compliance': { en: 'GDPR Compliant', fr: 'Conforme au RGPD' },
  'privacy.complianceDesc': { en: 'Fully compliant with international data protection regulations', fr: 'Entièrement conforme aux réglementations internationales de protection des données' },
  'privacy.readMore': { en: 'Read Full Privacy Policy', fr: 'Lire la politique complète' },
  
  // Contact
  'contact.title': { en: 'Contact Us', fr: 'Contactez-nous' },
  'contact.subtitle': { en: 'Get in touch with our team. We\'re here to help you with any questions or concerns.', fr: 'Contactez notre équipe. Nous sommes là pour vous aider avec toutes vos questions ou préoccupations.' },
  'contact.email': { en: 'Email', fr: 'Email' },
  'contact.phone': { en: 'Phone', fr: 'Téléphone' },
  'contact.location': { en: 'Location', fr: 'Localisation' },
  'contact.hours': { en: 'Business Hours', fr: 'Heures d\'ouverture' },
  'contact.hoursValue': { en: 'Monday - Friday: 9:00 AM - 6:00 PM', fr: 'Lundi - Vendredi : 9h00 - 18h00' },
  'contact.getStarted': { en: 'Ready to Get Started?', fr: 'Prêt à commencer ?' },
  'contact.getStartedDesc': { en: 'Contact us today to learn more about how our queue management system can benefit your business.', fr: 'Contactez-nous dès aujourd\'hui pour en savoir plus sur la façon dont notre système de gestion des files d\'attente peut bénéficier à votre entreprise.' },
  'contact.sendMessage': { en: 'Send Us a Message', fr: 'Envoyez-nous un message' },
  
  // Features
  'features.title': { en: 'Everything You Need to Manage Queues Efficiently', fr: 'Tout ce dont vous avez besoin pour gérer efficacement les files d\'attente' },
  'features.subtitle': { en: 'Powerful features designed to streamline your operations and delight your customers', fr: 'Des fonctionnalités puissantes conçues pour rationaliser vos opérations et ravir vos clients' },
  
  // Testimonials
  'testimonials.title': { en: 'Loved by Businesses Everywhere', fr: 'Adoré par les entreprises partout' },
  'testimonials.subtitle': { en: 'See how Toorrii is transforming appointment management across industries', fr: 'Voyez comment Toorrii transforme la gestion des rendez-vous dans tous les secteurs' },
  
  // Integrations
  'integrations.title': { en: 'Seamless Integrations', fr: 'Intégrations transparentes' },
  'integrations.subtitle': { en: 'Connect with the tools you already use. Toorrii integrates with popular platforms to streamline your workflow.', fr: 'Connectez-vous aux outils que vous utilisez déjà. Toorrii s\'intègre aux plateformes populaires pour rationaliser votre flux de travail.' },
  
  // CTA
  'cta.title': { en: 'Ready to Transform Your Customer Experience?', fr: 'Prêt à transformer votre expérience client ?' },
  'cta.subtitle': { en: 'Start your free trial today and discover how Toorrii can revolutionize your appointment scheduling and queue management.', fr: 'Commencez votre essai gratuit aujourd\'hui et découvrez comment Toorrii peut révolutionner votre planification de rendez-vous et la gestion des files d\'attente.' },
  'cta.button': { en: 'Start Free Trial', fr: 'Commencer l\'essai gratuit' },
  
  // Footer
  'footer.description': { en: 'Revolutionizing appointment scheduling and queue management for businesses of all sizes.', fr: 'Révolutionner la planification de rendez-vous et la gestion des files d\'attente pour les entreprises de toutes tailles.' },
  'footer.copyright': { en: 'Made with', fr: 'Créé avec' },
  'footer.product': { en: 'Product', fr: 'Produit' },
  'footer.company': { en: 'Company', fr: 'Entreprise' },
  'footer.resources': { en: 'Resources', fr: 'Ressources' },
  'footer.legal': { en: 'Legal', fr: 'Légal' },
  'footer.features': { en: 'Features', fr: 'Fonctionnalités' },
  'footer.pricing': { en: 'Pricing', fr: 'Tarifs' },
  'footer.api': { en: 'API', fr: 'API' },
  'footer.integrations': { en: 'Integrations', fr: 'Intégrations' },
  'footer.security': { en: 'Security', fr: 'Sécurité' },
  'footer.about': { en: 'About', fr: 'À propos' },
  'footer.blog': { en: 'Blog', fr: 'Blog' },
  'footer.careers': { en: 'Careers', fr: 'Carrières' },
  'footer.press': { en: 'Press', fr: 'Presse' },
  'footer.partners': { en: 'Partners', fr: 'Partenaires' },
  'footer.documentation': { en: 'Documentation', fr: 'Documentation' },
  'footer.helpCenter': { en: 'Help Center', fr: 'Centre d\'aide' },
  'footer.community': { en: 'Community', fr: 'Communauté' },
  'footer.webinars': { en: 'Webinars', fr: 'Webinaires' },
  'footer.status': { en: 'Status', fr: 'Statut' },
  'footer.privacy': { en: 'Privacy', fr: 'Confidentialité' },
  'footer.terms': { en: 'Terms', fr: 'Conditions' },
  'footer.cookies': { en: 'Cookies', fr: 'Cookies' },
  'footer.gdpr': { en: 'GDPR', fr: 'RGPD' },
  'footer.compliance': { en: 'Compliance', fr: 'Conformité' },
  'footer.privacyPolicy': { en: 'Privacy Policy', fr: 'Politique de confidentialité' },
  'footer.termsOfService': { en: 'Terms of Service', fr: 'Conditions d\'utilisation' },
  'footer.cookieSettings': { en: 'Cookie Settings', fr: 'Paramètres des cookies' },
};

interface TranslationContextType {
  language: 'en' | 'fr';
  setLanguage: (lang: 'en' | 'fr') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'fr'>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};