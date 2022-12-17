import { useEffect } from "react";
import { fetchGetMe } from "@redux/userSlice";
import { useAppDispatch } from "@store";


export const useAuth = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetMe());
    }, [])
}