<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { getCurrentTime } from "~/utils";
import LogoutButton from "~/components/app/auth/logout-button.vue";

const currentTime = ref("");

onMounted(() => {
  currentTime.value = getCurrentTime();

  setInterval(() => {
    currentTime.value = getCurrentTime();
  }, 1000);
});
</script>

<template>
  <div class="h-[40px] w-full bg-primary text-xs text-white flex flex-row justify-between items-center px-5 !z-50 fixed top-0">
    <div class="w-full">
      <p class="text-white">Hotel Management System</p>
    </div>
    <div class="w-full flex justify-end items-center gap-x-5">
      <p>{{ currentTime }}</p>
      <button class="flex items-center gap-x-1 hover:text-orange-300 cursor-pointer">
        <VueFeather type="user" size="18" />
        My Account
      </button>

      <LogoutButton />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
