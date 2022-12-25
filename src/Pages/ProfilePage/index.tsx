import "./ProfilePage.scss";

import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const { Text, Link } = Typography;
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "@utils/constants";
import { Field } from "./Field/Field";
import { logout } from "@redux/userSlice";
import { useAppDispatch } from "@store";
import { userSelector } from "@redux/userSlice/selectors";

export const ProfilePage = () => {
    const user = useSelector(userSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onClickArrow = () => {
        navigate(ROUTES.HOME);
    }
    const onClickLogout = () => {
        dispatch(logout());
    }
    return (
        <>
            <div className="arrowWrapper">
                <ArrowLeftOutlined
                    onClick={onClickArrow}
                    className="arrowWrapper__arrow"
                    style={{
                        fontSize: 40,
                    }}
                />
            </div>
            <div className="profileWrapper">
                <div className="profile">
                    <div className="profile__header">
                        <Avatar size={130} icon={<UserOutlined />} />
                        <Title className="profile__header-title">{user?.name}</Title>
                    </div>
                    <div className="profile__info">
                        <Field Component={Text} name={"Почта"} value={user?.email} />
                        <Field Component={Text} name={"Логин"} value={user?.login} />
                        <Field Component={Text} name={"Имя"} value={user?.name} />
                        <Field Component={Text} name={"Фамилия"} value={"surname"} />
                    </div>
                    <div className="profile__settings">
                        <Field Component={Link} name={"Изменить данные"} />
                        <Field Component={Link} name={"Изменить пароль"} />
                        <Field onClick={onClickLogout} Component={Link} name={"Выйти"} nameType="danger" />
                    </div>
                </div>
            </div>
        </>
    );
};