import "./PostAddForm.scss";

import { useState } from "react";
import { Input, Button } from "antd";
const { TextArea } = Input;

import { createPost } from "@utils/api/requests/post";

import { ImageLoadedList, PaperPicker } from "@common";

interface PostAddFormProps {
    onAddNewPost: (post: Post) => void;
}

export const PostAddForm: React.FC<PostAddFormProps> = ({ onAddNewPost }) => {

    const [post, setPost] = useState<string>("");
    const [imageFiles, setFiles] = useState<File[]>([]);

    const onChangePostText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const targetText = e.target.value;
        setPost(targetText);
    }

    const onClickCreatePost = async () => {
        const { data } = await createPost({ text: post, imageFile: imageFiles[0] });
        onAddNewPost(data);
        setPost("");
        setFiles([]);
    }

    return (
        <div className="postsWrapper__add">
            <TextArea
                showCount
                maxLength={500}
                value={post}
                placeholder="Новый пост"
                autoSize={{ minRows: 2, maxRows: 6 }}

                allowClear
                onChange={onChangePostText}
            />
            <div className="postsWrapper__content">
                <PaperPicker MAX_IMAGES={1} setImagesFiles={setFiles} />
                <Button onClick={onClickCreatePost} className="postsWrapper__add-button">Опубликовать</Button>
            </div>
            <ImageLoadedList imageFiles={imageFiles} setImagesFiles={setFiles} />
        </div>
    );
};

