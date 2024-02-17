import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.fontSize.sm,
    lineHeight: theme.lineHeight.sm,
  },
  header: {
    backgroundColor: theme.palette.background.primary,
    borderBottomWidth: 0,
    shadowColor: 'transparent',
  },
  headerLeft: {
    paddingLeft: theme.spaces.md,
  },
  headerRight: {
    paddingRight: theme.spaces.md,
  },
}));

export default stylesheet;
