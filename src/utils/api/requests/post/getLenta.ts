import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const getLenta = async () => {
    const { data } = await api.get<Response<Post[]>>("/post/getLenta", {
        headers: authHeader()
    });

    return data;
}