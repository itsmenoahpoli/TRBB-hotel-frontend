<script lang="ts" setup>
import AppBreadcrumbs from "~/components/app/app-breadcrumbs.vue";
</script>

<template>
  <div class="h-screen w-full content">
    <div class="h-full w-full">
      <div class="py-3 mb-5">
        <AppBreadcrumbs />
      </div>

      <div class="p-3">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
