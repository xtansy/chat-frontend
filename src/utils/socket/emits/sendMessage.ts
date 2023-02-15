import { socket } from "..";


export const sendMessage = (obj: { dialogId: string; message: ChatMessageProps; userId: string }) => {
    socket.emit('message', obj)
}