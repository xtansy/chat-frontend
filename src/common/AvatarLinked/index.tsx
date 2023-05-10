import { Avatar } from 'antd';
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";

interface AvatarLinkedProps {
    id: User["_id"];
    avatar: string;
}

export const AvatarLinked: React.FC<AvatarLinkedProps> = ({ id, avatar }) => {
    const navigate = useNavigate();
    const onClickAvatar = () => {
        navigate(`/profile/${id}`);
    }
    return (
        <Avatar
            onClick={onClickAvatar}
            className="post__header-avatar"
            size="large"
            src={undefined || avatar}
            icon={<UserOutlined />}
        />
    );
};

