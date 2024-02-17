import baseTheme from 'styles/baseTheme';
import colors from 'styles/colors.ts';

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
        secondary: colors.background,
        primaryDisabled: colors.lightGrey2,
        secondaryDisabled: colors.background,
        active: colors.activeRed,
      },
      borderColor: {
        primary: colors.mainRed,
      },
      loaderColor: {
        primary: colors.white,
        secondary: colors.mainRed,
      },
    },
  },
} as const;

export default lightTheme;
