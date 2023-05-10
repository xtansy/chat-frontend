import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { userFriendsSelector } from "@redux/userSlice/selectors";
import { addFriend, removeFriend } from "@utils/api/requests/user";
import { addUserToFriends, removeUserFromFriends } from "@redux/userSlice";

interface ButtonFriendProps {
    partner: User;
}

export const ButtonFriend: React.FC<ButtonFriendProps> = ({ partner }) => {
    const dispatch = useDispatch();

    const friends = useSelector(userFriendsSelector);
    const isFriend = friends?.find(user => user._id === partner._id);

    const onClickAddFriend = () => {
        dispatch(addUserToFriends(partner));
        addFriend(partner._id);
    }

    const onClickRemoveFriend = () => {
        dispatch(removeUserFromFriends(partner._id));
        removeFriend(partner._id);
    }

    return (
        <>
            {
                !isFriend ? <Button onClick={onClickAddFriend}>Добавить в друзья</Button>
                    : <Button onClick={onClickRemoveFriend}>Удалить из друзей</Button>
            }

        </>
    );
};

