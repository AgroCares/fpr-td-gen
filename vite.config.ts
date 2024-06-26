/// <reference types="vitest" />
// Configure Vitest (https://vitest.dev/config/)
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@nmi/fpr-td-gen",
      fileName: "fpr-td-gen",
    },
  },
  plugins: [dts()],
  test: {
    // ...
  },
});