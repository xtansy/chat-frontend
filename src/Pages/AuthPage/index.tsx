import "./Auth.scss";

import { useState } from "react";
import { Button, notification } from "antd";

import { SignUp } from "./SignUp/SignUp";
import { SignIn } from "./SignIn/SignIn";
import { successNotif, failedNotif } from "@utils/constants";

export const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    const [api, contextHolder] = notification.useNotification();

    const onSuccesSignUp = () => {
        const notifInfo = {
            message: 'Вы успешно зарегистрировались!',
            description:
                'Войдите в аккаунт, используя свои данные!',
        }
        api.open(successNotif(notifInfo));
        setIsSignUp(false);
    };
    const onFailedSignUp = (errorMessage: string) => {
        const notifInfo = {
            message: 'Произошла ошибка!',
            description:
                errorMessage,
        }
        api.open(failedNotif(notifInfo));
    };

    const buttonText = isSignUp ? "Войти" : "Нет Аккаутна?";

    return (
        <div className="wrapper">
            {contextHolder}
            <div className="authBlock">
                {isSignUp && <SignUp onSuccesSignUp={onSuccesSignUp} onFailedSignUp={onFailedSignUp} />}
                {!isSignUp && <SignIn />}
                <Button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="authBlock__button"
                    size="large"
                    type="text"
                    block
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    );
};
