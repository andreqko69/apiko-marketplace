import React, { memo, useState } from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { TextInput } from 'react-native-gesture-handler';

import stylesheet from './InputText.styles';
import { InputType } from './constants';
import { getInputPropsByType } from './helpers';
import Icon, { type IconName } from '../Icon/Icon';

interface InputTextProps {
  onTextChange: (text: string) => unknown;
  value?: string;
  placeholder?: string;
  errorMessage?: string;
  type?: InputType;
  iconName?: IconName;
  onIconPress?: () => unknown;
}

const InputText = ({
  placeholder,
  value,
  onTextChange,
  errorMessage,
  type,
  iconName,
  onIconPress,
}: InputTextProps) => {
  const [isActive, setIsActive] = useState(false);
  const { styles, theme } = useStyles(stylesheet, {
    hasError: !!errorMessage,
    isActive,
  });

  const handleTextChange = (text: string) => {
    onTextChange(text);
  };

  const typeProps = getInputPropsByType(type);
  const icon = iconName ? (
    <Icon name={iconName} onPress={onIconPress} size={theme.iconSize.md} />
  ) : null;

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={theme.palette.input.color.placeholder}
          style={styles.input}
          defaultValue={value}
          placeholder={placeholder}
          onChangeText={handleTextChange}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          {...typeProps}
        />
        {icon}
      </View>
      {!!errorMessage?.length && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default memo(InputText);
