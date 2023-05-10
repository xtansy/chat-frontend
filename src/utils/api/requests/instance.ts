import axios from "axios";
// http://localhost:8080/
// https://chat-backend-nu.vercel.app

const URL = process.env.REACT_APP_URL || "http://localhost:8080/";

console.log("process", process);
console.log("process.env", process.env);

const api = axios.create({
    baseURL: URL,
});

export default api;
