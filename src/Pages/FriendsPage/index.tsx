import "./FriendsPage.scss";

import { Typography } from "antd";
const { Title } = Typography;

import { ArrowToHome } from "@common";
import { Friends } from "./Friends/Friends";

export const FriendsPage = () => {
    return (
        <>
            <ArrowToHome />
            <div className="friendsWrapper">
                <div className="friendsPage">
                    <Title>Мои друзья:</Title>
                    <Friends />
                </div>
            </div>
        </>
    );
};

