import IUserAPI from "@/api/users";
import {
  UserLoginToken,
  UserSignUpInformation,
  SignUpUser,
} from "@/models/user";
interface IUserRepository {
  getAccessToken(
    userSignUpInformation: UserSignUpInformation
  ): Promise<UserLoginToken>;
}

export default class UserRepository implements IUserRepository {
  constructor(readonly userAPI: IUserAPI) {}

  async getAccessToken(userSignUpInformation: UserSignUpInformation) {
    const signUpUser = SignUpUser.fromUserSignUpInformation(
      userSignUpInformation
    );
    return await this.userAPI.signUp(signUpUser);
  }
}
