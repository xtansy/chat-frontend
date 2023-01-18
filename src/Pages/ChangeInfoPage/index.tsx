import "./ChangeInfoPage.scss";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, message } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ArrowToHome, ModalUploadImage } from "@common";
import { userSelector, userLoadingSelector } from "@redux/userSlice/selectors";
import { FieldEditable } from "./FieldEditable/FieldEditable";
import { changeUserInfo } from "@utils/api/requests/user";
import { useAppDispatch } from "@store";
import { fetchGetMe } from "@redux/userSlice";

export const ChangeInfoPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const user = useSelector(userSelector);
    const userLoading = useSelector(userLoadingSelector);

    // avatar modal visible
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    }
    //

    const onClickBack = () => {
        navigate(-1);
    }

    const onClickChangeUserInfo = () => {
        changeUserInfo(
            {
                name: nameEditable,
                email: emailEditable,
                login: loginEditable,
                surname: surnameEditable
            })
            .then(res => {
                dispatch(fetchGetMe());
                message.success(res.message);
            })
            .catch(({ response }) => {
                const errorMessage = response.data.message;
                message.error(errorMessage);
            })
    }

    if (!user) return null;

    const [emailEditable, setEmailEditable] = useState(user.email);

    const [loginEditable, setLoginEditable] = useState(user.login);

    const [nameEditable, setNameEditable] = useState(user.name);

    const [surnameEditable, setSurnameEditable] = useState(user.surname);

    return (
        <>
            <ArrowToHome />
            <div className="profileWrapper">
                <div className="profile">
                    <div className="profile__header">
                        <ModalUploadImage open={open} setOpen={setOpen} />
                        <Avatar onClick={showModal} src={user?.avatar} size={130} icon={<UserOutlined />} className="profile__header-avatar" />
                    </div>
                    <div className="profile__info profile__info_editable">
                        <FieldEditable
                            editableStr={emailEditable}
                            setEditableStr={setEmailEditable}
                            name={"Почта"} />
                        <FieldEditable
                            editableStr={loginEditable}
                            setEditableStr={setLoginEditable}
                            name={"Логин"} />
                        <FieldEditable
                            editableStr={nameEditable}
                            setEditableStr={setNameEditable}
                            name={"Имя"} />
                        <FieldEditable
                            editableStr={surnameEditable}
                            setEditableStr={setSurnameEditable}
                            name={"Фамилия"} />
                    </div>
                    <div className="profile__settings profile__settings_editable">
                        <Button
                            loading={userLoading}
                            disabled={userLoading}
                            onClick={onClickChangeUserInfo}
                            type="primary"
                            className="profile__settings_editable__button">
                            Сохранить
                        </Button>
                        <Button
                            disabled={userLoading}
                            className="profile__settings_editable__button"
                            onClick={onClickBack}>
                            Назад
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

