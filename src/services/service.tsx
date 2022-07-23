import { api } from "../api/api"

export const create = <T extends {}>(url: string, data: T) => {
  return api.post<T>(`/${url}`, data)
}

export const createAll = <T extends {}>(url: string, data: T) => {
    return api.post<T[]>(`/${url}/createAll`, data)
}

export const getRetrieve = <T extends {}>(url: string) => {
  return api.get<T[]>(`/${url}/retrieve`)
}

export const getAll = (url: string) => {
  return api.get(`/${url}`)
}

export const retrieve = <T extends {}>(url: string, id: string) => {
  return api.get<T>(`/${url}/${id}`)
}

export const update = <T extends {}>(url: string, id: string, data: T) => {
  return api.put<T>(`/${url}/${id}`, data)
}

export const remove = (url: string, id: string) => {
  return api.delete(`/${url}/${id}`)
}

export const removeAll = (url: string) => {
  return api.delete(`/${url}`)
}

export const findBySource = <T extends {}>(url: string, source:string) => {
  return api.get<T[]>(`/${url}?source=${source}`)
}