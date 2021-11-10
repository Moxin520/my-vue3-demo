import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// 配置elementplus自动导入插件
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// 配置elementplus按需导入
import ElementPlus from "unplugin-element-plus/vite";

// https://vitejs.dev/config/
export default (mode) =>
  defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 7778,
      open: true,
      proxy: {
        // 选项写法
        "/api": {
          // 在配置文件中获取代理ip方法
          target: loadEnv(mode, process.cwd()).VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    plugins: [
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      vue(),
      ElementPlus(),
    ],
  });
