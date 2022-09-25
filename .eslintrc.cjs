module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'standard',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    semi: [2, 'always'],
    'comma-dangle': [2, {
      arrays: 'never',
      objects: 'always-multiline',
      imports: 'never',
      exports: 'never',
      functions: 'never',
    }],
    'prefer-const': 2,
    'import/order': ['error', { groups: ['builtin'] }],
  },
};
