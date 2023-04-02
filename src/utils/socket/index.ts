import { io, Socket } from "socket.io-client";
// http://localhost:8080/
// https://chat-backend-production-4414.up.railway.app/
export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    "http://localhost:8080/"
);
