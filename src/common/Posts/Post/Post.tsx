import "./Post.scss";

import { Typography, Image } from 'antd';
import { HeartTwoTone } from "@ant-design/icons";

const { Text } = Typography;

import { AvatarLinked } from "@common";
import { formatDateInPost } from "@utils/helpers";

interface PostProps {
    post: Post;
    onClickLike: () => void;
}

export const Post: React.FC<PostProps> = ({ post, onClickLike }) => {
    const { text, likes, image, createdAt } = post;
    const { name, avatar, _id } = post.user;

    return (
        <div className="post">
            <div className="post__header">
                <AvatarLinked
                    id={_id}
                    avatar={avatar}
                />
                <div className="post__header-text">
                    <Text className="post__header-text__author">{name}</Text>
                    <Text type="secondary" className="post__header-text__timestamp">{formatDateInPost(createdAt)}</Text>
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

