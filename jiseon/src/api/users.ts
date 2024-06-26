import { ISignUpUser, ILoginUser, UserLoginToken } from "@/models/user";
import { AxiosInstance } from "axios";

interface IUserAPI {
  signUp: (data: ISignUpUser) => Promise<UserLoginToken>;
  login: (data: ILoginUser) => Promise<UserLoginToken>;
}

export default class UserAPI implements IUserAPI {
  constructor(readonly axios: AxiosInstance) {}

  async signUp(data: ISignUpUser): Promise<UserLoginToken> {
    const result = await this.axios.post("/api/users/signup", {
      data,
    });

    if (result.status !== 201) throw new UserSignUpError("Failed to sign up.");

    return UserLoginToken.fromJSON(result.data);
  }

  async login(data: ILoginUser): Promise<UserLoginToken> {
    const result = await this.axios.post("/api/users/login", {
      data,
    });

    if (result.status !== 200) throw new UserLoginError("Failed to login.");

    return UserLoginToken.fromJSON(result.data);
  }
}
