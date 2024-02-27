import en_default from './locales/en/default.json';
import ua_default from './locales/ua/default.json';
import { defaultNamespace, Locale } from './constants';

const resources = {
  [Locale.English]: { [defaultNamespace]: en_default },
  [Locale.Ukrainian]: { [defaultNamespace]: ua_default },
} as const;

export default resources;
