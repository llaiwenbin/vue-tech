module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    "rules": {
        'no-unused-vars': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'no-useless-escape': 0
    }
}