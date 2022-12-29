import { socket } from "..";


export const sendMessage = (obj: { dialogId: string; text: string; userId: string }) => {
    socket.emit('message', obj)
}