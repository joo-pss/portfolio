module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-refresh',
    '@typescript-eslint', 
    'prettier',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: { 
    browser: true,
  },
  ignorePatterns: ['.eslintrc.cjs', 'dist', 'node_modules'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { 
        allowConstantExport: true,
      },
    ],
    'prettier/prettier': [
      'warn', 
      {
        'endOfLine': 'auto',
        'plugins': ['prettier-plugin-tailwindcss'],
      },
    ],
  },
};
