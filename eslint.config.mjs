import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest";
import pluginPrettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import airbnbConfig from "eslint-config-airbnb";

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node, 
      },
    },
  },
  pluginJs.configs.recommended,
  airbnbConfig, 
  prettierConfig,
  {
    plugins: {
      jest: pluginJest,
      prettier: pluginPrettier,
    },
    rules: {
      ...pluginJest.configs.recommended.rules,
      "prettier/prettier": "error",
      "semi": ["error", "always"],
      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "space-before-function-paren": ["error", "never"],
      "space-infix-ops": ["error", { "int32Hint": false }],
    },
  },
];
