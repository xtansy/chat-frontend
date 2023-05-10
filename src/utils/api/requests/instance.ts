import axios from "axios";
// http://localhost:8080/
// https://chat-backend-nu.vercel.app

console.log(import.meta.env);
const BACKEND_URL = import.meta.env.VITE_URL;
console.log("BACKEND_URL", BACKEND_URL);

const URL = BACKEND_URL || "http://localhost:8080/";
console.log("URL", URL);


const api = axios.create({
    baseURL: URL,
});

export default api;
