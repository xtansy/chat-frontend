import { Routes, Route } from "react-router-dom";

import { ROUTES } from "@utils/constants";

import { AuthPage, HomePage } from "@pages";

const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
        </Routes>
    );
};

const App = () => {
    const isAuth = true;

    return <>{isAuth ? <HomePage /> : <AuthPage />}</>;
};

export default App;
