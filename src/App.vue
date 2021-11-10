<script setup lang="ts">
console.log(import.meta.env.VITE_NODE_ENV + ":" + import.meta.env.VITE_APP_BASE_URL)
</script>

<template>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
