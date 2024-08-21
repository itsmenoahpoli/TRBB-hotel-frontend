<script setup lang="ts">
import { FwbButton } from "flowbite-vue";
import PageHeader from "~/components/shared/page-header.vue";
import ManageInventoryModule from "~/modules/inventory/manage-inventory.vue";
</script>

<template>
  <div>
    <PageHeader
      title="Office Supplies"
      subtitle="Manage overall inventory of office supplies"
    >
      <div class="flex flex-row gap-x-2">
        <FwbButton color="light">EXPORT TO CSV</FwbButton>
        <FwbButton>ADD SUPPLY</FwbButton>
      </div>
    </PageHeader>

    <ManageInventoryModule inventory-type="office" />
  </div>
</template>

<style lang="scss" scoped></style>
