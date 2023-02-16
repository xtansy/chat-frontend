import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const getMe = async () => {
    const { data } = await api.get<Response<User>>("users/getMe", {
        headers: authHeader()
    });
    return data;
}