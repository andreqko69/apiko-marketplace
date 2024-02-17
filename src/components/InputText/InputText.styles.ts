import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  input: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
    borderWidth: theme.borderWidth.sm,
    borderColor: theme.palette.input.borderColor.primary,
    borderRadius: theme.borderRadius.sm,
    width: '100%',
    padding: theme.spaces.md,
  },
}));

export default stylesheet;
