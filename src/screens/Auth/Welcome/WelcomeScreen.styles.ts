import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet((theme) => {
  return {
    container: {
      flex: 1,
    },
    imageBackground: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
    linearGradient: {
      height: '75%',
      justifyContent: 'flex-end',
    },
    contentWrapper: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spaces.md,
      marginBottom: 60,
    },
    title: {
      color: theme.palette.typography.primaryAlternative,
      fontFamily: theme.fontFamily.extraBold,
      fontSize: theme.fontSize.xxxlg,
      lineHeight: theme.lineHeight.xlg,
      textAlign: 'center',
    },
    text: {
      color: theme.palette.typography.primaryAlternative,
      fontFamily: theme.fontFamily.regular,
      fontSize: theme.fontSize.sm,
      lineHeight: theme.lineHeight.sm,
      maxWidth: 300,
      textAlign: 'center',
      marginTop: theme.spaces.sm,
      marginBottom: theme.spaces.md,
    },
    buttonContainer: {
      width: '100%',
      gap: theme.spaces.sm,
    },
  };
});

export default stylesheet;
