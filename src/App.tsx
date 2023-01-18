import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "@utils/constants";
import { AuthPage, HomePage, ProfilePage, ChangeInfoPage } from "@pages";
import { userIsAuthSelector } from "@redux/userSlice/selectors";
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
                    <Route path={"*"} element={<HomePage />} />
                    <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
                    <Route path={ROUTES.CHANGE_INFO} element={<ChangeInfoPage />} />
                </Routes>
            )}
        </>
    );
};

export default App;
