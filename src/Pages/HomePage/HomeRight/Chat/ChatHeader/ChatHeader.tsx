import {
    UserOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import { Avatar, Typography } from "antd";
const { Text } = Typography;

interface ChatHeaderProps {
    name: User["name"];
    avatar: User["avatar"];
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ avatar, name }) => {
    return (
        <div className="chat__header">
            <div className="chat__header-info">
                <Avatar src={avatar} size={34} icon={<UserOutlined width={47} />} />
                <div className="chatItem__info">
                    <Text strong>{name}</Text>
                </div>
            </div>

            <MoreOutlined
                style={{
                    fontSize: "25px",
                    cursor: "pointer",
                }}
            />
        </div>
    );
};

