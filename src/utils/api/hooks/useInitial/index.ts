import { useEffect } from "react"

import { useAuth } from "./useAuth";
import { useDialogs } from "./useDialogs";

export const useInitial = () => {
    useAuth();
    useDialogs();
}