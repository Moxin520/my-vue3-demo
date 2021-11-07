import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 配置elementplus自动导入插件
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// 配置elementplus按需导入
import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 7777,
    open: true,
    proxy: {
      // 选项写法
      // "/api": {
      //   target: "http://jsonplaceholder.typicode.com",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
  },
  plugins: [
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    vue(),
    ElementPlus()],
});
