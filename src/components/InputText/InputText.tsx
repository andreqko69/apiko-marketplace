import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './InputText.styles';
import { TextInput } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

interface InputTextProps {
  value?: string;
  placeholder?: string;
  onTextChange: (text: string) => unknown;
  errorMessage?: string;
}

const InputText = ({
  placeholder,
  value,
  onTextChange,
  errorMessage,
}: InputTextProps) => {
  const { styles, theme } = useStyles(stylesheet, { hasError: !!errorMessage });

  const handleTextChange = (text: string) => {
    onTextChange(text);
  };

  return (
    <View>
      <TextInput
        placeholderTextColor={theme.palette.input.color.placeholder}
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={handleTextChange}
      />
      {errorMessage?.length && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default InputText;
