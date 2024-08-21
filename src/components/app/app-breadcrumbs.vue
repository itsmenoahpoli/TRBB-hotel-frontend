<script lang="ts" setup>
const links = window.location.pathname.split("/");
links.shift();

const isLastItem = (idx: number) => idx === links.length - 1;
</script>

<template>
  <div class="flex flex-row pl-3">
    <p
      v-for="(link, idx) in links"
      class="text-xs text-gray-700 capitalize mr-2"
    >
      {{ link }} &nbsp; <span v-if="!isLastItem(idx)">/</span>
    </p>
  </div>
</template>

<style lang="scss" scoped></style>
