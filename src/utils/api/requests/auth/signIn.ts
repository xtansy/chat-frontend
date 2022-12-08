import api from "../instance";

export const signIn = async (props: signInProps) => {
    const { data } = await api.post<signInResult>("/auth/signin", props);;
    localStorage.setItem("token", data.accessToken);
    return data;
};
