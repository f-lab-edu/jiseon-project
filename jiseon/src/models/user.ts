export class UserSignUpInformation {
  constructor(
    readonly email: string,
    readonly password: string,
    readonly nickname: string,
    readonly contactInfo: string,
    readonly createAt: Date,
    readonly updateAt: Date
  ) {}
}

export interface ILoginUser {
  readonly email: string;
  readonly password: string;
}

export class LoginUser implements ILoginUser {
  constructor(readonly email: string, readonly password: string) {}
}

export interface ISignUpUser {
  readonly email: string;
  readonly password: string;
  readonly nickname: string;
  readonly contactInfo: string;
}

export class SignUpUser implements ISignUpUser {
  constructor(
    readonly email: string,
    readonly password: string,
    readonly nickname: string,
    readonly contactInfo: string
  ) {}

  static fromUserSignUpInformation(
    userSignUpInformation: UserSignUpInformation
  ) {
    return new SignUpUser(
      userSignUpInformation.email,
      userSignUpInformation.password,
      userSignUpInformation.nickname,
      userSignUpInformation.contactInfo
    );
  }
}

export interface UserLoginToken {
  readonly accessToken: string;
  readonly refreshToken: string;
}

export class UserLoginToken implements UserLoginToken {
  constructor(readonly accessToken: string, readonly refreshToken: string) {}

  static fromJSON(data: any): UserLoginToken {
    if (!data.accessToken || !data.refreshToken) {
      throw new Error("Invalid data to create UserLoginToken.");
    }

    return new UserLoginToken(data.accessToken, data.refreshToken);
  }
}
