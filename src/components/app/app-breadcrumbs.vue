<script lang="ts" setup>
import { ref, onMounted } from "vue";

const links = ref([]);

const getBreadcrumbItems = () => {
  const routeLinks = window.location.pathname.split("/");
  routeLinks.shift();

  if (routeLinks.length === 1) {
    links.value = [...routeLinks, "overview"];

    return;
  }

  links.value = routeLinks;
};

const isLastItem = (idx: number) => {
  return idx + 1 === links.value.length;
};

onMounted(() => {
  getBreadcrumbItems();
});
</script>

<template>
  <div class="flex flex-row pl-3">
    <p v-if="links.length" v-for="(link, idx) in links" class="text-xs text-gray-700 capitalize mr-2">
      {{ link }} &nbsp; <span v-if="!isLastItem(idx)">/ </span>
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
