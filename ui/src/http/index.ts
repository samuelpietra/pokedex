import axios from 'axios'

import { errorInterceptor } from './errorInterceptor'
import { requestInterceptor } from './requestInterceptor'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

const http = axios.create({
  baseURL: 'http://localhost:8080/api',
})

http.interceptors.request.use(requestInterceptor)
http.interceptors.response.use(undefined, errorInterceptor)

export { http }
