import { useEffect } from "react";
import { useSelector } from "react-redux"

import { socket } from "..";
import { dialogsSelector } from "@redux/dialogSlice/selectors"
import { addMessage, fetchDialogs } from "@redux/dialogSlice";
import { useAppDispatch } from "@store";
import { userIdSelector } from "@redux/userSlice/selectors";

export const useChat = () => {
    const dispatch = useAppDispatch();

    const dialogs = useSelector(dialogsSelector);
    const userId = useSelector(userIdSelector);

    const joinUserToDialogs = () => {
        const dialogIds = dialogs.map(item => item._id);
        if (userId) {
            socket.emit("join", { dialogIds, userId });
        }
    }

    useEffect(() => {
        joinUserToDialogs();
    }, [dialogs])

    useEffect(() => {
        socket.on("message", (obj) => {
            dispatch(addMessage(obj));
        })
        socket.on("createDialog", (obj) => {
            console.log(obj);
            dispatch(fetchDialogs());
        })
        socket.on("deleteDialog", (obj) => {
            console.log(obj);
            dispatch(fetchDialogs());
        })
    }, [])
};