import { useState } from "react";
import { Button } from "antd";
import { notification } from 'antd';

import { SignUp } from "./SignUp/SignUp";
import { SignIn } from "./SignIn/SignIn";
import { succesSignUp, failedSignUp } from "@utils/constants";
import "./Auth.scss";

export const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const [api, contextHolder] = notification.useNotification();

    const onSuccesSignUp = () => {
        api.open(succesSignUp);
        setIsSignUp(false);
    };
    const onFailedSignUp = (errorMessage: string) => {
        const obj = failedSignUp(errorMessage)
        api.open(obj);
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
