import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ROUTES } from "@utils/constants";
import { AuthPage, HomePage, ProfilePage } from "@pages";
import { userSliceSelector } from "@redux/userSlice/selectors";

const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route path={"*"} element={<Navigate to={ROUTES.AUTH} />} />
        </Routes>
    );
};

const App = () => {
    const navigate = useNavigate();

    const { isAuth } = useSelector(userSliceSelector);

    useEffect(() => {
        if (isAuth) {
            navigate(ROUTES.HOME);
            return;
        }
        navigate(ROUTES.AUTH);
    }, [isAuth])

    console.log("isAuth", isAuth);

    return (
        <>
            {!isAuth && <AuthPage />}
            {isAuth && (
                <Routes>
                    <Route path={ROUTES.HOME} element={<HomePage />} />
                    <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                </Routes>
            )}
        </>
    );
};

export default App;
