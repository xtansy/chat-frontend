import "./ProfilePage.scss";

import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Typography } from "antd";
const { Text, Link, Title } = Typography;

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "@redux/userSlice";
import { userSelector } from "@redux/userSlice/selectors";
import { ROUTES } from "@utils/constants";
import { useAppDispatch } from "@store";
import { ModalUploadImage } from "@common";
import { Field } from "./Field/Field";

export const ProfilePage = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const user = useSelector(userSelector);

    const onClickArrow = () => {
        navigate(ROUTES.HOME);
    }

    const onClickLogout = () => {
        dispatch(logout());
    }

    // upload modal visible
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
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
                        <ModalUploadImage open={open} setOpen={setOpen} />
                        <Avatar onClick={showModal} src={user?.avatar} size={130} icon={<UserOutlined />} className="profile__header-avatar" />
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