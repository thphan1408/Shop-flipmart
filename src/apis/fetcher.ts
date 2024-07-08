import axios, { InternalAxiosRequestConfig } from 'axios'

const fetcher = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // headers: {
  //   'Content-Type': 'application/json',
  // },
})

fetcher.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
  const user = JSON.parse(localStorage.getItem('CURRENT_USER') || '{}')
  if (user) {
    config.headers.Authorization = `Bearer ${user.accessToken}`
  }
  return config
})

export default fetcher
