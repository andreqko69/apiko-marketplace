import en from './locales/en.json';
import ua from './locales/ua.json';
import { defaultNamespace, Locale } from './constants';

const resources = {
  [Locale.English]: { [defaultNamespace]: en },
  [Locale.Ukrainian]: { [defaultNamespace]: ua },
} as const;

export default resources;
