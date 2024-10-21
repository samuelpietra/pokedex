import axios from 'axios';
import { errorInterceptor } from './errorInterceptor';

const http = axios.create({
  baseURL: 'https://pokeapi.co/api',
  timeout: 5000,
});

http.interceptors.response.use(undefined, errorInterceptor);

export { http };
