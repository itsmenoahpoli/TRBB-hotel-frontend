import { BaseService } from "./../base.service";
import { ROUTES } from "~/constants";

export class InventoryService extends BaseService {
  public async getAll(type: string): Promise<any[]> {
    const urlWithParams = this.createUrlWithParams(
      ROUTES.API.INVENTORY_SUPPLIES,
      {
        type,
        raw: true,
      },
    );

    return await this.http
      .get(urlWithParams)
      .then((response) => response.data)
      .catch((error) => this.handleError(error));
  }
}
