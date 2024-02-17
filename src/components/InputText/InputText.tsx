import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './InputText.styles';
import { TextInput } from 'react-native-gesture-handler';

interface InputTextProps {
  value?: string;
  placeholder?: string;
  onTextChange: (text: string) => unknown;
}

const InputText = ({ placeholder, value, onTextChange }: InputTextProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const handleTextChange = (text: string) => {
    onTextChange(text);
  };

  return (
    <TextInput
      placeholderTextColor={theme.palette.input.color.placeholder}
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={handleTextChange}
    />
  );
};

export default InputText;
