import axios from 'axios';

const api = axios.create({
    baseURL: "http://34.205.24.148:5000/"
});

export default api