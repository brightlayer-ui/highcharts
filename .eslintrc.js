module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['@brightlayer-ui/eslint-config/ts', '@brightlayer-ui/eslint-config/tsx'],
    parserOptions: {
        project: "./tsconfig.json",
    },
    env: {
        browser: true
    }
};