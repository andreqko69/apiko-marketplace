import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.backdropColor,
    padding: theme.spaces.xlg,
  },
  content: {
    padding: theme.spaces.xxxlg,
    backgroundColor: theme.palette.modal.background.primary,
    borderRadius: theme.borderRadius.sm,
  },
}));

export default stylesheet;
