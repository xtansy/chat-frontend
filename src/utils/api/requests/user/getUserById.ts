import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const getUserById = async (userId: User["_id"]) => {
    const { data } = await api.get<Response<User>>(`users/${userId}`, {
        headers: authHeader()
    });
    return data;
}