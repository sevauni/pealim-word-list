import { defineConfig } from "vite";
import { crx } from "@crxjs/vite-plugin";
import manifest from "./manifest.json" assert { type: "json" }; // Node >=17
import tsconfigPaths from "vite-tsconfig-paths";
import { updateManifestPlugin } from "./updatemanifets";

export default defineConfig({
  plugins: [tsconfigPaths(), crx({ manifest }),updateManifestPlugin()],
});
