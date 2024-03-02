import resources from '../i18n/resources';
import type { defaultNamespace } from '../i18n/constants';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNamespace;
    resources: (typeof resources)['uk'] & (typeof resources)['en'];
  }
}
