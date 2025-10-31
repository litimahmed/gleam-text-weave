import React, { createContext, useContext, useState } from 'react';

interface Translations {
  [key: string]: {
    en: string;
    fr: string;
    ar: string;
  };
}

const translations: Translations = {
  // Header
  'nav.partnerships': { en: 'Partnerships', fr: 'Partenariats', ar: 'الشراكات' },
  'nav.aboutUs': { en: 'About Us', fr: 'À propos', ar: 'من نحن' },
  'nav.privacy': { en: 'Privacy & Policy', fr: 'Confidentialité', ar: 'الخصوصية' },
  'nav.contact': { en: 'Contact Us', fr: 'Contact', ar: 'اتصل بنا' },
  'nav.clientPortal': { en: 'Client Portal', fr: 'Espace Client', ar: 'بوابة العميل' },
  'nav.signin': { en: 'Professional Access', fr: 'Accès Professionnel', ar: 'دخول المحترفين' },
  
  // Hero
  'hero.title': { en: 'Smart Queue Management', fr: 'Gestion intelligente des files', ar: 'إدارة ذكية للطوابير' },
  'hero.subtitle': { en: 'Transform your customer experience with intelligent appointment scheduling, real-time queue management, and seamless digital workflows.', fr: 'Transformez l\'expérience client avec la planification intelligente de rendez-vous, la gestion en temps réel des files d\'attente et des flux numériques fluides.', ar: 'قم بتحويل تجربة عملائك من خلال جدولة المواعيد الذكية وإدارة الطوابير في الوقت الفعلي وسير العمل الرقمي السلس.' },
  'hero.cta': { en: 'Get Started Free', fr: 'Commencer gratuitement', ar: 'ابدأ مجاناً' },
  'hero.trusted': { en: 'Trusted by 25,000+ businesses worldwide', fr: 'Plus de 25 000 entreprises nous font confiance', ar: 'موثوق به من قبل أكثر من 25,000 شركة عالمياً' },
  'hero.stat1': { en: 'Active Users', fr: 'Utilisateurs actifs', ar: 'مستخدم نشط' },
  'hero.stat2': { en: 'Daily Appointments', fr: 'Rendez-vous quotidiens', ar: 'موعد يومي' },
  'hero.stat3': { en: 'Average Time Saved', fr: 'Temps économisé en moyenne', ar: 'وقت تم توفيره في المتوسط' },
  
  // Partnerships
  'partnerships.title': { en: 'Our Trusted Partnerships', fr: 'Nos partenariats de confiance', ar: 'شراكاتنا الموثوقة' },
  'partnerships.subtitle': { en: 'We collaborate with leading organizations to deliver exceptional service', fr: 'Nous collaborons avec des organisations de premier plan pour offrir un service exceptionnel', ar: 'نتعاون مع المنظمات الرائدة لتقديم خدمة استثنائية' },
  
  // About Us
  'about.tagline': { en: 'WHO WE ARE', fr: 'QUI NOUS SOMMES', ar: 'من نحن' },
  'about.title': { en: 'About Toorrii', fr: 'À propos de Toorrii', ar: 'عن توريي' },
  'about.subtitle': { en: 'We are dedicated to revolutionizing how businesses manage appointments and queues', fr: 'Nous nous consacrons à révolutionner la façon dont les entreprises gèrent les rendez-vous et les files d\'attente', ar: 'نحن ملتزمون بإحداث ثورة في كيفية إدارة الشركات للمواعيد والطوابير' },
  'about.mission': { en: 'Our Mission', fr: 'Notre Mission', ar: 'مهمتنا' },
  'about.missionDesc': { en: 'Transform how businesses interact with customers through intelligent queue management', fr: 'Transformer la façon dont les entreprises interagissent avec les clients grâce à une gestion intelligente des files', ar: 'تحويل كيفية تفاعل الشركات مع العملاء من خلال الإدارة الذكية للطوابير' },
  'about.innovation': { en: 'Innovation First', fr: 'Innovation d\'abord', ar: 'الابتكار أولاً' },
  'about.innovationDesc': { en: 'Cutting-edge technology that adapts to your business needs and scales with growth', fr: 'Technologie de pointe qui s\'adapte aux besoins de votre entreprise et évolue avec la croissance', ar: 'تكنولوجيا متطورة تتكيف مع احتياجات عملك وتنمو مع نموك' },
  'about.customer': { en: 'Customer Focused', fr: 'Centré sur le client', ar: 'التركيز على العملاء' },
  'about.customerDesc': { en: 'Every feature designed to enhance user experience and satisfaction', fr: 'Chaque fonctionnalité conçue pour améliorer l\'expérience et la satisfaction des utilisateurs', ar: 'كل ميزة مصممة لتحسين تجربة المستخدم ورضاه' },
  'about.excellence': { en: 'Excellence', fr: 'Excellence', ar: 'التميز' },
  'about.excellenceDesc': { en: 'Committed to delivering the highest quality service and support', fr: 'Engagés à fournir un service et un support de la plus haute qualité', ar: 'ملتزمون بتقديم خدمة ودعم بأعلى جودة' },
  'about.readMore': { en: 'Learn More About Us', fr: 'En savoir plus', ar: 'اعرف المزيد عنا' },
  
  // Privacy
  'privacy.title': { en: 'Privacy & Security', fr: 'Confidentialité et sécurité', ar: 'الخصوصية والأمان' },
  'privacy.subtitle': { en: 'Your privacy and data security are our top priorities', fr: 'Votre confidentialité et la sécurité de vos données sont nos priorités absolues', ar: 'خصوصيتك وأمان بياناتك هما أولوياتنا القصوى' },
  'privacy.description': { en: 'We are committed to protecting your personal information and ensuring transparency in how we collect, use, and safeguard your data. Our comprehensive privacy policy outlines our practices and your rights regarding your information.', fr: 'Nous nous engageons à protéger vos informations personnelles et à garantir la transparence dans la façon dont nous collectons, utilisons et protégeons vos données. Notre politique de confidentialité complète décrit nos pratiques et vos droits concernant vos informations.', ar: 'نحن ملتزمون بحماية معلوماتك الشخصية وضمان الشفافية في كيفية جمعنا واستخدامنا وحماية بياناتك. تحدد سياسة الخصوصية الشاملة لدينا ممارساتنا وحقوقك فيما يتعلق بمعلوماتك.' },
  'privacy.dataProtection': { en: 'Data Protection', fr: 'Protection des données', ar: 'حماية البيانات' },
  'privacy.dataProtectionDesc': { en: 'Your data is protected with industry-leading security measures and protocols', fr: 'Vos données sont protégées par des mesures et protocoles de sécurité de pointe', ar: 'بياناتك محمية بإجراءات وبروتوكولات أمان رائدة في الصناعة' },
  'privacy.encryption': { en: 'End-to-End Encryption', fr: 'Chiffrement de bout en bout', ar: 'التشفير من طرف إلى طرف' },
  'privacy.encryptionDesc': { en: 'All sensitive information is encrypted during transmission and storage', fr: 'Toutes les informations sensibles sont cryptées pendant la transmission et le stockage', ar: 'يتم تشفير جميع المعلومات الحساسة أثناء النقل والتخزين' },
  'privacy.transparency': { en: 'Full Transparency', fr: 'Transparence totale', ar: 'شفافية كاملة' },
  'privacy.transparencyDesc': { en: 'Clear communication about how your data is collected, used, and stored', fr: 'Communication claire sur la façon dont vos données sont collectées, utilisées et stockées', ar: 'تواصل واضح حول كيفية جمع بياناتك واستخدامها وتخزينها' },
  'privacy.compliance': { en: 'GDPR Compliant', fr: 'Conforme au RGPD', ar: 'متوافق مع اللائحة العامة لحماية البيانات' },
  'privacy.complianceDesc': { en: 'Fully compliant with international data protection regulations', fr: 'Entièrement conforme aux réglementations internationales de protection des données', ar: 'متوافق تماماً مع لوائح حماية البيانات الدولية' },
  'privacy.readMore': { en: 'Read Full Privacy Policy', fr: 'Lire la politique complète', ar: 'اقرأ سياسة الخصوصية الكاملة' },
  
  // Contact
  'contact.title': { en: 'Contact Us', fr: 'Contactez-nous', ar: 'اتصل بنا' },
  'contact.subtitle': { en: 'Get in touch with our team. We\'re here to help you with any questions or concerns.', fr: 'Contactez notre équipe. Nous sommes là pour vous aider avec toutes vos questions ou préoccupations.', ar: 'تواصل مع فريقنا. نحن هنا لمساعدتك في أي أسئلة أو مخاوف.' },
  'contact.email': { en: 'Email', fr: 'Email', ar: 'البريد الإلكتروني' },
  'contact.phone': { en: 'Phone', fr: 'Téléphone', ar: 'الهاتف' },
  'contact.location': { en: 'Location', fr: 'Localisation', ar: 'الموقع' },
  'contact.hours': { en: 'Business Hours', fr: 'Heures d\'ouverture', ar: 'ساعات العمل' },
  'contact.hoursValue': { en: 'Monday - Friday: 9:00 AM - 6:00 PM', fr: 'Lundi - Vendredi : 9h00 - 18h00', ar: 'الإثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً' },
  'contact.getStarted': { en: 'Ready to Get Started?', fr: 'Prêt à commencer ?', ar: 'هل أنت مستعد للبدء؟' },
  'contact.getStartedDesc': { en: 'Contact us today to learn more about how our queue management system can benefit your business.', fr: 'Contactez-nous dès aujourd\'hui pour en savoir plus sur la façon dont notre système de gestion des files d\'attente peut bénéficier à votre entreprise.', ar: 'اتصل بنا اليوم لمعرفة المزيد حول كيف يمكن لنظام إدارة الطوابير لدينا أن يفيد عملك.' },
  'contact.sendMessage': { en: 'Send Us a Message', fr: 'Envoyez-nous un message', ar: 'أرسل لنا رسالة' },
  
  // Features
  'features.title': { en: 'Everything You Need to Manage Queues Efficiently', fr: 'Tout ce dont vous avez besoin pour gérer efficacement les files d\'attente', ar: 'كل ما تحتاجه لإدارة الطوابير بكفاءة' },
  'features.subtitle': { en: 'Powerful features designed to streamline your operations and delight your customers', fr: 'Des fonctionnalités puissantes conçues pour rationaliser vos opérations et ravir vos clients', ar: 'ميزات قوية مصممة لتبسيط عملياتك وإسعاد عملائك' },
  
  // Testimonials
  'testimonials.title': { en: 'Loved by Businesses Everywhere', fr: 'Adoré par les entreprises partout', ar: 'محبوب من قبل الشركات في كل مكان' },
  'testimonials.subtitle': { en: 'See how Toorrii is transforming appointment management across industries', fr: 'Voyez comment Toorrii transforme la gestion des rendez-vous dans tous les secteurs', ar: 'شاهد كيف تحول توريي إدارة المواعيد عبر الصناعات' },
  
  // Integrations
  'integrations.title': { en: 'Seamless Integrations', fr: 'Intégrations transparentes', ar: 'تكاملات سلسة' },
  'integrations.subtitle': { en: 'Connect with the tools you already use. Toorrii integrates with popular platforms to streamline your workflow.', fr: 'Connectez-vous aux outils que vous utilisez déjà. Toorrii s\'intègre aux plateformes populaires pour rationaliser votre flux de travail.', ar: 'اتصل بالأدوات التي تستخدمها بالفعل. يتكامل توريي مع المنصات الشائعة لتبسيط سير عملك.' },
  
  // CTA
  'cta.title': { en: 'Ready to Transform Your Customer Experience?', fr: 'Prêt à transformer votre expérience client ?', ar: 'هل أنت مستعد لتحويل تجربة عملائك؟' },
  'cta.subtitle': { en: 'Start your free trial today and discover how Toorrii can revolutionize your appointment scheduling and queue management.', fr: 'Commencez votre essai gratuit aujourd\'hui et découvrez comment Toorrii peut révolutionner votre planification de rendez-vous et la gestion des files d\'attente.', ar: 'ابدأ تجربتك المجانية اليوم واكتشف كيف يمكن لتوريي أن يحدث ثورة في جدولة المواعيد وإدارة الطوابير.' },
  'cta.button': { en: 'Start Free Trial', fr: 'Commencer l\'essai gratuit', ar: 'ابدأ التجربة المجانية' },
  
  // Footer
  'footer.description': { en: 'Revolutionizing appointment scheduling and queue management for businesses of all sizes.', fr: 'Révolutionner la planification de rendez-vous et la gestion des files d\'attente pour les entreprises de toutes tailles.', ar: 'إحداث ثورة في جدولة المواعيد وإدارة الطوابير للشركات من جميع الأحجام.' },
  'footer.copyright': { en: 'Made with', fr: 'Créé avec', ar: 'صُنع بـ' },
  'footer.product': { en: 'Product', fr: 'Produit', ar: 'المنتج' },
  'footer.company': { en: 'Company', fr: 'Entreprise', ar: 'الشركة' },
  'footer.resources': { en: 'Resources', fr: 'Ressources', ar: 'الموارد' },
  'footer.legal': { en: 'Legal', fr: 'Légal', ar: 'القانونية' },
  'footer.features': { en: 'Features', fr: 'Fonctionnalités', ar: 'الميزات' },
  'footer.pricing': { en: 'Pricing', fr: 'Tarifs', ar: 'الأسعار' },
  'footer.api': { en: 'API', fr: 'API', ar: 'واجهة برمجة التطبيقات' },
  'footer.integrations': { en: 'Integrations', fr: 'Intégrations', ar: 'التكاملات' },
  'footer.security': { en: 'Security', fr: 'Sécurité', ar: 'الأمان' },
  'footer.about': { en: 'About', fr: 'À propos', ar: 'عن' },
  'footer.blog': { en: 'Blog', fr: 'Blog', ar: 'المدونة' },
  'footer.careers': { en: 'Careers', fr: 'Carrières', ar: 'الوظائف' },
  'footer.press': { en: 'Press', fr: 'Presse', ar: 'الصحافة' },
  'footer.partners': { en: 'Partners', fr: 'Partenaires', ar: 'الشركاء' },
  'footer.documentation': { en: 'Documentation', fr: 'Documentation', ar: 'التوثيق' },
  'footer.helpCenter': { en: 'Help Center', fr: 'Centre d\'aide', ar: 'مركز المساعدة' },
  'footer.community': { en: 'Community', fr: 'Communauté', ar: 'المجتمع' },
  'footer.webinars': { en: 'Webinars', fr: 'Webinaires', ar: 'الندوات عبر الإنترنت' },
  'footer.status': { en: 'Status', fr: 'Statut', ar: 'الحالة' },
  'footer.privacy': { en: 'Privacy', fr: 'Confidentialité', ar: 'الخصوصية' },
  'footer.terms': { en: 'Terms', fr: 'Conditions', ar: 'الشروط' },
  'footer.cookies': { en: 'Cookies', fr: 'Cookies', ar: 'ملفات تعريف الارتباط' },
  'footer.gdpr': { en: 'GDPR', fr: 'RGPD', ar: 'اللائحة العامة لحماية البيانات' },
  'footer.compliance': { en: 'Compliance', fr: 'Conformité', ar: 'الامتثال' },
  'footer.privacyPolicy': { en: 'Privacy Policy', fr: 'Politique de confidentialité', ar: 'سياسة الخصوصية' },
  'footer.termsOfService': { en: 'Terms of Service', fr: 'Conditions d\'utilisation', ar: 'شروط الخدمة' },
  'footer.cookieSettings': { en: 'Cookie Settings', fr: 'Paramètres des cookies', ar: 'إعدادات ملفات تعريف الارتباط' },
};

interface TranslationContextType {
  language: 'en' | 'fr' | 'ar';
  setLanguage: (lang: 'en' | 'fr' | 'ar') => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'fr' | 'ar'>('fr');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === 'ar';

  React.useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t, isRTL }}>
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
