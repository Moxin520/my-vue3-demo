import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "normalize.css";
import "./assets/styles/base.scss";
const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
