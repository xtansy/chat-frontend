import { io, Socket } from "socket.io-client";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    process.env.BACKEND_URL || "http://localhost:8080/"
);
