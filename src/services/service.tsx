import { api } from "../api/axios"

export const create = (data:{}) => {
  return api.post(`/om`, data)
}

export const getRetrieve = () => {
  return api.get(`/om/retrieve`)
}

export const getAll = () => {
  return api.get(`/om`)
}

export const retrieve = (id: string) => {
  return api.get(`/om/${id}`)
}

export const update = (id: string, data: {}) => {
  return api.put(`/om/${id}`, data)
}

export const remove = (id: string) => {
  return api.delete(`/om/${id}`)
}

export const removeAll = () => {
  return api.delete(`/om`)
}

export const findBySource = (source:string) => {
  return api.get(`/om?source=${source}`)
}