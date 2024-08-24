<script setup lang="ts">
import { ref } from "vue";
import { FwbButton, FwbModal } from "flowbite-vue";
import { useAuth } from "~/composables";

const { logout } = useAuth();
const showConfirm = ref<boolean>(false);

const handleLogoutConfirm = () => {
  handleConfirmVisibility(true);
};

const handleConfirmVisibility = (isShown: boolean) => {
  showConfirm.value = isShown;
};
</script>

<template>
  <FwbModal v-if="showConfirm" @close="handleConfirmVisibility(false)" size="md" not-escapable persistent>
    <template #body>
      <p class="text-black text-[14px]">Do you confirm to end your session and logout?</p>
    </template>
    <template #footer>
      <div class="flex justify-end gap-x-2">
        <FwbButton color="alternative" @click="handleConfirmVisibility(false)"> Cancel </FwbButton>
        <FwbButton color="red" @click="logout"> Logout</FwbButton>
      </div>
    </template>
  </FwbModal>

  <button class="flex items-center gap-x-1 hover:text-orange-300 cursor-pointer" @click="handleLogoutConfirm">
    <VueFeather type="log-out" size="18" />
    Log Out
  </button>
</template>

<style scoped></style>
