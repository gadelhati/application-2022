import { api } from "../api/api"
import { User } from "../components/user/user.interface"

export const create = (data: User) => {
  return api.post<User>(`/user`, data)
}

export const getRetrieve = () => {
  return api.get<User[]>(`/user/retrieve`)
}

export const getAll = () => {
  return api.get(`/user`)
}

export const retrieve = (id: string) => {
  return api.get<User>(`/user/${id}`)
}

export const update = (id: string, data: User) => {
  return api.put<User>(`/user/${id}`, data)
}

export const remove = (id: string) => {
  return api.delete(`/user/${id}`)
}

export const removeAll = () => {
  return api.delete(`/user`)
}

export const changePassword = (id: string, data: User) => {
  return api.put<User>(`/user/changePassword/${id}`, data)
}

export const findBySource = (source:string) => {
  return api.get<User[]>(`/om?source=${source}`)
}