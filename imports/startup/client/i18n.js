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

  claim: {

    wizard: {
      back: 'Back',
      next: 'Next',
      confirm: 'Submit',
      progress: {
        intro: 'Welcome',
        contactInfo: 'Contact Information',
        purchases: 'Purchase Information',
        review: 'Review',
        finished: 'Finished',
        step: 'Step',
      },
    },

    intro: {
      title: 'Welcome',
      welcome: '<p>Welcome to our claim system!</p>',
      continue: 'To continue, click the Next button below.',
    },

    contactInfo: {
      title: 'Contact Information',
      content1: 'Please provide the following contact information.',
      content2: 'The fields marked with * are mandatory fields which must be '
        + 'completed in order to submit a Claim.',
      content3: 'The email address entered will only be used to send a '
        + 'confirmation of your submission with your claim number, or '
        + 'communicate with you regarding your claim.',
      email: 'Email',
      emailRequired: 'Email is required',
      emailInvalid: 'Must be a valid email address',
      firstName: 'First Name',
      firstNameRequired: 'First Name is required',
      middleName: 'Middle Name',
      middleNameRequired: 'Middle Name is required',
      lastName: 'Last Name',
      lastNameRequired: 'Last Name is required',
      phone: 'Phone (during business hours)',
      phoneExample: '(example: 111-222-3333)',
      phoneRequired: 'Phone is required',
      phoneLength: 'Phone number must be between 10 and 12 characters',
      phoneInvalid: 'Phone number must be in the format 111-222-3333',
      mailingAddress: 'Mailing Address',
      street1: 'Street 1',
      street1Required: 'Street 1 is required',
      street2: 'Street 2',
      street2Placeholder: 'apartment, unit, suite, po box, etc.',
      city: 'City',
      cityRequired: 'City is required',
      province: 'Province',
      provinceRequired: 'Province is required',
      postalCode: 'Postal Code',
      postalCodeExample: '(example: A1A 1A1)',
      postalCodeRequired: 'Postal Code is required',
      postalCodeInvalid: 'Postal code must be in the format "A1A 1A1"',
    },

    purchases: {
      title: 'Purchases',
      provide: '',
      mandatory: 'The fields marked with <span class="asterisk">*</span> are '
        + 'mandatory fields which must be completed in order to submit a Claim.',
      didYouPurchase: 'Did you purchase product X between '
        + 'Month day, year and Month day, year?',
      validation: {
        didPurchase: 'Please answer the above question to continue.',
      },
    },

    review: {
      title: 'Claim Submission Review',
      description: 'Please review your claim details below. Click on "Back" '
        + 'to make changes and "Submit" when you are ready to submit your claim.',
      solDec: {
        title: 'Solemn Declarations',
        declare: 'I solemnly declare that (<strong>all declarations must be '
          + 'checked to continue</strong>):',
        agree: 'You must agree to and check the above to continue.',
        declaration1: 'I declare or affirm, under penalty of law, that the '
          + 'information in this claim form is true and correct to the best '
          + 'of knowledge;',
        declaration2: 'I purchased the applicable product(s) claimed above '
          + 'before Month day, year',
        declaration3: 'I understand that my claim form may be subject to '
          + 'audit, verification and Court review.',
      },
    },

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
