import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    paddingHorizontal: theme.spaces.md,
    paddingTop: theme.spaces.xsm,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    gap: theme.spaces.xsm,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: theme.spaces.md,
    marginBottom: theme.spaces.xlg,
  },
  registerNowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spaces.md,
  },
  registerNowText: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.md,
    lineHeight: theme.lineHeight.md,
    color: theme.palette.typography.secondary,
  },
  guestContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: theme.spaces.lg,
  },
}));

export default stylesheet;
