import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import 'overlayscrollbars/overlayscrollbars.css';
import "./assets/scss/global.scss";

import { store } from "@store";

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
