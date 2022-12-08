import { Routes, Route, Navigate } from "react-router-dom";

import { ROUTES } from "@utils/constants";

import { AuthPage, HomePage, ProfilePage } from "@pages";

const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
            <Route path={"*"} element={<Navigate to={ROUTES.AUTH} />} />
        </Routes>
    );
};

const App = () => {
    const isAuth = false;

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
