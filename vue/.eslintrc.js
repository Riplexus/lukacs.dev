module.exports = {
    root: true,
    env: {
        node: true,
        es2022: true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: 'error',
        indent: 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1
        }]
    }
}
