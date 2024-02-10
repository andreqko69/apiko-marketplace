package com.apikomarketplace

import android.os.Bundle;
import com.zoontek.rnbootsplash.RNBootSplash
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "ApikoMarketplace"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  /**
   * We need to override the [onCreate] method to pass null to the super method. This is because
   * the [ReactActivity] class expects a [Bundle] to be passed to the super method, but we don't
   * want to do that.
   */
  override fun onCreate(savedInstanceState: Bundle?) {
      RNBootSplash.init(this, R.style.BootTheme) // ⬅️ initialize the splash screen
      super.onCreate(null) // super.onCreate(null) with react-native-screens
  }
}
