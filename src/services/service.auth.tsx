import { api } from "../api/api"
import { setUser, removeToken } from "./service.token"
import { Auth } from "../components/auth/auth.interface"

export const signup = (data: Auth) => {
  return api.post<Auth>(`/user/signup`, data)
}

export const signin = async (data: Auth) => {
  const response = await api.post<Auth>(`/user/signin`, data)
  if (response.data.accessToken) {
    setUser(response.data)
  }
  return response
}

export const logout = () => {
  removeToken()
}

export const refreshToken = () => {
  refreshToken()
}