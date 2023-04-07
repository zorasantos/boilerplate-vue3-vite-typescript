require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "@vue/eslint-config-prettier/skip-formatting",
  ],
  overrides: [],
  settings: {
    vue: {
      version: "detect",
    },
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["vue", "@typescript-eslint"],
  rules: {
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
