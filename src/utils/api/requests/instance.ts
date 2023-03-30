import axios from "axios";

const api = axios.create({
    baseURL: "https://chat-backend-production-4414.up.railway.app/",
});

export default api;
