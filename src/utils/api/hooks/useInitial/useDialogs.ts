import { useEffect } from "react";
import { useSelector } from "react-redux";

import { userIsAuthSelector } from "@redux/userSlice/selectors";
import { fetchDialogs } from "@redux/dialogSlice";
import { useAppDispatch } from "@store";



export const useDialogs = () => {
    const isAuth = useSelector(userIsAuthSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchDialogs());
    }, [isAuth])
}