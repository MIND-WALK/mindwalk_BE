module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: [
            8,
            8,
            {
                SwitchCase: 1,
                offsetTernaryExpressions: true,
            },
        ],
        "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
                parser: "flow",
            },
        ],
    },
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js"],
            },
        },
    },
};