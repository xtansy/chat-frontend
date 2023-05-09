import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const like = async (postId: Post["_id"]) => {
    const { data } = await api.patch<SimpleResponse>("post/like", { postId }, {
        headers: authHeader()
    });

    return data;
}