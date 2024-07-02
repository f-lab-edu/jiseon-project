import { LoginRequest, LoginResponse } from "@/models/user";
import { IUserAPI } from "@/api/users";

export interface IUserRepository {
  login(data: LoginRequest): Promise<LoginResponse>;
}

export class UserRepository implements IUserRepository {
  private userApi: IUserAPI;

  constructor(userApi: IUserAPI) {
    this.userApi = userApi;
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    // server query 관련된 logic

    return this.userApi.login(data);
  }
}
