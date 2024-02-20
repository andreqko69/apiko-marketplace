import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.lg,
    lineHeight: theme.lineHeight.xlg,
    color: theme.palette.typography.primary,
  },
}));

export default stylesheet;
