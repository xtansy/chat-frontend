import { socket } from "..";


export const sendMessage = (obj: { dialogId: string; message: string }) => {
    socket.emit('message', obj)
}