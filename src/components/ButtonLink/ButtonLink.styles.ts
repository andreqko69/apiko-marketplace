import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  button: {
    height: 24,
  },
  text: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    textAlign: 'center',
    justifyContent: 'center',
    color: theme.palette.button.typography.secondary,
  },
  loader: {
    color: theme.palette.button.loaderColor.secondary,
  },
}));

export default stylesheet;
