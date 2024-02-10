import { createStyleSheet } from 'react-native-unistyles';

const fontStyleSheet = createStyleSheet((theme) => ({
  textXxsmRegular: {
    fontSize: theme.fontSize.xxsm,
    lineHeight: theme.lineHeight.xxsm,
    fontFamily: theme.fontFamily.regular,
  },
  textXxsmBold: {
    fontSize: theme.fontSize.xxsm,
    lineHeight: theme.lineHeight.xxsm,
    fontFamily: theme.fontFamily.bold,
  },
  textXxsmExtrabold: {
    fontSize: theme.fontSize.xxsm,
    lineHeight: theme.lineHeight.xxsm,
    fontFamily: theme.fontFamily.extraBold,
  },
}));

export default fontStyleSheet;
