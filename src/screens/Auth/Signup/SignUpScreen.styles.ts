import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    paddingTop: theme.spaces.xsm,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: theme.spaces.md,
  },
  inputContainer: {
    gap: theme.spaces.xsm,
    marginBottom: theme.spaces.xlg,
  },
  signInContainer: {
    marginTop: theme.spaces.md,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spaces.xxsm,
  },
  signInText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    color: theme.palette.typography.secondary,
  },
}));

export default stylesheet;
