import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { defaultNamespace, Locale } from './constants';
import resources from './resources';

i18next.use(initReactI18next).init({
  debug: true,
  compatibilityJSON: 'v3',
  ns: [defaultNamespace],
  defaultNS: defaultNamespace,
  fallbackLng: Locale.English,
  resources,
});
