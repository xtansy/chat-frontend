import "./ChangePasswordPage.scss";

import { useState } from "react";
import { Avatar, Button, Form, message } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch } from "@store";


import { ArrowToHome, ModalUploadImage } from "@common";
import { userSelector, userLoadingSelector } from "@redux/userSlice/selectors";
import { passwordRules, confirmPasswordRules } from "@utils/constants";
import { changeUserPassword } from "@utils/api/requests/user";
import { fetchGetMe } from "@redux/userSlice";

import { FieldPassword } from "./FieldPassword/FieldPassword";

interface PasswordFields extends ChangePassword {
    newPasswordConfirmed: string;
}


export const ChangePasswordPage = () => {
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

    const onFinish = (values: PasswordFields) => {
        changeUserPassword(values)
            .then(res => {
                dispatch(fetchGetMe());
                message.success(res.message);
            })
            .catch(({ response }) => {
                const errorMessage = response.data.message;
                message.error(errorMessage);
            })
    };

    return (
        <>
            <ArrowToHome />
            <div className="profileWrapper">
                <div className="profile">
                    <div className="profile__header">
                        <ModalUploadImage open={open} setOpen={setOpen} />
                        <Avatar onClick={showModal} src={user.avatar} size={130} icon={<UserOutlined />} className="profile__header-avatar" />
                    </div>
                    <Form onFinish={onFinish} className="profile__info profile__info_editable">
                        <Form.Item noStyle>
                            <FieldPassword label="Старый пароль" rules={passwordRules} name={"oldPassword"} />
                        </Form.Item>
                        <Form.Item noStyle>
                            <FieldPassword label="Новый пароль" rules={passwordRules} name={"newPassword"} />
                        </Form.Item>
                        <Form.Item noStyle>
                            <FieldPassword label="Повторите новый пароль" rules={confirmPasswordRules("newPassword")} name={"newPasswordConfirmed"} dependencies={["newPassword"]} />
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

