import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const getPostsByUserId = async (userId: User["_id"]) => {
    const { data } = await api.get<Response<Post[]>>(`/post/${userId}`, {
        headers: authHeader()
    });

    return data;
}