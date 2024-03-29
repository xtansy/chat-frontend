import "./SignIn.scss";

import { Typography, Input, Button, Form, message } from "antd";
import { useNavigate } from "react-router-dom";

import {
    loginRules,
    passwordRules,
    ROUTES,
} from "@utils/constants";

import { fetchGetMe } from "@redux/userSlice";
import { signIn } from "@utils/api/requests/auth";
import { useAppDispatch } from "@store";

export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFinish = (values: signInProps) => {
        signIn(values)
            .then(res => {
                dispatch(fetchGetMe());
                navigate(ROUTES.HOME);
                message.success('Вы успешно авторизировались!');
            })
            .catch((error: ErrorBackend<{ message: string }>) => {
                const errorMessage = error.response.data.message;
                message.error(errorMessage);
            })
    };


    return (
        <div className="signIn">
            <Typography.Title className="signIn__title">Вход</Typography.Title>
            <div className="signIn__form">
                <Form onFinish={onFinish} name="signIn">
                    <Form.Item name="login" rules={loginRules}>
                        <Input placeholder="Логин" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={passwordRules}
                        hasFeedback
                    >
                        <Input.Password placeholder="Пароль" />
                    </Form.Item>

                    <Form.Item>
                        <Button
                            block
                            type="primary"
                            size="large"
                            htmlType="submit"
                        >
                            Авторизироваться
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
