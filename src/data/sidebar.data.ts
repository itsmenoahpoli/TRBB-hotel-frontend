import {
  TbHome2,
  TbListDetails,
  TbVacuumCleaner,
  TbUsers,
  TbBuildingCommunity,
  TbToolsKitchen2,
  TbSettings,
  TbClipboard,
} from "vue3-icons/tb";

export const sidebarData = [
  {
    groupName: "Overview",
    children: [
      {
        label: "Dashboard",
        url: "/dashboard",
        icon: TbHome2,
      },
    ],
  },
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
        icon: TbVacuumCleaner,
      },
      {
        label: "Guest Supplies",
        url: "/dashboard/inventory/guest-supplies",
        icon: TbUsers,
      },
      {
        label: "Hotel Supplies",
        url: "/dashboard/inventory/hotel-supplies",
        icon: TbBuildingCommunity,
      },
      {
        label: "Food Supplies",
        url: "/dashboard/inventory/food-supplies",
        icon: TbToolsKitchen2,
      },
      {
        label: "Maintenance",
        url: "/dashboard/inventory/maintenance",
        icon: TbSettings,
      },
    ],
  },
  {
    groupName: "Reports",
    children: [
      {
        label: "Inventory Reports",
        url: "/dashboard/reports/inventory",
        icon: TbClipboard,
      },
    ],
  },
  { groupName: "Rooms Management", children: [] },
  { groupName: "Admin Actions", children: [] },
];
