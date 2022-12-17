import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { ROUTES } from "@utils/constants";
import { AuthPage, HomePage, ProfilePage } from "@pages";
import { userSliceSelector, userIsAuthSelector } from "@redux/userSlice/selectors";
import { useInitial } from "@utils/api/hooks";

const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route path={"*"} element={<Navigate to={ROUTES.AUTH} />} />
        </Routes>
    );
};

const App = () => {

    useInitial();

    const isAuth = useSelector(userIsAuthSelector);

    return (
        <>
            {!isAuth && <AuthApp />}
            {isAuth && (
                <Routes>
                    <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                    <Route path={"*"} element={<HomePage />} />
                </Routes>
            )}
        </>
    );
};

export default App;
