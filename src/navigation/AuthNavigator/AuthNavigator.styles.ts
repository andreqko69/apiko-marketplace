import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
  },
  header: {
    backgroundColor: theme.palette.background.primary,
    elevation: 0, // remove shadow on Android
  },
  headerLeft: {
    paddingLeft: theme.spaces.md,
  },
  headerRight: {
    paddingRight: theme.spaces.md,
  },
}));

export default stylesheet;
