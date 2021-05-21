import axios from 'axios'

export const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/real-world-nuxt',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
