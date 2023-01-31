import "./HomePage.scss";

import { useState } from "react";

import { HomeLeft } from "./HomeLeft";
import { HomeRight } from "./HomeRight";

export const HomePage = () => {
    const [activeDialogId, setActiveDialogId] = useState<null | Dialog["_id"]>(null);

    return (
        <div className="home">
            <HomeLeft setActiveDialogId={setActiveDialogId} />
            <HomeRight activeDialogId={activeDialogId} />
        </div>
    );
};
