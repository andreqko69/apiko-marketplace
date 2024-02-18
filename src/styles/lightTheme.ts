import baseTheme from 'styles/baseTheme';
import colors from 'styles/colors';

const lightTheme = {
  ...baseTheme,
  palette: {
    typography: {
      primary: colors.black,
      secondary: colors.darkGrey2,
      active: colors.activeRed,
      disabled: colors.lightGrey2,
      link: colors.mainRed,
      error: colors.error,
      currentPrice: colors.darkRed,
      primaryAlternative: colors.white,
    },
    button: {
      typography: {
        primary: colors.white,
        secondary: colors.mainRed,
        secondaryDisabled: colors.lightGrey2,
      },
      background: {
        primary: colors.mainRed,
        primaryActive: colors.activeRed,
        secondary: colors.background,
        primaryDisabled: colors.lightGrey2,
        secondaryDisabled: colors.background,
      },
      borderColor: {
        primary: colors.mainRed,
      },
      loaderColor: {
        primary: colors.white,
        secondary: colors.mainRed,
      },
    },
    background: {
      primary: colors.lightGrey1,
    },
    icon: {
      color: {
        primary: colors.lightGrey2,
        secondary: colors.darkGrey3,
        primaryActive: colors.mainRed,
        navigation: colors.black,
      },
    },
    input: {
      color: {
        primary: colors.black,
        placeholder: colors.darkGrey1,
        error: colors.error,
      },
      borderColor: {
        primary: colors.lightGrey2,
        primaryActive: colors.mainRed,
        error: colors.error,
      },
    },
  },
} as const;

export default lightTheme;
