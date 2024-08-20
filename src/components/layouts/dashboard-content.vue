<script lang="ts" setup>
import { computed } from "vue";

const breadcrumbs = computed(() => {
  return [];
});
</script>

<template>
  <div class="h-screen w-full content">
    <div class="h-full w-full">
      <div class="py-3 mb-5"></div>

      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
