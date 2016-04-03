import { i18n } from 'meteor/anti:i18n';

i18n.setDefaultLanguage('en');
i18n.setLanguage('en');

i18n.map('en', {

  general: {
    yes: 'Yes',
    no: 'No',
    upload: 'Upload',
    cancel: 'Cancel',
  },

  header: {
    titlePrimary: 'Some Company',
    titleSecondary: 'Claim System',
  },

  footer: {
    sitemap: 'Sitemap',
    help: 'Need Help?',
    email: 'E-mail:',
    phone: 'Phone:',
    address: 'Address',
    company: 'Some Company Inc.',
    careOf: 'Attention: Claim System',
    street1: '123 Right St.',
    city: 'New York',
    state: 'NY',
    zip: '10003',
    notice: 'This is a footer notice!',
    copyright: 'Some Company © 2016',
    contactEmail: 'info@somecompany.fake',
    phoneNumber: '1-888-555-1212',
  },

  nav: {
    home: 'Home',
    homeLink: '/site/home',
    claim: 'Claim',
    help: 'Need Help?',
    helpLink: '/site/help',
    contactUs: 'Contact Us',
    contactUsLink: '/site/contact-us',
    documents: 'Documents',
    documentsLink: '/site/documents',
    faq: 'FAQ',
    faqLink: '/site/faq',
    privacy: 'Privacy',
    privacyLink: '/site/privacy',
  },

  sidebar: {
    title: 'Important Updates',
  },

});

i18n.map('fr', {

  general: {
    yes: 'Oui',
    no: 'Non',
    upload: 'Télécharger',
    cancel: 'Annuler',
  },

  header: {
    titlePrimary: 'Some Company',
    titleSecondary: 'Claim System',
  },

  footer: {
    sitemap: 'Plan du site',
    help: 'Besoin d’aide?',
    email: 'Courriel :',
    phone: 'Téléphone :',
    address: 'Adresse',
    careOf: 'Administrateur des réclamations',
    street1: '123 Right St.',
    city: 'New York',
    state: 'NY',
    zip: '10003',
    notice: 'This is a footer notice!',
    copyright: 'Some Company © 2016',
    contactEmail: 'info@somecompany.fake',
    phoneNumber: '1-888-555-1212',
  },

  nav: {
    home: 'Accueil',
    homeLink: '/site/accueil',
    claim: 'Réclamation',
    help: 'Besoin d’aide?',
    helpLink: '/site/aide',
    contactUs: 'Nous joindre',
    contactUsLink: '/site/nous-joindre',
    documents: 'Documents',
    documentsLink: '/site/documents',
    faq: 'FAQ',
    faqLink: '/site/faq',
    privacy: 'Mention légale',
    privacyLink: '/site/mention-legale',
  },

  sidebar: {
    title: 'Attention',
  },

});
