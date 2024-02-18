import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { isAndroid } from '@utils/reactNative';

function CustomKeyboardAvoidingView({ children, style }: any) {
  const insets = useSafeAreaInsets();
  const [bottomPadding, setBottomPadding] = useState(insets.bottom);
  const [topPadding, setTopPadding] = useState(insets.top);

  useEffect(() => {
    // This useEffect is needed because insets are undefined at first for some reason
    // https://github.com/th3rdwave/react-native-safe-area-context/issues/54
    // custom formula to calculate bottom padding
    setBottomPadding(insets.bottom > 0 ? insets.bottom + 10 : 40);
    setTopPadding(insets.top);
  }, [insets.bottom, insets.top]);

  return (
    <KeyboardAvoidingView
      style={style}
      behavior={isAndroid ? undefined : 'padding'}
      keyboardVerticalOffset={isAndroid ? 0 : topPadding + bottomPadding}>
      {children}
    </KeyboardAvoidingView>
  );
}

export default CustomKeyboardAvoidingView;
