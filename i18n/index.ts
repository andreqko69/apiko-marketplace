import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';

import { defaultNamespace, Locale } from './constants';
import resources from './resources';
import { isAndroid } from 'utils/reactNative';

i18next.use(initReactI18next).init({
  debug: true,
  ns: [defaultNamespace],
  defaultNS: defaultNamespace,
  fallbackLng: isAndroid ? Locale.Ukrainian : Locale.English,
  resources,
});
