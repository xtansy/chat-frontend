import { useState } from "react";
import { Button } from "antd";

import { SignUp } from "./SignUp/SignUp";
import { SignIn } from "./SignIn/SignIn";
import "./Auth.scss";

export const AuthPage = () => {
    const [isSignUp, setIsSignUp] = useState<boolean>(false);

    const buttonText = isSignUp ? "Войти" : "Нет Аккаутна?";

    return (
        <div className="wrapper">
            <div className="authBlock">
                {isSignUp && <SignUp />}
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
