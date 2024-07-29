<script lang="ts" setup></script>

<template>
  <div class="h-screen w-screen bg-slate-100">
    <div class="h-[70px] w-screen bg-white shadow"></div>

    <div class="h-full flex flex-col items-center gap-y-4 pt-[10%]">
      <div class="w-[350px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
