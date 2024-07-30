<script lang="ts" setup>
const $props = defineProps<{
  width: number;
}>();
</script>

<template>
  <div :class="`h-screen !w-[${$props.width}px] bg-[#1e1e1e] fixed left-0 top-0`"></div>
</template>

<style lang="scss" scoped></style>
