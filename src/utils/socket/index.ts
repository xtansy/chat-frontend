import { BACKEND_URL } from "../constants/backendUrl";
import { io, Socket } from "socket.io-client";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(BACKEND_URL);
