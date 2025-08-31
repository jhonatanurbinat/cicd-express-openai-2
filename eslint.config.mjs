
import pkg from 'eslint';
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
// Change the import from "eslint/config" to "eslint"
//import { defineConfig } from "eslint";

const { defineConfig } = pkg;


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
  pluginReact.configs.flat.recommended,
]);