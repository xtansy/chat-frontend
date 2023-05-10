import "./Friends.scss";

import { useSelector } from "react-redux";

import { userFriendsSelector } from "@redux/userSlice/selectors";
import { Friend } from "./Friend/Friend";

export const Friends = () => {
    const friends = useSelector(userFriendsSelector);

    if (!friends) return null;
    return (
        <div className="friends">
            {friends.map(item => <Friend key={item._id} user={item} />)}
        </div>
    );
};

