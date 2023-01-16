import { Avatar, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Text } = Typography;
import "./ChatItem.scss";

import { formatDateMessage } from "@utils/helpers";

interface ChatItemProps {
    name: User["name"];
    message: Message | undefined;
    avatar: User["avatar"]
}

export const ChatItem: React.FC<ChatItemProps> = ({ name, message, avatar }) => {

    const formatDate = message ? formatDateMessage(message.createdAt) : null;
    return (
        <div className="chatItem">
            <div className="chatItem__left">
                <Avatar src={avatar} size={47} icon={<UserOutlined width={47} />} />
                <div className="chatItem__info">
                    <Text strong>{name}</Text>
                    <Text type="secondary">{message?.text}</Text>
                </div>
            </div>
            <div className="chatItem__right">
                <Text type="secondary">{formatDate}</Text>
            </div>
        </div>
    );
};
