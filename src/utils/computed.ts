import { computed } from "vue";
import store from "../store";

export const nu = computed(() => store.getters.nu);
