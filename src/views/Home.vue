<script setup lang="ts">
import { nu } from "../utils/computed"
import { useStore } from "vuex"
import { ElButton } from "element-plus"
import { watch } from "vue"
const store = useStore()
watch(nu, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
const add = () => {
  store.commit("nuAdd")
}
</script>

<template>
  <div>
    <div class="redFont">{{ nu }}</div>
    <el-button type="success" @click="add">数字+1</el-button>
  </div>
</template>

