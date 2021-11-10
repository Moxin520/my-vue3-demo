import { createStore } from "vuex";
import init from "./moudles/init";
import getters from "./getters";
const store = createStore({
  modules: { init },
  getters,
  strict: true,
});

export default store;
