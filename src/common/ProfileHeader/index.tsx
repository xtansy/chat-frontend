import "./ProfileHeader.scss";

import { UserOutlined } from "@ant-design/icons";
import { Typography, Avatar } from "antd";
const { Title } = Typography;
import classNames from "classnames";

import { useState } from "react";

import { ModalUploadImage } from "@common";

interface ProfileHeaderProps {
    avatar: User["avatar"];
    name: User["name"];
    isMe: boolean;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, avatar, isMe }) => {
    // upload modal visible
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    return (
        <div className="profile__header">
            {isMe && <ModalUploadImage open={open} setOpen={setOpen} />}
            <Avatar
                onClick={showModal}
                src={avatar}
                size={130}
                icon={<UserOutlined />}
                className={classNames({ "profile__header-avatar": isMe })}
            />
            <Title className="profile__header-title">
                {name}
            </Title>
        </div>
    );
};

