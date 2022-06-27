import axios from 'axios'

const api = axios.create({
    baseURL: 'https://receitas'
});

export default api;