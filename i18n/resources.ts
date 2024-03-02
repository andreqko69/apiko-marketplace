import en_default from './locales/en/default.json';
import uk_default from './locales/uk/default.json';
import { defaultNamespace, Locale } from './constants';

const resources = {
  [Locale.English]: { [defaultNamespace]: en_default },
  [Locale.Ukrainian]: { [defaultNamespace]: uk_default },
} as const;

export default resources;
