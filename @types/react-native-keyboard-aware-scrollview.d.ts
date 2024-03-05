declare module 'react-native-keyboard-aware-scrollview' {
  import type { StyleProp, ViewStyle } from 'react-native';

  interface KeyboardAwareScrollViewProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
  }

  const KeyboardAwareScrollView: ({
    style,
    children,
  }: KeyboardAwareScrollViewProps) => ReactNode;

  type Exports = {
    KeyboardAwareScrollView: typeof KeyboardAwareScrollView;
  };

  const exports: Exports;

  export default exports;

  export { KeyboardAwareScrollView };
}
