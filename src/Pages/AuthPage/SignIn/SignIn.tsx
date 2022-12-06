import { Typography, Input, Button, Form } from "antd";
import "./SignIn.scss";
import {
    loginRules,
    passwordRules,
    confirmPasswordRules,
    infoRules,
} from "@utils/constants";

interface SignInFormProps {
    login: string;
    password: string;
}

export const SignIn = () => {
    const onFinish = (values: SignInFormProps) => {
        console.log("Received values of form: ", values);
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
