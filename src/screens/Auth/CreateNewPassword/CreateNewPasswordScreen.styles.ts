import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    paddingHorizontal: theme.spaces.md,
    paddingTop: theme.spaces.xsm,
  },
  inputContainer: {
    marginTop: theme.spaces.xlg,
    marginBottom: theme.spaces.md,
    gap: theme.spaces.xsm,
  },
  text: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
    color: theme.palette.typography.secondary,
    textAlign: 'center',
  },
}));

export default stylesheet;
