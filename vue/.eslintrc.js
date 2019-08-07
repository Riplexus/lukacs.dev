module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'semi': 'error',
        'indent': 'off',
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            'baseIndent': 1
        }]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
};
