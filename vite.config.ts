import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";


export default defineConfig({
  plugins: [vue()],
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
  server: {
    host: true,
    port: 5173
  }
})
