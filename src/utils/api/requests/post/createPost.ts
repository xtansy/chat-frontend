import api from "../instance"
import { authHeader } from "../../helpers/authHeader";

export const createPost = async (props: CreatePostProps) => {
    const formData = new FormData();

    formData.append('text', props.text);

    if (props.imageFile) {
        formData.append('imageFile', props.imageFile);
    }

    const { data } = await api.post<Response<Post>>("/post/create", formData, {
        headers: authHeader()
    });

    return data;
}