import { createStyleSheet } from 'react-native-unistyles';

import {
  ButtonSize,
  ButtonVariation,
} from 'components/ButtonPrimary/constants';

const stylesheet = createStyleSheet((theme) => ({
  button: {
    borderRadius: theme.borderRadius.sm,
    alignSelf: 'center',
    variants: {
      styleVariation: {
        [ButtonVariation.Primary]: {
          backgroundColor: theme.palette.button.background.primary,
        },
        [ButtonVariation.Secondary]: {
          backgroundColor: theme.palette.button.background.secondary,
          borderWidth: theme.borderWidth.md,
          borderColor: theme.palette.button.borderColor.primary,
        },
      },
      size: {
        [ButtonSize.Small]: {
          paddingVertical: theme.spaces.md,
          paddingHorizontal: theme.spaces.sm,
          minWidth: 116,
        },
        [ButtonSize.Medium]: {
          paddingVertical: theme.spaces.sm,
          paddingHorizontal: theme.spaces.sm,
          minWidth: 164,
          height: 46,
        },
        [ButtonSize.Large]: {
          paddingVertical: theme.spaces.md,
          paddingHorizontal: theme.spaces.sm,
          width: '100%',
          height: 56,
        },
      },
      disabled: {
        true: {
          backgroundColor: theme.palette.button.background.primaryDisabled,
        },
      },
    },
  },
  text: {
    fontFamily: theme.fontFamily.bold,
    textAlign: 'center',
    variants: {
      styleVariation: {
        [ButtonVariation.Primary]: {
          color: theme.palette.button.typography.primary,
        },
        [ButtonVariation.Secondary]: {
          color: theme.palette.button.typography.secondary,
        },
      },
      size: {
        [ButtonSize.Medium]: {
          fontSize: theme.fontSize.md,
        },
        [ButtonSize.Large]: {
          fontSize: theme.fontSize.md,
        },
      },
    },
  },
  loader: {
    variants: {
      styleVariation: {
        [ButtonVariation.Primary]: {
          color: theme.palette.button.loaderColor.primary,
        },
        [ButtonVariation.Secondary]: {
          color: theme.palette.button.loaderColor.secondary,
        },
      },
    },
  },
}));

export default stylesheet;
