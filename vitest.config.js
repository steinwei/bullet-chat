import path from "path";
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  define: {
    __BROWSER__: true,
    __USE_PREFIX_IDENTIFIERS__: true,
  },
  test: {
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "./setup.js")],
    include: ["test/**/*.spec.js"],
    deps: {
      inline: ["vue", "@vue/compat"],
    },
    sequence: {
      shuffle: true,
    },
  },
  resolve: {
    extensions: [".vue", ".js", ".json", ".jsx", ".ts", ".tsx", ".node"],
    dedupe: ["vue", "@vue/compat"],
  },
});
