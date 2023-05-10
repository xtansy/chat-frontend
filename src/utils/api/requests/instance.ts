import axios from "axios";
// http://localhost:8080/
// https://chat-backend-nu.vercel.app

console.log("process", process);
console.log("process.env", process.env);

const URL = process.env.REACT_APP_URL || "http://localhost:8080/";



const api = axios.create({
    baseURL: URL,
});

export default api;
