import axios from "axios";
// for local use    http://localhost:8080/
// for deploy use   https://chat-backend-nu.vercel.app

const BACKEND_URL = import.meta.env.VITE_URL;
const LOCAL_URL = "http://localhost:8080/"

const api = axios.create({
    baseURL: BACKEND_URL,
});

export default api;
