import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    lineHeight: theme.lineHeight.xlg,
    color: theme.palette.typography.primary,
    textAlign: 'center',
  },
  message: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
    color: theme.palette.typography.secondary,
    textAlign: 'center',
  },
}));

export default stylesheet;
