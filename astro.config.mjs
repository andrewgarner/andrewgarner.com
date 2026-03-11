import { defineConfig, fontProviders } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  build: {
    assets: "assets",
  },
  fonts: [
    {
      name: "Sometype Mono",
      provider: fontProviders.fontsource(),
      cssVariable: "--font-sometype-mono",
      weights: [400, 700],
      styles: ["normal"],
      display: "fallback",
      featureSettings: "'kern' 1",
      fallbacks: [
        "Anonymous Pro",
        "Consolas",
        "Andale Mono WT",
        "Andale Mono",
        "Lucida Console",
        "Lucida Sans Typewriter",
        "DejaVu Sans Mono",
        "Bitstream Vera Sans Mono",
        "Liberation Mono",
        "Nimbus Mono L",
        "Monaco",
        "Courier New",
        "Courier",
        "monospace",
      ],
      unicodeRange: [
        "U+0000-00FF",
        "U+0131",
        "U+0152-0153",
        "U+02BB-02BC",
        "U+02C6",
        "U+02DA",
        "U+02DC",
        "U+0304",
        "U+0308",
        "U+0329",
        "U+2000-206F",
        "U+2074",
        "U+20AC",
        "U+2122",
        "U+2191",
        "U+2193",
        "U+2212",
        "U+2215",
        "U+FEFF",
        "U+FFFD",
      ],
    },
  ],
});
