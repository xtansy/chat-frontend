import {
    UserOutlined,
    MoreOutlined,
    CloseCircleTwoTone,
    IdcardTwoTone
} from "@ant-design/icons";
import { Avatar, Typography, Popover } from "antd";
const { Text } = Typography;

import { useState } from "react";

interface ChatHeaderProps {
    name: User["name"];
    avatar: User["avatar"];
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ avatar, name }) => {
    const [open, setOpen] = useState(false);

    const onClickOpenPopover = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    const PopoverContent = () => {
        return (
            <div className="chat__header-popover">
                <div className="chat__header-popover__item chat__header-popover__item_linkTo">
                    <IdcardTwoTone className="chat__header-popover__item-icon" />
                    <Text className="chat__header-popover__item-text chat__header-popover__item-text_link">
                        Перейти на страницу
                    </Text>
                </div>
                <div className="chat__header-popover__item chat__header-popover__item_deleteUser">
                    <CloseCircleTwoTone twoToneColor="#eb2f96" className="chat__header-popover__item-icon" />
                    <Text type="danger" className="chat__header-popover__item-text">
                        Удалить пользователя
                    </Text>
                </div>
            </div>
        )
    }
    return (
        <div className="chat__header">
            <div className="chat__header-info">
                <Avatar src={avatar} size={34} icon={<UserOutlined width={47} />} />
                <div className="chatItem__info">
                    <Text strong>{name}</Text>
                </div>
            </div>
            <Popover
                placement="bottomRight"
                content={<PopoverContent />}
                title="Title"
                trigger="click"
                open={open}
                onOpenChange={onClickOpenPopover}
            >
                <MoreOutlined className="chat__header-icon" />
            </Popover>
        </div>
    );
};

