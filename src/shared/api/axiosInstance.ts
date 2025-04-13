import axios from "axios";
import { baseURL } from "./apiConfigs";

export const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});
