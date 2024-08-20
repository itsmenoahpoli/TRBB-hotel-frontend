<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";

const $props = withDefaults(
  defineProps<{ isEnabled?: boolean; timeoutMs?: number }>(),
  {
    isEnabled: false,
    timeoutMs: 15000,
  },
);

const idleTime = $props.timeoutMs;
const idleTimer = ref<NodeJS.Timeout | null>(null);

const resetIdleTimer = () => {
  if (idleTimer.value) {
    clearTimeout(idleTimer.value);
  }
  idleTimer.value = setTimeout(() => {
    confirm("You have been idle for 5 seconds.");
  }, idleTime);
};

const addEventListeners = () => {
  window.addEventListener("mousemove", resetIdleTimer);
  window.addEventListener("keydown", resetIdleTimer);
  window.addEventListener("click", resetIdleTimer);
  window.addEventListener("touchstart", resetIdleTimer);
};

const removeEventListeners = () => {
  window.removeEventListener("mousemove", resetIdleTimer);
  window.removeEventListener("keydown", resetIdleTimer);
  window.removeEventListener("click", resetIdleTimer);
  window.removeEventListener("touchstart", resetIdleTimer);
};

onMounted(() => {
  if ($props.isEnabled) {
    resetIdleTimer();
    addEventListeners();
  }
});

onUnmounted(() => {
  if ($props.isEnabled) {
    if (idleTimer.value) {
      clearTimeout(idleTimer.value);
    }

    removeEventListeners();
  }
});
</script>

<template>
  <div></div>
</template>

<style scoped></style>
