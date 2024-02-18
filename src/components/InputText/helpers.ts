import { InputType } from './constants';
import { TextInputProps } from 'react-native';

export const getInputPropsByType = (mode?: InputType): TextInputProps => {
  switch (mode) {
    case InputType.Email:
      return {
        autoCapitalize: 'none',
        autoComplete: 'email',
        inputMode: 'email',
      };
    case InputType.Password:
      return {
        autoCapitalize: 'none',
        autoComplete: 'off',
        secureTextEntry: true,
      };
    default:
      return {};
  }
};
