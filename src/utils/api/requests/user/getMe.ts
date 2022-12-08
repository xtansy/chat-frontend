import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const getMe = async () => {
    const { data } = await api.get<Response<UserResponse>>("users/getMe", {
        headers: authHeader()
    });
    return data;
}