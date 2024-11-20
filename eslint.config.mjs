import globals from "globals";
import pluginJs from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs.all,
];
