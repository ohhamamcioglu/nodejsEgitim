import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  pluginJs.configs.recommended,
  {
    files: ["src/**/*.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2022,
      sourceType: "module"
    },
    rules: {
      "semi": "error",
      "no-unused-vars": ["error", { "args": "none" }],
      "no-undef": "error",
      "quotes": "off",  // Tırnak kuralını tamamen kapat
      "indent": ["error", 2],
      "no-console": "off"
    }
  }
];
