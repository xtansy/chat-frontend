import { io, Socket } from "socket.io-client";
// for local use    http://localhost:8080/
// for deploy use   https://chat-backend-nu.vercel.app

const BACKEND_URL = import.meta.env.VITE_URL;
const LOCAL_URL = "http://localhost:8080/"

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    BACKEND_URL
);
