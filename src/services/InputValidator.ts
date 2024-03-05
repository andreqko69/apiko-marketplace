import i18next from 'i18next';
import { TranslationContext } from '../../i18n/constants';

type TranslationParams = {
  context?: TranslationContext;
};

type ValidationParams = {
  fieldName: string;
  value: string;
  isRequired?: boolean;
  skipEmptyString?: boolean;
  translationParams?: TranslationParams;
};

type ValidationResult = {
  isValid: boolean;
  errorMessage?: string;
};

class InputValidator {
  private nameMinLength = 2;
  private nameMaxLength = 40;
  private locationMinLength = 2;
  private locationMaxLength = 100;
  private passwordMinLength = 6;
  private passwordMaxLength = 100;
  // allows everything except numbers and special characters
  private nameRegex =
    /^[a-zA-Z\xC0-\uFFFF]+([ \-']{0,1}[a-zA-Z\xC0-\uFFFF]+){0,2}[.]{0,1}$/;
  // regular email regular expression
  private emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  /**
   * Validates a value against a minimum length
   */
  private minLengthValidator = ({
    fieldName,
    value,
    minLength,
    isRequired,
    translationParams,
  }: ValidationParams & { minLength: number }) => {
    const trimmedValue = value.trim();
    const trimmedValueLength = trimmedValue.length;
    // skip empty values if not required
    const isValid =
      trimmedValueLength === 0 && !isRequired
        ? true
        : trimmedValueLength >= minLength;

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : i18next.t('errorMessages.minLength', {
            fieldName,
            count: minLength,
            ...translationParams,
          }),
    };
  };

  /**
   * Returns a function that validates a value against a minimum length
   */
  private getMinLengthValidator =
    (minLength: number) => (params: ValidationParams) =>
      this.minLengthValidator({ ...params, minLength });

  /**
   * Validates a value against a maximum length
   */
  private maxLengthValidator = ({
    fieldName,
    value,
    maxLength,
    translationParams,
  }: ValidationParams & { maxLength: number }) => {
    const isValid = value.trim().length <= maxLength;

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : i18next.t('errorMessages.maxLength', {
            fieldName,
            count: maxLength,
            ...translationParams,
          }),
    };
  };

  /**
   * Returns a function that validates a value against a maximum length
   */
  private getMaxLengthValidator =
    (maxLength: number) => (params: ValidationParams) =>
      this.maxLengthValidator({ ...params, maxLength });

  /**
   * Validates a name against a regular expression
   */
  private nameRegexValidator = ({
    fieldName,
    value,
    isRequired,
    translationParams,
  }: ValidationParams) => {
    // prevent running regex on empty strings if not required
    const isValid =
      value.length === 0 && !isRequired ? true : this.nameRegex.test(value);

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : i18next.t('errorMessages.noNumericOrSpecialCharacters', {
            fieldName,
            ...translationParams,
          }),
    };
  };

  /**
   * Validates an email against a regular expression
   */
  private emailRegexValidator = ({
    fieldName,
    value,
    translationParams,
  }: ValidationParams) => {
    const isValid = this.emailRegex.test(value);

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : i18next.t('errorMessages.invalidValue', {
            fieldName: fieldName.toLowerCase(),
            ...translationParams,
          }),
    };
  };

  /**
   * Validates if a value is provided if it's required
   */
  private requiredValidator = ({ value, isRequired }: ValidationParams) => {
    // skip if not required
    const isValid = isRequired ? value.trim().length > 0 : true;

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : i18next.t('errorMessages.fieldIsMandatory'),
    };
  };

  /**
   * Validates a name
   */
  public validateName(params: ValidationParams) {
    return this.runValidationFlow({
      ...params,
      validators: [
        this.requiredValidator,
        this.getMinLengthValidator(this.nameMinLength),
        this.getMaxLengthValidator(this.nameMaxLength),
        this.nameRegexValidator,
      ],
    });
  }

  /**
   * Validates an email
   */
  public validateEmail(params: ValidationParams) {
    return this.runValidationFlow({
      ...params,
      validators: [this.requiredValidator, this.emailRegexValidator],
    });
  }

  /**
   * Validates a location
   */
  public validateLocation = (params: ValidationParams) => {
    return this.runValidationFlow({
      ...params,
      validators: [
        this.requiredValidator,
        this.getMinLengthValidator(this.locationMinLength),
        this.getMaxLengthValidator(this.locationMaxLength),
        this.nameRegexValidator,
      ],
    });
  };

  /**
   * Validates a password
   */
  public validatePassword = (params: ValidationParams) => {
    return this.runValidationFlow({
      ...params,
      validators: [
        this.requiredValidator,
        this.getMinLengthValidator(this.passwordMinLength),
        this.getMaxLengthValidator(this.passwordMaxLength),
      ],
    });
  };

  /**
   * Validates a provided value against a set of validators
   */
  private runValidationFlow({
    validators,
    ...params
  }: ValidationParams & {
    validators: Array<(p: ValidationParams) => ValidationResult>;
  }) {
    for (const validator of validators) {
      const { isValid, errorMessage } = validator(params);
      // return early if the value is invalid
      if (!isValid) {
        return {
          isValid,
          errorMessage,
        };
      }
    }

    return {
      isValid: true,
      errorMessage: undefined,
    };
  }
}

const inputValidator = new InputValidator();

export default inputValidator;
