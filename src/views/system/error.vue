<script lang="ts" setup>
import { useRouter } from "vue-router";
import { FwbButton } from "flowbite-vue";

const router = useRouter();
</script>

<template>
  <div class="h-screen w-screen bg-slate-100">
    <div class="h-[40px] w-screen bg-primary shadow"></div>

    <div class="h-full flex flex-col justify-center items-center gap-y-4">
      <h1 class="text-[32px] font-bold">PAGE NOT FOUND</h1>

      <FwbButton color="blue" @click.once="router.back()">Back</FwbButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
