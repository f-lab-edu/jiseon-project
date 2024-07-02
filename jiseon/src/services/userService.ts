import { IUserRepository } from "@/repositories/userRepository";
import { LoginRequest, LoginResponse } from "@/models/user";

export interface IUserService {
  login(data: LoginRequest): Promise<LoginResponse>;
}

export class UserService implements IUserService {
  private userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async login(data: LoginRequest): Promise<LoginResponse> {
    return this.userRepository.login(data);
  }
}
