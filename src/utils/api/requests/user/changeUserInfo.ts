import { authHeader } from "../../helpers/authHeader"
import api from "../instance"

export const changeUserInfo = async (userInfo: UserInfo) => {
    const { data } = await api.post<SimpleResponse>("users/changeUserInfo", userInfo, {
        headers: authHeader()
    });
    return data;
}