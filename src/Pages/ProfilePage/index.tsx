import "./ProfilePage.scss";

import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Typography } from "antd";
const { Text, Link, Title } = Typography;

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout } from "@redux/userSlice";
import { userSelector } from "@redux/userSlice/selectors";
import { useAppDispatch } from "@store";
import { ModalUploadImage, ArrowToHome } from "@common";
import { Field } from "./Field/Field";
import { ROUTES } from "@utils/constants";

export const ProfilePage = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useSelector(userSelector);

    const onClickLogout = () => {
        dispatch(logout());
    }

    const onClickChangeInfo = () => {
        navigate(ROUTES.CHANGE_INFO);
    }

    // upload modal visible
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    }

    return (
        <>

            <ArrowToHome />

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
                        <Field Component={Link} onClick={onClickChangeInfo} name={"Изменить данные"} />
                        <Field Component={Link} name={"Изменить пароль"} />
                        <Field onClick={onClickLogout} Component={Link} name={"Выйти"} nameType="danger" />
                    </div>
                </div>
            </div>
        </>
    );
};