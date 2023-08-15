module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true
    },
    extends: [
      'plugin:vue/vue3-essential',
      'eslint:recommended',
      '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: 'error',
        indent: 'off',
        'space-before-function-paren': ['error', 'never'],
        'vue/html-indent': ['error', 2],
        'vue/script-indent': ['error', 2, {
            baseIndent: 1
        }]
    }
}
