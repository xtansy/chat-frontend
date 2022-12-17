import { useSelector } from "react-redux"
import { useEffect } from "react"

import { dialogsSelector } from "@redux/dialogSlice/selectors"
import { socket } from ".."

export const useJoin = () => {

    const dialogs = useSelector(dialogsSelector);

    useEffect(() => {
        dialogs.forEach((item) => {
            socket.emit("join", { dialogId: item._id });
        })
    }, [])
}