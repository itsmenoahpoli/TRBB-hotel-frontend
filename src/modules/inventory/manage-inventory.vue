<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { useServices } from "~/composables";
import AppDatatable from "~/components/app/app-datatable.vue";

const $props = defineProps<{
  inventoryType:
    | "office"
    | "cleaning"
    | "guest"
    | "hotel"
    | "food"
    | "maintenance";
}>();

const { inventoryService } = useServices();
const { data: inventoryData, isLoading } = useQuery({
  queryKey: [`data-inventory-${$props.inventoryType}`],
  queryFn: async () => inventoryService.getAll($props.inventoryType),
});

const columns = [
  {
    key: "id",
    label: "ID",
  },
];

console.log({ $props, inventoryData, isLoading });
</script>

<template>
  <div>
    <AppDatatable :columns="columns" :data="[]" />
  </div>
</template>

<style scoped lang="scss"></style>
