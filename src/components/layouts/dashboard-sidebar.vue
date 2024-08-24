<script lang="ts" setup>
import { useRoute } from "vue-router";
import { sidebarData } from "~/data";

const isLinkActive = (url: string) => {
  const route = useRoute();

  return url === route.fullPath;
};
</script>

<template>
  <div class="h-screen bg-slate-100 fixed left-0 bottom-0 sidebar">
    <div class="py-4">
      <div class="bg-slate-200 rounded-md p-10 mx-4 mb-10"></div>

      <div class="flex flex-col gap-y-2">
        <div v-for="group in sidebarData" class="flex flex-col mb-3">
          <small class="text-xs uppercase ml-5 mb-1">
            {{ group.groupName }}
          </small>
          <RouterLink
            v-for="link in group.children"
            :to="link.url"
            class="flex flex-row items-center gap-x-2 text-sm text-gray-900 hover:text-white hover:font-medium hover:bg-primary py-3 pl-5 pr-2"
            :class="{
              'text-white font-medium bg-primary': isLinkActive(link.url),
            }"
          >
            <component v-if="link.icon" :is="link.icon" size="24" color="orange" />
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 270px;
  height: calc(100% - 40px);
  padding-top: 20px;
}
</style>
