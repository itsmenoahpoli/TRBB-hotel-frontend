import { AuthService } from "~/services/modules/auth.service";
import { InventoryService } from "~/services/modules/inventory.service";

export const useServices = () => {
  return {
    authService: new AuthService(),
    inventoryService: new InventoryService(),
  };
};
