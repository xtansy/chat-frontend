import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "@utils/constants";
import {
    AuthPage,
    HomePage,
    SettingsPage,
    ChangeInfoPage,
    ChangePasswordPage,
    ProfilePage,
    FriendsPage,
    LentaPage
} from "@pages";
import { userIsAuthSelector } from "@redux/userSlice/selectors";
import { useInitial } from "@utils/api/hooks";

const App = () => {
    useInitial();

    const isAuth = useSelector(userIsAuthSelector);

    return (
        <>
            <Routes>
                {isAuth ? (
                    <>
                        <Route path={"*"} element={<HomePage />} />
                        <Route
                            path={ROUTES.SETTINGS}
                            element={<SettingsPage />}
                        />
                        <Route
                            path={ROUTES.LENTA}
                            element={<LentaPage />}
                        />
                        <Route
                            path={ROUTES.FRIENDS}
                            element={<FriendsPage />}
                        />
                        <Route
                            path={ROUTES.PROFILE}
                            element={<ProfilePage />}
                        />
                        <Route
                            path={ROUTES.CHANGE_INFO}
                            element={<ChangeInfoPage />}
                        />
                        <Route
                            path={ROUTES.CHANGE_PASSWORD}
                            element={<ChangePasswordPage />}
                        />
                    </>
                ) : (
                    <Route path={"*"} element={<AuthPage />} />
                )}
            </Routes>
        </>
    );
};

export default App;
