import pluginJs from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import perfectionist from "eslint-plugin-perfectionist";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: [".astro/"] },
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs.recommended,
  perfectionist.configs["recommended-natural"],
];
