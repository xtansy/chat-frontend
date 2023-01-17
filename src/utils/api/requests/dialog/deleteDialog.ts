import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const deleteDialog = async (dialogId: Dialog["_id"]) => {
    const { data } = await api.delete<{ message: string }>(`/dialog/delete/${dialogId}`, {
        headers: authHeader()
    });

    return data;
}

