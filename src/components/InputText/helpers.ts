import { TextInputProps } from 'react-native';

import { InputType } from './constants';

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
    default: {
      return {
        secureTextEntry: false,
      };
    }
  }
};
