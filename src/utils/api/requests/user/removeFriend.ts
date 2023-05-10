import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const removeFriend = async (partnerId: User["_id"]) => {
    const { data } = await api.patch<SimpleResponse>("users/removeFriend", { partnerId }, {
        headers: authHeader()
    });
    return data;
}