import capitalize from '@utils/capitalize';

type ValidationParams = {
  fieldName: string;
  value: string;
  isRequired?: boolean;
  skipEmptyString?: boolean;
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
  }: ValidationParams & { minLength: number }) => {
    const trimmedValue = value.trim();
    const trimmedValueLength = trimmedValue.length;
    // skip empty values and validate if values are not empty
    const isValid =
      trimmedValueLength === 0 && !isRequired
        ? true
        : trimmedValueLength >= minLength;

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : `${capitalize(fieldName)} must be at least ${
            this.nameMinLength
          } characters long`,
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
  }: ValidationParams & { maxLength: number }) => {
    const isValid = value.trim().length <= maxLength;

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : `${capitalize(fieldName)} must be at most ${
            this.nameMaxLength
          } characters long`,
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
  }: ValidationParams) => {
    // prevent running regex on empty strings if not required
    const isValid =
      value.length === 0 && !isRequired ? true : this.nameRegex.test(value);

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : `${capitalize(
            fieldName
          )} shouldn't contain numbers or special characters`,
    };
  };

  /**
   * Validates an email against a regular expression
   */
  private emailRegexValidator = ({ fieldName, value }: ValidationParams) => {
    const isValid = this.emailRegex.test(value);

    return {
      isValid,
      errorMessage: isValid
        ? undefined
        : `Please, enter correct ${fieldName.toLowerCase()}`,
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
      errorMessage: isValid ? undefined : 'This field is mandatory',
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
   * Validates a provided value against a set of validators
   */
  private runValidationFlow({
    fieldName,
    value,
    validators,
  }: {
    fieldName: string;
    value: string;
    validators: Array<
      ({ fieldName, value }: ValidationParams) => ValidationResult
    >;
  }) {
    for (const validator of validators) {
      const { isValid, errorMessage } = validator({ fieldName, value });
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
