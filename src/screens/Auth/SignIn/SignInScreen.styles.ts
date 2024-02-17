import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.palette.background.primary,
    paddingHorizontal: theme.spaces.md,
    justifyContent: 'space-between',
  },
  inputContainer: {
    gap: theme.spaces.xsm,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: theme.spaces.lg,
  },
  registerNowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spaces.md,
    gap: theme.spaces.xxsm,
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
