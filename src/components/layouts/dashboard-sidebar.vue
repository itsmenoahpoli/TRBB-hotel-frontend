<script lang="ts" setup>
import { TbListDetails } from "vue3-icons/tb";

const linkGroups = [
  {
    groupName: "Inventory",
    children: [
      {
        label: "Office Supplies",
        url: "/dashboard/inventory/office-supplies",
        icon: TbListDetails,
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
    <div class="py-4">
      <div class="bg-slate-200 rounded-md p-10 mx-4 mb-10"></div>

      <div class="flex flex-col gap-y-2">
        <div v-for="group in linkGroups" class="flex flex-col mb-3">
          <small class="text-gray-500 font-bold ml-5">
            {{ group.groupName }}
          </small>
          <RouterLink
            v-for="link in group.children"
            :to="link.url"
            class="flex flex-row items-center gap-x-2 text-sm text-gray-900 hover:text-white hover:font-medium hover:bg-primary py-3 pl-5 pr-2"
          >
            <component v-if="link.icon" :is="link.icon" size="20" />
            {{ link.label }}
          </RouterLink>
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
