import { ISignUpUser, ILoginUser } from "@/models/user";
import axios from "axios";

interface IUserAPI {
  signUp: (data: ISignUpUser) => Promise<any>;
  login: (data: ILoginUser) => Promise<any>;
}

export default class UserAPI implements IUserAPI {
  constructor() {}

  async signUp(data: ISignUpUser): Promise<any> {
    const result = await axios.post("/api/users/signup", {
      data,
    });
    return result;
  }

  async login(data: ILoginUser): Promise<any> {
    const result = await axios.post("/api/users/login", {
      data,
    });
    return result;
  }
}
