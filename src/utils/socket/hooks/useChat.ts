import { useEffect } from "react";
import { useSelector } from "react-redux"

import { socket } from "..";
import { dialogsSelector } from "@redux/dialogSlice/selectors"
import { addMessage, fetchDialogs } from "@redux/dialogSlice";
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
            dispatch(fetchDialogs());
        })
        socket.on("deleteDialog", (obj) => {
            dispatch(fetchDialogs());
        })
    }, [])
};