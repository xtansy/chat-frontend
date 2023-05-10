import dotenv from "dotenv";
import axios from "axios";
dotenv.config();
// http://localhost:8080/
// https://chat-backend-nu.vercel.app

const api = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:8080/",
});

export default api;
