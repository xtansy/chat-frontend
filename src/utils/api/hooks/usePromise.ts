import { useState } from "react";

export const usePromise = <T>() => {
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    return {
        error,
        errorMessage: error,
        isError: !!error,
        setError: (err: string) => {
            setError(err);
            setLoading(false);
        },
        data,
        isLoading,
        setLoading,
        setData: (data: T | null) => {
            setLoading(false);
            setError(null);
            setData(data);
        },
    };
};
