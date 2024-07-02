import axios from "axios";
import { UserApi } from "@/api/users";
import { UserRepository } from "@/repositories/userRepository";
import { UserService } from "@/services/userService";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

const userApi = new UserApi(axiosInstance);
const userRepository = new UserRepository(userApi);
const userService = new UserService(userRepository);

export { userService };
