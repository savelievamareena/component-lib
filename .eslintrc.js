module.exports = {
    ignorePatterns: [".eslintrc.js", "webpack.config.js"],
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard-with-typescript", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "no-unused-vars": "warn",
        "no-console": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
    },
};
