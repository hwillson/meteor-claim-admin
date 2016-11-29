import { Meteor } from 'meteor/meteor';
import pages from '../../api/pages/collection.js';
import languageLookup from '../../utility/lookups/language_lookup.js';
import pageStatusLookup from '../../utility/lookups/page_status_lookup.js';

function addPage(page) {
  if (pages.find(page).count() === 0) {
    const newPage = page;
    newPage.status = pageStatusLookup.published.value;
    pages.insert(newPage);
  }
}

if (Meteor.settings.private.createSeedData) {
  addPage({
    title: 'Home',
    content: 'Home content!',
    language: languageLookup.english.value,
    slug: 'home',
  });

  addPage({
    title: 'Accueil',
    content: 'Accueil content!',
    language: languageLookup.french.value,
    slug: 'accueil',
  });

  addPage({
    title: 'Help',
    content: 'Help content!',
    language: languageLookup.english.value,
    slug: 'help',
  });

  addPage({
    title: 'Aide',
    content: 'Aide content!',
    language: languageLookup.french.value,
    slug: 'aide',
  });

  addPage({
    title: 'Contact Us',
    content: 'Contact Us content!',
    language: languageLookup.english.value,
    slug: 'contact-us',
  });

  addPage({
    title: 'Nous joindre',
    content: 'Nous joindre content!',
    language: languageLookup.french.value,
    slug: 'nous-joindre',
  });

  addPage({
    title: 'FAQ',
    content: 'FAQ content!',
    language: languageLookup.english.value,
    slug: 'faq',
  });

  addPage({
    title: 'FAQ',
    content: 'FAQ content!',
    language: languageLookup.french.value,
    slug: 'faq',
  });

  addPage({
    title: 'Privacy',
    content: 'Privacy content!',
    language: languageLookup.english.value,
    slug: 'privacy',
  });

  addPage({
    title: 'Mention légale',
    content: 'Mention légale content!',
    language: languageLookup.french.value,
    slug: 'mention-legale',
  });

  addPage({
    title: 'Sidebar',
    content: 'Sidebar content!',
    language: languageLookup.english.value,
    slug: 'sidebar',
  });

  addPage({
    title: 'Sidebar',
    content: 'Sidebar content!',
    language: languageLookup.french.value,
    slug: 'sidebar',
  });
}
