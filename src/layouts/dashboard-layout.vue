<script setup lang="ts">
import { onMounted } from "vue";
import { useAuth } from "~/composables";
import DashboardHeader from "~/components/layouts/dashboard-header.vue";
import DashboardSidebar from "~/components/layouts/dashboard-sidebar.vue";
import DashboardContent from "~/components/layouts/dashboard-content.vue";
import IdleChecker from "~/components/app/app-idle-checker.vue";

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

  <IdleChecker :is-enabled="false" />
</template>

<style lang="scss" scoped>
.content {
  width: calc(100% - 270px);
  margin-left: 270px;
}
</style>
