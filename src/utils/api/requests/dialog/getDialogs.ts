import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const getDialogs = async () => {
    const { data } = await api.get<Response<Dialog[]>>("/dialog/getMyDialogs", {
        headers: authHeader()
    });

    return data;
}