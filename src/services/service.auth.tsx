import { api } from "../api/api"
import { OM } from "../components/om/om.interface"
import { setUser, removeToken } from "./service.token"

export const signup = (om: OM, username: string, email: string, password: string) => {
  return api.post(`/auth/signup`, { om, username, email, password })
}

export const signin = async (username: string, password: string) => {
  const response = await api.post(`/auth/signin`, { username, password })
    if (response.data.accessToken) {
        setUser(response.data)
    }
    return response.data
}

export const logout = () => {
  removeToken()
}

export const refreshToken = () => {
  refreshToken()
}