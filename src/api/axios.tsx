import axios from "axios"
import { getLocalAccessToken } from "../services/service.token"

const token = getLocalAccessToken();

export const api = axios.create({
  // baseURL: "https://10.5.193.20/application-back",
  baseURL: "http://127.0.0.1:3128/application-back",
});

api.interceptors.request.use(async config => {
  const token = getLocalAccessToken();
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
  }
  return config;
})