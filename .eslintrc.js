module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json",
  },
  env: {
    browser: false,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:node/recommended",
    "airbnb-typescript/base",
    "prettier",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "node/no-missing-require": ["error", { tryExtensions: [".ts"] }],
  },
};
