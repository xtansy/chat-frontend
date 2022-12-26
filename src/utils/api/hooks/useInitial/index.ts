import { useEffect } from "react"

import { useAuth } from "./useAuth";
import { useDialogs } from "./useDialogs";
import { useChat } from "../../../socket/hooks";

export const useInitial = () => {
    useAuth();
    useDialogs();
    useChat();
}