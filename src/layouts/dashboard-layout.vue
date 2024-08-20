<script setup lang="ts">
import { onMounted } from "vue";
import { useAuth } from "~/composables";
import DashboardHeader from "~/components/layouts/dashboard-header.vue";
import DashboardSidebar from "~/components/layouts/dashboard-sidebar.vue";
import DashboardContent from "~/components/layouts/dashboard-content.vue";

const { checkAuth } = useAuth();

onMounted(() => {
  checkAuth();
});
</script>

<template>
  <div class="min-h-screen w-screen">
    <DashboardHeader />

    <div class="h-full w-full relative">
      <DashboardSidebar />

      <DashboardContent>
        <RouterView />
      </DashboardContent>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  width: calc(100% - 300px);
  margin-left: 300px;
}
</style>
