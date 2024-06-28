class UserSignUpError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserSignUpError";
  }
}

class UserLoginError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserLoginError";
  }
}
