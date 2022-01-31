import { api } from "../api/axios"

export const create = (data:{}) => {
  return api.post(`/observation`, data)
}

export const getRetrieve = () => {
  return api.get(`/observation/retrieve`)
}

export const getAll = () => {
  return api.get(`/observation`)
}

export const retrieve = (id: string) => {
  return api.get(`/observation/${id}`)
}

export const update = (id: string, data: {}) => {
  return api.put(`/observation/${id}`, data)
}

export const remove = (id: string) => {
  return api.delete(`/observation/${id}`)
}

export const removeAll = () => {
  return api.delete(`/observation`)
}

export const findBySource = (source:string) => {
  return api.get(`/observation?source=${source}`)
}