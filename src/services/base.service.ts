import { httpClient } from "~/api";

export class BaseService {
  protected get http() {
    return httpClient;
  }

  protected handleError(error: unknown) {
    console.log(error);
  }

  protected createUrlWithParams(url: string, params: any) {
    const queryParams = new URLSearchParams();

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        queryParams.append(key, params[key]);
      }
    }

    return `${url}?${queryParams.toString()}`;
  }
}
