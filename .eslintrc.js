module.exports = {
  root: true,
  extends: ['@react-native'],
  rules: {
    '@typescript-eslint/no-import-type-side-effects': 'error',
    'prettier/prettier': ['error', { bracketSameLine: false }],
  },
};
