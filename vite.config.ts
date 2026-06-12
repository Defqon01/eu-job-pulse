// @lovable.dev/vite-tanstack-config bundles tanstackStart, viteReact, tailwindcss, nitro, etc.
// base:'./' makes assets resolve under the GitHub Pages project subpath; SPA mode emits a
// static client shell (dist/client/index.html) — the dashboard fetches data.json client-side.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: { base: "./" },
  tanstackStart: {
    server: { entry: "server" },
    spa: { enabled: true },
  },
});
