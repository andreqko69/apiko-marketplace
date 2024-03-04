declare module 'react-native-config' {
  export interface NativeConfig {
    SUPA_ANON_KEY: string;
    SUPA_URL: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
