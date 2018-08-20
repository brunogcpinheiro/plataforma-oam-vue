import axios from "axios";

const api = axios.create({
  baseURL: "http://plataforma-oam-vue-brunogcpinheiro.c9users.io:8080"
});

api.defaults.headers.get["Accepts"] = "application/json";
api.interceptors.request.use(config => {
    return config;
});
api.interceptors.response.use(res => {
    return res;
});

export default api;
