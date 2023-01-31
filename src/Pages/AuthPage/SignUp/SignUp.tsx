import "./SignUp.scss";

import { Typography, Input, Button } from "antd";
import { Form } from "antd";
import { useEffect } from "react";

import {
    loginRules,
    passwordRules,
    confirmPasswordRules,
    infoRules,
    emailRules,
} from "@utils/constants";
import { useSignUp } from "@utils/api/hooks";

interface SignUpProps {
    onSuccesSignUp: () => void;
    onFailedSignUp: (errorMessage: string) => void;
}

export const SignUp: React.FC<SignUpProps> = ({ onSuccesSignUp, onFailedSignUp }) => {
    const { data, isLoading, isError, fetchSignUp, error } = useSignUp();

    const onFinish = (values: signUpProps & { confirm: string }) => {
        const { confirm, ...obj } = values;
        fetchSignUp(obj);
    };

    useEffect(() => {
        if (!error && !!data) {
            onSuccesSignUp();
            return;
        }
        if (error) {
            onFailedSignUp(error);
        }
    }, [data, error])


    return (
        <div className="signUp">
            <Typography.Title className="signUp__title">
                Регистрация
            </Typography.Title>
            <div className="signUp__form">
                <Form onFinish={onFinish} name="signUp">
                    <Form.Item name="login" rules={loginRules}>
                        <Input placeholder="Логин" />
                    </Form.Item>
                    <Form.Item name="email" rules={emailRules}>
                        <Input placeholder="Эмайл" />
                    </Form.Item>
                    <Form.Item name="name" rules={infoRules}>
                        <Input placeholder="Имя" />
                    </Form.Item>
                    <Form.Item name="surname" rules={infoRules}>
                        <Input placeholder="Фамилия" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={passwordRules}
                        hasFeedback
                    >
                        <Input.Password placeholder="Пароль" />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        dependencies={["password"]}
                        hasFeedback
                        rules={confirmPasswordRules("password")}
                    >
                        <Input.Password placeholder="Повторите пароль" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className="signUp__button"
                            type="primary"
                            size="large"
                            htmlType="submit"
                        >
                            Зарегистрироваться
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
