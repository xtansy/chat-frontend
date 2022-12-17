import { useEffect } from "react";
import { useSelector } from "react-redux"
import { dialogsSelector } from "@redux/dialogSlice/selectors"
import { socket } from "..";
import { addMessage } from "@redux/dialogSlice";
import { useAppDispatch } from "@store";

export const useChat = () => {
    const dispatch = useAppDispatch();
    const dialogs = useSelector(dialogsSelector);

    const joinUserToDialogs = () => {
        const dialogIds = dialogs.map(item => item._id);
        socket.emit("join", dialogIds);
    }

    useEffect(() => {
        if (dialogs.length) {
            joinUserToDialogs();
        }
    }, [dialogs])

    const sendMessage = (obj: { dialogId: string; message: string }) => {
        socket.emit('message', obj)
    }

    useEffect(() => {
        socket.on("message", (obj) => {
            console.log("Пришел эмит от сервера", obj)
            dispatch(addMessage(obj));
        })
    }, [])

    return { sendMessage }
};