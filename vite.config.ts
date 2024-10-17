import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import { viteStaticCopy } from "vite-plugin-static-copy";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" assert { type: "json" }; // Node >=17
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), vue(), crx({ manifest })],
});
