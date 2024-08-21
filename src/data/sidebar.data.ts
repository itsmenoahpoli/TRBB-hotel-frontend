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
import { ROUTES } from "~/constants";

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
        url: ROUTES.PAGE.DASHBOARD.INVENTORY.OFFICE_SUPPLIES,
        icon: TbListDetails,
      },
      {
        label: "Cleaning Supplies",
        url: ROUTES.PAGE.DASHBOARD.INVENTORY.CLEANING_SUPPLIES,
        icon: TbVacuumCleaner,
      },
      {
        label: "Guest Supplies",
        url: ROUTES.PAGE.DASHBOARD.INVENTORY.GUEST_SUPPLIES,
        icon: TbUsers,
      },
      {
        label: "Hotel Supplies",
        url: ROUTES.PAGE.DASHBOARD.INVENTORY.HOTEL_SUPPLIES,
        icon: TbBuildingCommunity,
      },
      {
        label: "Food Supplies",
        url: ROUTES.PAGE.DASHBOARD.INVENTORY.FOOD_SUPPLIES,
        icon: TbToolsKitchen2,
      },
      {
        label: "Maintenance Supplies",
        url: ROUTES.PAGE.DASHBOARD.INVENTORY.MAINTENANCE_SUPPLIES,
        icon: TbSettings,
      },
    ],
  },
  {
    groupName: "Reports",
    children: [
      {
        label: "Inventory Reports",
        url: ROUTES.PAGE.DASHBOARD.REPORTS.INVENTORY_REPORTS,
        icon: TbClipboard,
      },
    ],
  },
  { groupName: "Rooms Management", children: [] },
  { groupName: "Admin Actions", children: [] },
];
