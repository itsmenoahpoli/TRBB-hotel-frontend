<script lang="ts" setup>
import { onMounted } from "vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";

onMounted(() => {
  console.log("App Mounted!");
});
</script>

<template>
  <VueQueryDevtools />
  <Notifications />
  <RouterView />
</template>

<style lang="scss" scoped></style>
