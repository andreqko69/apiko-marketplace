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
        // since we are swapping type Password with type Text, we need to set secureTextEntry to false
        secureTextEntry: false,
      };
    }
  }
};
