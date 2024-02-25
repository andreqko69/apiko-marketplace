import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  button: {
    height: 24,
  },
  text: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    color: theme.palette.button.typography.secondary,
    textAlign: 'center',
  },
  loader: {
    color: theme.palette.button.loaderColor.secondary,
  },
}));

export default stylesheet;
