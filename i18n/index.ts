import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { Locale } from './constants';
import resources from './resources';

i18next.use(initReactI18next).init({
  debug: true,
  compatibilityJSON: 'v3',
  fallbackLng: Locale.English,
  resources,
});

export default i18next;
