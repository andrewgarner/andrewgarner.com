import globals from "globals";
import pluginJs from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { ignores: [".astro/"] },
  { files: ["**/*.{js,mjs,cjs,ts,astro}"] },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginAstro.configs.all,
  // False positive: Astro <script> without is:inline is bundled by Vite into
  // an external module, so it is never actually inline in the HTML output.
  { rules: { "astro/no-unsafe-inline-scripts": "off" } },
];
