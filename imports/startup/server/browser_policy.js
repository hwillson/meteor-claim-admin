import { BrowserPolicy } from 'meteor/browser-policy-common';

BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

const trusted = [
  'http://*.googleapis.com',
  'https://*.googleapis.com',
  'http://fonts.gstatic.com',
  'https://fonts.gstatic.com',
];

trusted.forEach((origin) => {
  BrowserPolicy.content.allowOriginForAll(origin);
});
