import axios from 'axios';

const api = axios.create({
    baseURL: "http://216.185.39.30:5000/"
});

export default api