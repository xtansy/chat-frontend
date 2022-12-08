import { Input, Typography } from "antd";
const { Text } = Typography;
const { Search } = Input;
import { Link } from "react-router-dom";
import { ROUTES } from "@utils/constants";

import { ChatItem, HR, Chat } from "@common";
import "./HomePage.scss";

export const HomePage = () => {
    const onSearch = (value: string) => console.log(value);

    const isActive = true;
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
                <div className="home__left-chatItems">
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <HR />
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                    <div className="home__left-chatItems__chatItem">
                        <ChatItem name={"Андрей"} message={"Изображение"} />
                    </div>
                </div>
            </div>
            <div className="home__right">
                {!isActive && (
                    <div className="home__right-notif">
                        <Text type="secondary">
                            Выберите чат чтобы отправить сообщение
                        </Text>
                    </div>
                )}
                {isActive && <Chat />}
            </div>
        </div>
    );
};
