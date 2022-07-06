import { api } from "../api/api"
import { OM } from "../components/om/om.interface"

export const create = (data: OM) => {
  return api.post(`/om`, data)
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

export const update = (id: string, data: OM) => {
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