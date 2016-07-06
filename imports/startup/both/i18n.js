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

    finished: {
      title: 'Claim Submitted',
      claimId: 'Claim ID:',
      date: 'Claim Date:',
      description1: 'Thank you, ',
      description2: ', for submitting a claim.',
      description3: 'You have successfully completed the claim submission process.',
      description4: 'A confirmation email was just sent to the email address '
        + 'you provided in the early steps of this online filing process. '
        + 'Attached to this email confirmation message is a summary of your '
        + 'claim submission, which you should keep for your records.',
    },

  },

  email: {
    submitted: {
      title: 'Claim Submitted',
      claimDetails: 'Claim Details',
      claimId: 'Claim ID:',
      claimDate: 'Claim Date:',
      pdfReceipt: 'claim_receipt.pdf',
      thankYou: 'Thank you {$1} for submitting a claim.',
      step1: '1. Claim Submitted',
      confirm: 'This email is to confirm that you have successfully '
        + 'completed the claim submission process. A PDF summary of your '
        + 'claim submission is attached to this email.',
      step2: '2. Claim Not Yet Approved',
      notYetApproved: 'Your claim is not yet approved.',
      step3: '3. Next Steps',
      review: 'The Claims administrator will next review your claim '
        + 'submission to determine if your claim can be approved.',
      patience: 'Thank you for your patience while we are busy processing your claim.',
      claimAdmin: 'Claims Administrator',
    },
    decision: {
      rejectedDuplicate: {
        subject: 'Duplicate Claim Rejected',
        intro: '<strong>Claim ID: {$1}</strong><br/>'
          + 'Claim Date: {$2}<br/>'
          + '<p>Hello {$3} {$4},</p>'
          + '<p>Further to our last email confirming that you successfully '
          + 'filed a claim under the Sylvania Automotive Lighting Settlement, '
          + 'we must advise that after a careful review of your claim '
          + 'submission ',
        rejectedDuplicate: '<strong>your claim must be rejected as it is a '
          + 'duplicate claim.</strong></p>'
          + '<p>Our records show that you have submitted more than one claim '
          + 'under the Sylvania Automotive Lighting Settlement and as each '
          + 'Class Member is entitled to submit only one (1) Claim Form, this '
          + 'above noted claim must be rejected.</p>'
          + '<p>You may seek reconsideration no later than thirty (30) days '
          + 'from the date of this email, by contacting the Claims '
          + 'Administrator toll free at 1-855-745-7374 Monday to Friday from '
          + '9am to 5pm EST.</p>',
        outro: '<p>Regards,<br/>'
          + 'Claims Administrator - Sylvania Automotive Lighting Settlement<br/>'
          + '1-855-745-7374 <br/>'
          + 'www.autolightclaims.ca',
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

  claim: {

    wizard: {
      back: 'Précédent',
      next: 'Prochain',
      confirm: 'Soumettre',
      progress: {
        intro: 'Bienvenue',
        contactInfo: 'Coordonnées',
        purchases: 'Achats',
        review: 'Réviser',
        finished: 'Fini',
        step: 'Étape',
      },
    },

    intro: {
      title: 'Bienvenue',
      welcome: '<p>Bienvenue!</p>',
      continue: 'Pour continuer cliquez le bouton Prochain ci-dessous.',
    },

    contactInfo: {
      title: 'Coordonnées',
      content1: 'Veuillez s’il vous plait fournir vos coordonnées.',
      content2: 'Les champs marqués d\'une étoile (*) sont obligatoires et '
        + 'doivent être complétés afin de soumettre une réclamation.',
      content3: 'L\'adresse courriel fournie sera uniquement utilisée pour '
        + 'vous envoyer un courriel de confirmation de votre réclamation, ou '
        + 'pour communiquer avec vous en ce qui concerne votre réclamation.',
      email: 'Courriel',
      emailRequired: 'Le courriel est obligatoire',
      emailInvalid: 'L\'adresse courriel doit être une adresse valide',
      firstName: 'Prénom',
      firstNameRequired: 'Le prénom est obligatoire',
      middleName: 'Deuxième prénom',
      lastName: 'Nom de famille',
      lastNameRequired: 'Le nom de famille est obligatoire',
      phone: 'Téléphone (pendant les heures ouvrables)',
      phoneExample: '(exemple 111-222-3333)',
      phoneRequired: 'Le numéro de téléphone et code régionale est obligatoire',
      phoneLength: 'Numéro de téléphone doit être comprise entre 10 et 12 caractères',
      phoneInvalid: 'Numéro de téléphone doit être au format 111-222-3333',
      mailingAddress: 'Adresse postale',
      street1: 'Adresse 1',
      street1Required: 'L\'adresse postale est obligatoire',
      street2: 'Adresse 2',
      street2Placeholder: 'appartement, unité, suite, boîte postale, etc.',
      city: 'Ville',
      cityRequired: 'La ville est obligatoire',
      province: 'Province',
      provinceRequired: 'La province est obligatoire',
      postalCode: 'Code postal',
      postalCodeExample: '(exemple A1A 1A1)',
      postalCodeRequired: 'Le code postal est obligatoire',
      postalCodeInvalid: 'Le code postal doit suivre le format A1A 1A1',
    },

    purchases: {
      title: 'Achats',
      provide: '',
      mandatory: 'Les champs marqués d’une étoile '
        + '<span class="asterisk">*</span> sont obligatoires et doivent '
        + 'être complétés afin de soumettre une réclamation.',
      didYouPurchase: 'Avez-vous acheté le produit X entre le jour du mois, '
        + 'année et mois jour, année?',
      validation: {
        didPurchase: 'Répondre à la question ci-dessus pour continuer.',
      },
    },

    review: {
      title: 'Détails de votre réclamation',
      description: 'Veuillez réviser les détails de votre réclamation '
        + 'ci-dessous. Si vous voulez changer les détails fournis, '
        + 'cliquez sur le bouton Précédent. Lorsque vous êtes prêt à '
        + 'soumettre votre réclamation, cliquez sur le bouton Soumettre.',
      solDec: {
        title: 'Déclarations solennelles',
        declare: 'Je déclare solennellement que '
          + '<strong>(toutes les déclarations doivent être cochées '
          + 'afin de continuer)</strong> :',
        agree: 'Vous devez accepter et vérifier le ci-dessus pour continuer.',
        declaration1: 'Je déclare ou j’affirme, sous peine de poursuite pour '
          + 'fausse déclaration, que les renseignements dans la présente '
          + 'réclamation sont vrais et corrects au meilleur de mes '
          + 'connaissances;',
        declaration2: 'J’ai acheté les produits applicables faisant '
          + 'l\'objet de la réclamation ci‑dessus avant le année mois, jour;',
        declaration3: 'Je comprends que mon formulaire de réclamation peut '
          + 'faire l\'objet d\'une vérification et d\'un examen par le '
          + 'tribunal.',
      },
    },

    finished: {
      title: 'Votre réclamation est soumise',
      claimId: 'Numéro de réclamation :',
      date: 'Date de la réclamation :',
      description1: 'Nous vous remercions,',
      description2: ', pour soumettre une réclamation.',
      description3: 'Vous avez dûment complété le processus de réclamation.',
      description4: 'Un courriel de confirmation a été envoyé à l\'adresse '
        + 'fournie lors des premières étapes du processus de réclamation en '
        + 'ligne. Un sommaire de votre réclamation est joint à ce courriel '
        + 'et nous vous recommandons de le sauvegarder dans vos dossiers.',
    },

  },

  email: {
    submitted: {
      title: 'Réclamation soumise',
      claimDetails: 'Les détails de réclamation',
      claimId: 'Numéro de réclamation :',
      claimDate: 'Date de la réclamation :',
      pdfReceipt: 'reclamation.pdf',
      thankYou: 'Nous vous remercions, {$1}, d’avoir soumis une réclamation.',
      step1: '1. Réclamation soumise',
      confirm: 'Ce courriel confirme que vous avez dûment complété le '
        + 'processus de soumission.  Un sommaire de votre soumission est en '
        + 'pièce jointe.',
      step2: '2. Réclamation pas approuvée',
      notYetApproved: 'Votre réclamation n’est pas encore approuvée.',
      step3: '3. Étapes suivantes',
      review: 'L’Administrateur des réclamations révisera votre réclamation '
        + 'et toute preuve à l’appui soumise afin de déterminer si votre '
        + 'réclamation est approuvée.',
      patience: 'Nous vous remercions pour votre patience pendant que nous '
        + 'traitons votre réclamation.',
      claimAdmin: 'Administrateur des réclamations',
    },
    decision: {
      rejectedDuplicate: {
        subject: 'Réclamation rejetée duplicata',
        intro: '<strong>No de réclamation : {$1}</strong><br/>'
          + 'Date de réclamation : {$2}<br/>'
          + '<p>Bonjour {$3} {$4},</p>'
          + '<p>Suite à notre dernier courriel confirmant que vous aviez '
          + 'dûment soumis une réclamation dans le cadre du règlement '
          + 'concernant les phares automobiles de remplacement Sylvania, nous '
          + 'devons vous aviser qu’après un examen minutieux de votre '
          + 'réclamation ',
        rejectedDuplicate: '<strong>votre réclamation doit être rejetée '
          + 'puisqu’elle est un duplicata.</strong></p>'
          + '<p>Puisque nos dossiers démontrent que <strong>vous avez soumis '
          + 'plus d’une réclamation</strong> dans le cadre du règlement et que '
          + 'chaque Membre du Groupe a le droit de <strong>soumettre '
          + 'seulement un (1) Formulaire de Réclamation</strong>, la '
          + 'réclamation notée ci-haut doit être rejetée.</p>'
          + '<p>Vous pouvez demander le réexamen de cette réclamation au plus '
          + 'tard dans les trente (30) jours après la date de ce courriel, en '
          + 'communiquant avec l\'Administrateur des Réclamations sans frais '
          + 'au 1-855-745-7374 du lundi au vendredi de 9h à 17h.</p>',
        outro: '<p>Cordialement,<br/>'
          + 'Administrateur des réclamations - Règlement concernant les '
          + 'phares d’automobile Sylvania<br/>'
          + '1-855-745-7374 <br/>'
          + 'www.autolightclaims.ca',
      },
    },
  },

});
