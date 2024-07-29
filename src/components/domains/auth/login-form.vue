<script lang="ts" setup>
import { FwbInput, FwbButton } from "flowbite-vue";
import { useForm } from "vue-hooks-form";
import { useServices } from "~/composables";
import type { Credentials } from "~/types/auth";

const { useField, handleSubmit } = useForm();
const { authService } = useServices();

const fields = {
  username: useField("username", {
    rule: {
      required: true,
    },
  }),
  password: useField("password", {
    rule: {
      required: true,
    },
  }),
};

const onFormSubmit = handleSubmit(async (formData: any) => {
  return authService.authenticateCredentials(formData as Credentials);
});
</script>

<template>
  <form class="flex flex-col gap-y-4" @submit.prevent.once="onFormSubmit">
    <h1 class="text-center">Admin Dashboard Login</h1>
    <FwbInput v-model="fields.username.value" :ref="fields.username.ref" placeholder="Enter username" autofocus />
    <FwbInput v-model="fields.password.value" :ref="fields.password.ref" placeholder="Enter password" />
    <RouterLink to="/auth/forgot-password" class="text-xs text-right text-blue-700 underline underline-offset-4">Forgot password?</RouterLink>
    <FwbButton class="py-2">Log In</FwbButton>
  </form>
</template>

<style lang="scss" scoped></style>
