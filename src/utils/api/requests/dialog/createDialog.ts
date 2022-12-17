import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const createDialog = async (props: createDialogProps) => {
    const { data } = await api.post<Response<Dialog>>("/dialog/create", props, {
        headers: authHeader()
    });

    return data;
}