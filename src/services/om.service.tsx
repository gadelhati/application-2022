import { api } from "../api/axios"
import { OM } from "../assets/interface/om"

export const create = (data:{}) => {
  return api.post<OM>(`/om`, data)
}

export const getRetrieve = () => {
  return api.get<OM[]>(`/om/retrieve`)
}

export const getAll = () => {
  return api.get(`/om`)
}

export const retrieve = (id: string) => {
  return api.get<OM>(`/om/${id}`)
}

export const update = (id: string, data: {}) => {
  return api.put<OM>(`/om/${id}`, data)
}

export const remove = (id: string) => {
  return api.delete(`/om/${id}`)
}

export const removeAll = () => {
  return api.delete(`/om`)
}

export const findBySource = (source:string) => {
  return api.get<OM[]>(`/om?source=${source}`)
}