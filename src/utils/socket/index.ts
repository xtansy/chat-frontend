import { io, Socket } from "socket.io-client";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    "https://chat-backend-production-4414.up.railway.app/"
);
