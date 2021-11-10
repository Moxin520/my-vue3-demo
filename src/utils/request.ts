import axios from "axios";
import { ElLoading, ElNotification } from "element-plus";

let loading: { close(): void };

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL as string | undefined,
  timeout: 5000,
});

//  异常拦截器
const errorHandler = (error: { message: string }) => {
  loading.close();
  ElNotification({
    title: "请求失败",
    message: error.message,
    type: "error",
  });
  return Promise.reject(error);
};

service.interceptors.request.use((config: any) => {
  loading = ElLoading.service({
    lock: true,
    text: "Loading",
    spinner: "el-icon-loading",
    background: "rgba(0,0,0,0.4)",
  });
  const token = true;
  if (token) {
    config.headers["Access-Token"] = token;
  }
  return config;
}, errorHandler);

service.interceptors.response.use((response: any) => {
  const { data } = response;
  loading.close();
  console.log(111, response);
  if (data.errorCode !== 0) {
    ElNotification({
      title: "请求失败",
      message: data.message,
      type: "error",
    });
    return Promise.reject(new Error(data.message || "Error"));
  }
  return response;
}, errorHandler);

export default service;
