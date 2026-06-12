// @lovable.dev/vite-tanstack-config bundles tanstackStart, viteReact, tailwindcss,
// nitro, etc. We add base:'./' so assets work under the GitHub Pages project
// subpath, and the CI builds with NITRO_PRESET=github_pages to emit a static site.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "./" },
  tanstackStart: {
    server: { entry: "server" },
  },
});
