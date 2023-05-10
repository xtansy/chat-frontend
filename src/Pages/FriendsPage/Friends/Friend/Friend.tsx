import "./Friend.scss";

import { Typography } from "antd";
const { Text } = Typography;

import { AvatarLinked, ButtonFriend } from "@common";

interface FriendProps {
    user: User;
}

export const Friend: React.FC<FriendProps> = ({ user }) => {
    return (
        <div className="friend">
            <div className="friend__left">
                <AvatarLinked avatar={user.avatar} id={user._id} />
                <div className="friend__info">
                    <Text>{user.name} {user.surname}</Text>
                    <Text type="secondary">{user.login}</Text>
                </div>
            </div>
            <ButtonFriend partner={user} />
        </div>
    );
};

