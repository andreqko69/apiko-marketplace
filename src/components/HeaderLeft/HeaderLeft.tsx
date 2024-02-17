import React from 'react';
import { useStyles } from 'react-native-unistyles';
import type { HeaderBackButtonProps } from '@react-navigation/elements';

import Icon, { IconName } from '../Icon/Icon';

const HeaderLeft = ({ onPress }: HeaderBackButtonProps) => {
  const { theme } = useStyles();

  return (
    <Icon
      onPress={onPress}
      name={IconName.ArrowLeft}
      size={theme.iconSize.md}
      color={theme.palette.icon.color.navigation}
    />
  );
};

export default HeaderLeft;
