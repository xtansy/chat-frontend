import { useSelector } from "react-redux"
import { useEffect } from "react"

import { dialogsSelector } from "@redux/dialogSlice/selectors"
import { socket } from ".."

export const useJoin = () => {

    const dialogs = useSelector(dialogsSelector);

    useEffect(() => {
        const Ids = dialogs.map(item => item._id);
        socket.emit("join", Ids);
    }, [])
}