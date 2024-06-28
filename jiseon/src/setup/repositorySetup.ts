import UserRepository from "@/repositories/userRepository";
import { userAPI } from "./apiSetup";

const userRepository = new UserRepository(userAPI);

export { userRepository };
