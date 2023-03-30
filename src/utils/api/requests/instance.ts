import { BACKEND_URL } from "../../constants/backendUrl";
import axios from "axios";

const api = axios.create({
    baseURL: BACKEND_URL,
});

export default api;
