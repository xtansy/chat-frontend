import "./ProfilePage.scss";

import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const { Text, Link } = Typography;

export const ProfilePage = () => {
    return (
        <>
            <div className="arrowWrapper">
                <ArrowLeftOutlined
                    className="arrowWrapper__arrow"
                    style={{
                        fontSize: 40,
                    }}
                />
            </div>
            <div className="profile">
                <div className="profile__header">
                    <Avatar size={130} icon={<UserOutlined />} />
                    <Title>Ваня</Title>
                </div>
                <div className="profile__info">
                    <div className="profile__info-item">
                        <Text>Почта</Text>
                        <Text type="secondary">pochta@bk.ru</Text>
                    </div>
                    <div className="profile__info-item">
                        <Text>Почта</Text>
                        <Text type="secondary">pochta@bk.ru</Text>
                    </div>
                    <div className="profile__info-item">
                        <Text>Почта</Text>
                        <Text type="secondary">pochta@bk.ru</Text>
                    </div>
                    <div className="profile__info-item">
                        <Text>Почта</Text>
                        <Text type="secondary">pochta@bk.ru</Text>
                    </div>
                </div>
                <div className="profile__settings">
                    <Link href="https://ant.design" target="_blank">
                        Изменить данные
                    </Link>
                    <Link href="https://ant.design" target="_blank">
                        Изменить пароль
                    </Link>
                    <Text type="danger">Выйти</Text>
                </div>
            </div>
        </>
    );
};