import { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { LoginRequest, LoginResponse } from "@/models/user";

export interface IUserAPI {
  login(data: LoginRequest): Promise<LoginResponse>;
}

export class UserApi implements IUserAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    // server api 관련된 logic
    // retry, caching, error handling, status code handling 등

    try {
      const response: AxiosResponse<LoginResponse> =
        await this.axios.post<LoginResponse>("v1/users/login", data);
      return response.data;
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        switch (error.response.status) {
          case 400:
            throw new Error("Invalid request");
          case 401:
            throw new Error("Unauthorized");
          case 500:
            throw new Error("Server error");
          default:
            throw new Error(`Unexpected error: ${error.response.status}`);
        }
      } else {
        throw new Error("Network error or unknown error");
      }
    }
  }
}
