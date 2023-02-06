import "./ChangeInfoPage.scss";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Avatar, Button, message, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";

import { ArrowToHome, ModalUploadImage } from "@common";
import { userSelector, userLoadingSelector } from "@redux/userSlice/selectors";
import { changeUserInfo } from "@utils/api/requests/user";
import { useAppDispatch } from "@store";
import { fetchGetMe } from "@redux/userSlice";

import {
    loginRules,
    infoRules,
    emailRules,
} from "@utils/constants";

import { FieldEditable } from "./FieldEditable/FieldEditable";

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


    if (!user) return null;

    const initialValues: UserInfo = {
        login: user.login,
        email: user.email,
        name: user.name,
        surname: user.surname
    };

    const onFinish = (values: UserInfo) => {
        changeUserInfo(values)
            .then(res => {
                dispatch(fetchGetMe());
                message.success(res.message);
            })
            .catch(({ response }) => {
                const errorMessage = response.data.message;
                message.error(errorMessage);
            })
    }

    return (
        <>
            <ArrowToHome />
            <div className="profileWrapper">
                <div className="profile">
                    <div className="profile__header">
                        <ModalUploadImage open={open} setOpen={setOpen} />
                        <Avatar onClick={showModal} src={user.avatar} size={130} icon={<UserOutlined />} className="profile__header-avatar" />
                    </div>
                    <Form initialValues={initialValues} onFinish={onFinish} className="profile__info profile__info_editable">
                        <Form.Item noStyle>
                            <FieldEditable label="Почта" name="email" rules={emailRules} />
                        </Form.Item>
                        <Form.Item noStyle>
                            <FieldEditable label="Логин" name="login" rules={loginRules} />
                        </Form.Item>
                        <Form.Item noStyle>
                            <FieldEditable label="Имя" name="name" rules={infoRules} />
                        </Form.Item>
                        <Form.Item noStyle>
                            <FieldEditable label="Фамилия" name="surname" rules={infoRules} />
                        </Form.Item>
                        <div className="profile__info_editable-buttons">
                            <Form.Item>
                                <Button
                                    className="profile__info_editable-buttons__button"
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                >
                                    Сохранить
                                </Button>
                            </Form.Item>
                            <Button
                                size="large"
                                disabled={userLoading}
                                className="profile__info_editable-buttons__button"
                                onClick={onClickBack}>
                                Назад
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
};

