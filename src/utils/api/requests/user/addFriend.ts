import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const addFriend = async (partnerId: User["_id"]) => {
    const { data } = await api.patch<SimpleResponse>("users/addFriend", { partnerId }, {
        headers: authHeader()
    });
    return data;
}