import axios from "axios";
// http://localhost:8080/
// https://chat-backend-nu.vercel.app

const BACKEND_URL = import.meta.env.VITE_URL;
const URL = BACKEND_URL || "http://localhost:8080/";

const api = axios.create({
    baseURL: URL,
});

export default api;
