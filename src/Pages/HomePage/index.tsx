import { Input, Typography } from "antd";
const { Text } = Typography;
const { Search } = Input;
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import "./HomePage.scss";
import { ROUTES } from "@utils/constants";
import { Chat } from "./Chat/Chat";
import { addMessage, fetchCreateDialog } from "@redux/dialogSlice";
import { useAppDispatch } from "@store";
import { ChatItems } from "./ChatItems";
import { useChat } from "../../utils/socket/hooks";
import { socket } from "../../utils/socket";

export const HomePage = () => {
    const dispatch = useAppDispatch();

    const [activeDialog, setActiveDialog] = useState<null | Dialog>(null);

    const onSearch = (value: string) => {
        dispatch(fetchCreateDialog({ partnerLogin: value }))
    };

    const { sendMessage } = useChat();
    const isActive = !!activeDialog;

    return (
        <div className="home">
            <div className="home__left">
                <Text className="home__left-title" type="secondary">
                    <Link to={ROUTES.PROFILE}>Профиль</Link>
                </Text>
                <Search
                    className="home__left-input"
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                />
                <ChatItems setActiveDialog={setActiveDialog} />
            </div>
            <div className="home__right">
                {!isActive && (
                    <div className="home__right-notif">
                        <Text type="secondary">
                            Выберите чат чтобы отправить сообщение
                        </Text>
                    </div>
                )}
                {isActive && <Chat dialog={activeDialog} sendMessage={sendMessage} />}
            </div>
        </div>
    );
};
