import { useEffect, useState } from "react";

import { usePromise } from "./usePromise";
import { signUp } from "../requests/auth/signUp";
import { AxiosError } from "axios";

export const useSignUp = () => {
    const { data, isLoading, isError, setData, setError, setLoading, error } =
        usePromise<useSignUpResult>();

    const fetchSignUp = async (obj: signUpProps) => {
        try {
            setLoading(true);
            const result = await signUp(obj);
            setData(result.data);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.message);
            }
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
