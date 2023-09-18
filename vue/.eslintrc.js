module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/standard', 'plugin:storybook/recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-return-assign': 'off',
    'semi': ['error', 'always'],
    'quote-props': ['error', 'consistent-as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'never'],
    'indent': ['error', 2],
    'vue/html-indent': ['error', 2],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
    }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: { indent: 'off' },
    },
  ],
};
