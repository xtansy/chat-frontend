import { Typography, Input, Button } from "antd";
import { Form } from "antd";

import "./SignUp.scss";
import {
    loginRules,
    passwordRules,
    confirmPasswordRules,
    infoRules,
} from "@utils/constants";

interface SignUpFormProps {
    username: string;
    password: string;
    name: string;
    surname: string;
}

export const SignUp = () => {
    const onFinish = (values: SignUpFormProps) => {
        console.log("Received values of form: ", values);
    };
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
                        rules={confirmPasswordRules}
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
