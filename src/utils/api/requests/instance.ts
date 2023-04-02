import axios from "axios";
// http://localhost:8080/
// https://chat-backend-production-4414.up.railway.app/

const api = axios.create({
    baseURL: "http://localhost:8080/",
});

export default api;
