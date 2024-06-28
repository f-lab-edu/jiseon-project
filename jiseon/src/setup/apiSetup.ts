import UserAPI from "@/api/users";
import defaultAxios from "./axiosSetup";

const userAPI = new UserAPI(defaultAxios);

export { userAPI };
