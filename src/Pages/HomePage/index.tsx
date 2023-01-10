import { useState } from "react";

import "./HomePage.scss";
import { HomeLeft } from "./HomeLeft";
import { HomeRight } from "./HomeRight";
import { PartnerNotFound } from "../../common/Notifications/PartnerNotFound";

export const HomePage = () => {
    const [activeDialogId, setActiveDialogId] = useState<null | Dialog["_id"]>(null);

    return (
        <div className="home">
            <HomeLeft setActiveDialogId={setActiveDialogId} />
            <HomeRight activeDialogId={activeDialogId} />
            <PartnerNotFound />
        </div>
    );
};
