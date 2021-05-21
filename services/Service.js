import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'http://localhost:3500',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
