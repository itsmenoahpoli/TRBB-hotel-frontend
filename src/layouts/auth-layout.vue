<script lang="ts" setup></script>

<template>
  <div class="h-screen w-screen bg-slate-100">
    <div class="h-[60px] w-screen bg-black shadow"></div>

    <div class="h-full flex flex-col items-center gap-y-4 pt-[10%]">
      <div class="w-1/4">
        <RouterView />

        <div class="text-center mt-5">
          <p class="text-xs text-gray-700">&copy; 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
