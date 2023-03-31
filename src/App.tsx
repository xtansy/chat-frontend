import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { ROUTES } from "@utils/constants";
import {
    AuthPage,
    HomePage,
    ProfilePage,
    ChangeInfoPage,
    ChangePasswordPage,
    NotFoundPage,
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
                        <Route path={ROUTES.HOME} element={<HomePage />} />
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
                    <Route path={ROUTES.AUTH} element={<AuthPage />} />
                )}
                <Route path={"*"} element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default App;
