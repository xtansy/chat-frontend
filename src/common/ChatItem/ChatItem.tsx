import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;
import "./ChatItem.scss";

interface ChatItemProps {
    name: string;
    message: string;
    url: string;
}

export const ChatItem: React.FC<ChatItemProps> = ({ name, message, url }) => {
    return (
        <div className="chatItem">
            <div className="chatItem__left">
                <Avatar size={64} icon={<UserOutlined />} />
                <div className="chatItem__info">
                    <Text>{name}</Text>
                    <Text type="secondary">{message}</Text>
                </div>
            </div>
            <div className="chatItem__right">
                <Text type="secondary">10:49</Text>
            </div>
            <hr />
        </div>
    );
};
