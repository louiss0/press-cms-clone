import { defineConfig } from "astro/config";
// https://astro.build/config
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [astroImageTools, tailwind()]
});