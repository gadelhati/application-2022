import { api } from "../api/api"
import { Observation } from "../components/observation/observation"

export const create = (data:{}) => {
  return api.post<Observation>(`/observation`, data)
}

export const getRetrieve = () => {
  return api.get<Observation[]>(`/observation/retrieve`)
}

export const getAll = () => {
  return api.get(`/observation`)
}

export const retrieve = (id: string) => {
  return api.get<Observation>(`/observation/${id}`)
}

export const update = (id: string, data: {}) => {
  return api.put<Observation>(`/observation/${id}`, data)
}

export const remove = (id: string) => {
  return api.delete(`/observation/${id}`)
}

export const removeAll = () => {
  return api.delete(`/observation`)
}

export const findBySource = (source:string) => {
  return api.get<Observation[]>(`/observation?source=${source}`)
}