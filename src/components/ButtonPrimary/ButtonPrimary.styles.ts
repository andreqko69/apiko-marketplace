import { createStyleSheet } from 'react-native-unistyles';

import {
  ButtonSize,
  ButtonVariation,
} from 'components/ButtonPrimary/constants';

const stylesheet = createStyleSheet((theme) => ({
  button: {
    borderRadius: theme.borderRadius.sm,
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
          paddingVertical: theme.spaces.md,
          paddingHorizontal: theme.spaces.sm,
          minWidth: 164,
        },
        [ButtonSize.Large]: {
          paddingVertical: theme.spaces.md,
          paddingHorizontal: theme.spaces.sm,
          width: '100%',
          minHeight: 56,
        },
      },
    },
  },
  text: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
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
