import { useEffect } from "react";
import { useSelector } from "react-redux"

import { dialogsSelector } from "@redux/dialogSlice/selectors"
import { socket } from "..";
import { addMessage } from "@redux/dialogSlice";
import { fetchDialogs } from "@redux/dialogSlice";
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

    useEffect(() => {
        socket.on("message", (obj) => {
            dispatch(addMessage(obj));
        })
        socket.on("createDialog", (obj) => {
            console.log(obj.text);
            dispatch(fetchDialogs());
        })
        socket.on("deleteDialog", (obj) => {
            console.log(obj.text);
            dispatch(fetchDialogs());
        })
    }, [])
};