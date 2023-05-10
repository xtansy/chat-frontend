import axios from "axios";
// http://localhost:8080/
// https://chat-backend-nu.vercel.app

const URL = process.env.VITE_URL || "http://localhost:8080/";



const api = axios.create({
    baseURL: URL,
});

export default api;
