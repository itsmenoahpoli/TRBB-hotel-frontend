<script setup lang="ts">
import DashboardSidebar from "~/components/layouts/dashboard-sidebar.vue";
</script>

<template>
  <div class="min-h-screen w-screen relative">
    <DashboardSidebar :width="300" />

    <div class="h-screen w-full bg-slate-100 content">
      <div class="h-[70px] w-full bg-white"></div>

      <div class="h-full w-full"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sidebarWidth: 300px;

.content {
  width: calc(100% - $sidebarWidth) !important;
  margin-left: $sidebarWidth !important;
}
</style>
