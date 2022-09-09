module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  plugins: ['react', 'import', 'simple-import-sort', 'react', 'unused-imports'],
  rules: {
    'no-unused-vars': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/prop-types': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
