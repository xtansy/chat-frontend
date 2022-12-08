import { useEffect, useState } from "react";

import { usePromise } from "./usePromise";
import { signUp } from "../requests/auth/signUp";

export const useSignUp = () => {
    const { data, isLoading, isError, setData, setError, setLoading, error } =
        usePromise<useSignUpResult>();

    const fetchSignUp = async (obj: signUpProps) => {
        try {
            setLoading(true);
            const result = await signUp(obj);
            setData(result.data);
        } catch (error: any) {
            setError(error);
        }
    };

    return {
        error,
        data,
        isLoading,
        isError,
        fetchSignUp,
    };
};
