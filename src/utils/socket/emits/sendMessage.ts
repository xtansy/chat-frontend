import { socket } from "..";


export const sendMessage = (obj: { dialogId: string; message: ChatMessage; userId: string }) => {
    socket.emit('message', obj)
}