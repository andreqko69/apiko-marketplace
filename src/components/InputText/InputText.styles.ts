import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
  },
  input: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    borderWidth: theme.borderWidth.sm,
    borderRadius: theme.borderRadius.sm,
    width: '100%',
    padding: theme.spaces.md,
    alignItems: 'center',
    verticalAlign: 'middle',
    variants: {
      hasError: {
        true: {
          borderColor: theme.palette.input.borderColor.error,
          color: theme.palette.input.color.error,
        },
        false: {
          borderColor: theme.palette.input.borderColor.primary,
          color: theme.palette.input.color.primary,
        },
      },
    },
  },
  errorMessage: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.xsm,
    lineHeight: theme.lineHeight.xsm,
    color: theme.palette.typography.error,
    paddingLeft: theme.spaces.md,
    paddingTop: theme.spaces.xxsm,
  },
}));

export default stylesheet;
