import { useEffect } from "react"
import { useSelector } from "react-redux";

import { useAuth } from "./useAuth";
import { useDialogs } from "./useDialogs";
import { useChat } from "../../../socket/hooks";
import { userIsAuthSelector } from "@redux/userSlice/selectors";

export const useInitial = () => {
    useAuth();

    useDialogs();
    useChat();
}