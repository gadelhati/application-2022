import axios from "axios"
import { getLocalAccessToken } from "../services/service.token"

const token = getLocalAccessToken();

export const api = axios.create({
  // baseURL: "https://10.5.193.20/application-back",
  baseURL: "http://127.0.0.1:3128/application-back",
  // responseType: 'json',
  headers:{
    // 'Content-Type': 'application/json'
    // 'Access-Control-Allow-Origin': '*',
    // 'Authorization': `Bearer ${token}`,
  }
});

api.interceptors.request.use(async config => {
  const token = getLocalAccessToken();
  if (token) {
    config.headers!.Authorization = `Bearer ${token}`;
    // config.headers.Access = `*`,
    // config.headers.Content = `application/json`
  }
  // if (token) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  // } else {
  //   delete axios.defaults.headers.common['Authorization'];
  // }
  return config;
})