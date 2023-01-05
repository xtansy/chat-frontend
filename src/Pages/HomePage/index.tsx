import { Input, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
const { Text } = Typography;
const { Search } = Input;
import { Link } from "react-router-dom";
import { useState } from "react";

import "./HomePage.scss";
import { ROUTES } from "@utils/constants";
import { Chat } from "./Chat/Chat";
import { fetchCreateDialog } from "@redux/dialogSlice";
import { useAppDispatch } from "@store";
import { ChatItems } from "./ChatItems";

export const HomePage = () => {
    const dispatch = useAppDispatch();

    const [activeDialogId, setActiveDialogId] = useState<null | Dialog["_id"]>(null);

    const onSearch = (value: string) => {
        dispatch(fetchCreateDialog({ partnerLogin: value }))
    };

    const isActive = !!activeDialogId;

    return (
        <div className="home">
            <div className="home__left">
                <div className="home__left-menu">
                    <Text className="home__left-menu__title" type="secondary">
                        <Link to={ROUTES.PROFILE}>Профиль</Link>
                    </Text>
                    <FormOutlined className="home__left-menu__icon" />
                </div>

                <Search
                    className="home__left-input"
                    placeholder="Поиск среди контактов"
                    allowClear
                    onSearch={onSearch}
                />
                <ChatItems setActiveDialogId={setActiveDialogId} />
            </div>
            <div className="home__right">
                {!isActive && (
                    <div className="home__right-notif">
                        <Text type="secondary">
                            Выберите чат чтобы отправить сообщение
                        </Text>
                    </div>
                )}
                {isActive && <Chat dialogId={activeDialogId} />}
            </div>
        </div>
    );
};
