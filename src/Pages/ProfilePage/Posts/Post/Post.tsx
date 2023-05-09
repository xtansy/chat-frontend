import "./Post.scss";

import { Typography, Avatar, Image } from 'antd';
import { useNavigate } from "react-router-dom";
import { HeartTwoTone, UserOutlined } from "@ant-design/icons";
const { Text } = Typography;

interface PostProps {
    post: Post;
    onClickLike: () => void;
}

export const Post: React.FC<PostProps> = ({ post, onClickLike }) => {
    const navigate = useNavigate();
    const { text, likes, image } = post;
    const { name, avatar, _id } = post.user;

    const onClickAvatar = () => {
        navigate(`/profile/${_id}`);
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    onClick={onClickAvatar}
                    className="post__header-avatar"
                    size="large"
                    src={avatar}
                    icon={<UserOutlined />}
                />
                <div className="post__header-text">
                    <Text className="post__header-text__author">{name}</Text>
                    <Text type="secondary" className="post__header-text__timestamp">вчера в 14:34</Text>
                </div>
            </div>
            <div className="post__content">
                <Text>{text}</Text>
            </div>
            <div className="post__image">
                {image && <Image
                    key={image}
                    placeholder={
                        <Image
                            preview={false}
                            src={image}
                            width={75}
                            height={50}
                        />
                    }
                    src={image}
                    width={225}
                    height={150}
                />}
            </div>
            <div className="post__footer">
                <HeartTwoTone onClick={onClickLike} className="post__footer-svg" />
                <Text type="secondary" className="post__footer-likes">{likes.length}</Text>
            </div>
        </div>
    );
};

