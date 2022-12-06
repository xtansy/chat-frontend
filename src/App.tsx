import { Routes, Route } from "react-router-dom";

import { ROUTES } from "@utils/constants";

import { AuthPage } from "./Pages/AuthPage";

const AuthApp = () => {
    return (
        <Routes>
            <Route path={ROUTES.AUTH} element={<AuthPage />} />
        </Routes>
    );
};

const App = () => {
    return <AuthApp />;
};

export default App;
