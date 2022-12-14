import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";



// https://astro.build/config
export default defineConfig({
  
  integrations: [tailwind(), vue(
    {
      appEntrypoint: "/src/bootstrap",
      jsx: {
        enableObjectSlots:true,
    }}
  )],
  server: {
    host: true,
  },
  vite: {
    plugins: [
    ],
    resolve: {
      alias: {
        "~": "/src",
      },
    },
    ssr: {
      external: ["svgo"],
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
