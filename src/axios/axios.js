import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    'Access-Control-Allow-Origin' : '*'
});

export default instance;