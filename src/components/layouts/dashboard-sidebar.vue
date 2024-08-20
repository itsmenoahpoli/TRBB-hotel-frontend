<script lang="ts" setup>
const linkGroups = [
  {
    groupName: "Inventory",
    children: [
      {
        label: "Office Supplies",
        url: "/dashboard/inventory/office-supplies",
      },
      {
        label: "Cleaning Supplies",
        url: "/dashboard/inventory/cleaning-supplies",
      },
      {
        label: "Guest Supplies",
        url: "/dashboard/inventory/guest-supplies",
      },
      {
        label: "Hotel Supplies",
        url: "/dashboard/inventory/hotel-supplies",
      },
      {
        label: "Food Supplies",
        url: "/dashboard/inventory/food-supplies",
      },
      {
        label: "Maintenance",
        url: "/dashboard/inventory/maintenance",
      },
    ],
  },
  {
    groupName: "Reports",
    children: [
      {
        label: "Inventory Reports",
        url: "/dashboard/reports/inventory",
      },
    ],
  },
];
</script>

<template>
  <div class="h-screen bg-slate-100 fixed left-0 bottom-0 sidebar">
    <div class="p-4">
      <div class="bg-slate-200 rounded-md p-10 mb-5"></div>

      <div class="flex flex-col gap-y-2">
        <div v-for="group in linkGroups" class="flex flex-col">
          <small class="font-bold">{{ group.groupName }}</small>
          <RouterLink v-for="link in group.children" :to="link.url">{{ link.label }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 300px;
  height: calc(100% - 40px);
  padding-top: 20px;
}
</style>
