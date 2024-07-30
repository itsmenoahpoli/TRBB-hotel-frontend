<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getCurrentTime } from "~/utils";
import { TIME_CONSTANTS } from "~/constants";

const currentTime = ref("");

onMounted(() => {
  currentTime.value = getCurrentTime();

  setTimeout(() => {
    currentTime.value = getCurrentTime();
  }, TIME_CONSTANTS.ONE_MINUTE);
});
</script>

<template>
  <div class="h-[45px] w-full bg-[#002C42] text-sm text-white flex flex-row justify-between items-center px-10 !z-50">
    <div class="w-full">
      <p>{{ currentTime }}</p>
    </div>
    <div class="w-full flex justify-end items-center gap-x-5">
      <button class="flex items-center gap-x-1">
        <VueFeather type="user" size="18" />
        My Account
      </button>
      <button class="flex items-center gap-x-1">
        <VueFeather type="log-out" size="18" />
        Log Out
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
