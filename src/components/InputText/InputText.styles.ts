import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    width: '100%',
    height: 56,
    borderWidth: theme.borderWidth.sm,
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: theme.spaces.md,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spaces.sm,
    variants: {
      hasError: {
        true: {
          borderColor: theme.palette.input.borderColor.error,
        },
        false: {
          borderColor: theme.palette.input.borderColor.primary,
        },
      },
      isActive: {
        true: {
          borderColor: theme.palette.input.borderColor.primaryActive,
        },
        false: {
          borderColor: theme.palette.input.borderColor.primary,
        },
      },
    },
  },
  input: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.fontSize.md,
    textAlign: 'left',
    flex: 1,
    variants: {
      hasError: {
        true: {
          color: theme.palette.input.color.error,
        },
        false: {
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
    paddingTop: theme.spaces.xxxsm,
  },
}));

export default stylesheet;
