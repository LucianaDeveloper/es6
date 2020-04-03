import axios from "axios";

const api = axios.create({ // create vai criar uma configuração do axios pra gente. Definindo uma baseUrl para a api todas as requisições vão partir desse endereço
  baseURL: "https://api.github.com",
});

export default api;