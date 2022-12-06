import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;
import "./ChatItem.scss";

import { HR } from "@common";

interface ChatItemProps {
    name: string;
    message: string;
}

export const ChatItem: React.FC<ChatItemProps> = ({ name, message }) => {
    return (
        <div className="chatItem">
            <div className="chatItem__left">
                <Avatar size={47} icon={<UserOutlined width={47} />} />
                <div className="chatItem__info">
                    <Text strong>{name}</Text>
                    <Text type="secondary">{message}</Text>
                </div>
            </div>
            <div className="chatItem__right">
                <Text type="secondary">10:49</Text>
            </div>
        </div>
    );
};
