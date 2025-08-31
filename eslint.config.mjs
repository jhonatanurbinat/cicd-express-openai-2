import globals from "globals";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs", // Changed from "module"
      globals: {
        ...globals.node, // Added Node.js globals
        ...globals.browser // You can keep this if you have some browser code
      }
    },
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "off", // Turned off the no-undef rule
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2]
    }
  }
];