<script setup lang="ts">
const $props = defineProps<{
  title: string;
  subtitle?: string;
}>();

console.log($props);
</script>

<template>
  <div class="page-header flex flex-row justify-between">
    <div class="flex flex-col gap-y-2">
      <h1 class="text-xl font-medium">{{ $props.title }}</h1>
      <p v-if="$props.subtitle" class="text-sm text-gray-700">
        {{ $props.subtitle }}
      </p>
    </div>

    <div class="page-header-slot">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-header {
  &-slot * {
    font-size: 12px !important;
  }
}
</style>
