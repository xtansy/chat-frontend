import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const changeUserPassword = async (passwords: ChangePasswordProps) => {
    const { data } = await api.post<SimpleResponse>("users/changeUserPassword", passwords, {
        headers: authHeader()
    });
    return data;
}