import axios from "axios";

const defaultAxios = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

export default defaultAxios;
