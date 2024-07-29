<script lang="ts" setup>
import { useRouter } from "vue-router";
import { FwbButton } from "flowbite-vue";

const router = useRouter();
</script>

<template>
  <div class="h-screen w-screen bg-slate-900 flex flex-col justify-center items-center">
    <h1 class="text-[32px] text-white font-bold mb-4">PAGE NOT FOUND</h1>

    <FwbButton color="blue" @click.once="router.push({ name: 'auth-login' })">Back to home</FwbButton>
  </div>
</template>

<style lang="scss" scoped></style>
