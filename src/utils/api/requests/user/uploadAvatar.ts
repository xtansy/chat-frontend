import api from "../instance";

import { authHeader } from "../../helpers/authHeader"

export const uploadAvatar = async (avatar: File) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    const { data } = await api.post("/users/upload", formData, {
        headers: authHeader()
    });
    return data;
}
