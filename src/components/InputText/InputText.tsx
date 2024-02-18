import React from 'react';
import { Text, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { TextInput } from 'react-native-gesture-handler';

import stylesheet from './InputText.styles';
import { InputType } from './constants';
import { getInputPropsByType } from './helpers';

interface InputTextProps {
  value?: string;
  placeholder?: string;
  onTextChange: (text: string) => unknown;
  errorMessage?: string;
  type?: InputType;
}

const InputText = ({
  placeholder,
  value,
  onTextChange,
  errorMessage,
  type,
}: InputTextProps) => {
  const { styles, theme } = useStyles(stylesheet, { hasError: !!errorMessage });
  const typeProps = getInputPropsByType(type);

  const handleTextChange = (text: string) => {
    onTextChange(text);
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          placeholderTextColor={theme.palette.input.color.placeholder}
          style={styles.input}
          value={value}
          placeholder={placeholder}
          onChangeText={handleTextChange}
          {...typeProps}
        />
      </View>
      {!!errorMessage?.length && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputText;
