import axios from "axios";

const http = axios.create({
  baseURL: "https://pokeapi.co/api",
  timeout: 5000,
});

export { http };
