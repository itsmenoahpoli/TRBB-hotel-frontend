import { BaseService } from "./../base.service";

// import { HTTP_STATTUS_CODE } from "~/constants";

export class InventoryService extends BaseService {
  public async getAll(category: string): Promise<any[]> {
    return await this.http
      .get(`inventories?category=${category}`)
      .then((response) => response.data)
      .catch((error) => this.handleError(error));
  }
}
