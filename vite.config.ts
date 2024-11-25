import federation from "@originjs/vite-plugin-federation";

import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "admin",
      filename: "remoteEntry.js",
      exposes: {
        "./AdminApp": "./src/App.vue"
      },
      shared: ["vue"]
    })
  ],
  resolve: {
    alias: {
      "@/": "/src/",
      "@/assets": "/src/assets",
      "@/components": "/src/components",
      "@/helpers": "/src/helpers",
      "@/hooks": "/src/hooks",
      "@/layouts": "/src/layouts",
      "@/router": "/src/router",
      "@/types": "/src/types",
      "@/views": "/src/views"
    }
  },
  build: {
    target: "esnext",
    minify: false
  },
  server: {
    host: true,
    port: 5173
  }
})
