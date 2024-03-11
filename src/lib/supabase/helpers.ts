import i18next from 'i18next';

/**
 * We want to ensure that the error messages returned from Supabase are translated,
 * so the purpose of this function is to translate error messages from Supabase to the corresponding translation key
 */
export const getTranslatedSupabaseErrorMessage = (errorMessage: string) => {
  switch (errorMessage) {
    case 'User already registered':
      return i18next.t('errorMessages.userAlreadyRegistered');
    case 'Invalid login credentials':
      return i18next.t('errorMessages.invalidLoginCredentials');
    default:
      return errorMessage;
  }
};
