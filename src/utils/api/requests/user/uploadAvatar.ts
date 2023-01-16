import api from "../instance";

import { authHeader } from "../../helpers/authHeader"
import { UploadFile } from "antd";
import { RcFile } from "antd/es/upload";

export const uploadAvatar = async (avatar: UploadFile) => {
    const formData = new FormData();
    formData.append("avatar", avatar as RcFile);
    const { data } = await api.post("/users/upload", formData, {
        headers: authHeader()
    });
    return data;
}
