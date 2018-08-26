import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
});

api.defaults.headers.get["Accepts"] = "application/json";
api.interceptors.request.use(config => {
  return config;
});
api.interceptors.response.use(res => {
  return res;
});

export default api;
