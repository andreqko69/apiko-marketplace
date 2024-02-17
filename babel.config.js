module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.ios.tsx',
          '.android.js',
          '.android.tsx',
          '.js',
          '.ts',
          '.tsx',
          '.json',
          '.png',
          '.jpeg',
        ],
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@stores': './src/stores',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@assets': './src/assets',
        },
      },
    ],
  ],
};
