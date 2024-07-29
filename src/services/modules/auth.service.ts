import { BaseService } from "./../base.service";
import { useAuthStore } from "~/store";
import type { Credentials } from "~/types/auth";

export class AuthService extends BaseService {
  public async authenticateCredentials(credentials: Credentials) {
    console.log(credentials);
    try {
      const response = await this.http.post("/auth/login", credentials);
      const { SET_USER, SET_TOKEN } = useAuthStore();
      const { user, token } = response.data;

      SET_USER(user);
      SET_TOKEN(token);

      console.log(response);
    } catch (error) {
      this.handleError(error);
    }
  }
}
