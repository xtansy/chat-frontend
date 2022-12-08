import api from "../instance";

export const signUp = async (data: signUpProps) => {
    return await api.post<useSignUpResult>("/auth/signup", data);
};
