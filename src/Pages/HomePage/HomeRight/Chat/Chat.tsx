import { useSelector } from "react-redux";

import "./Chat.scss";
import { dialogsSelector } from "@redux/dialogSlice/selectors";
import { userSelector } from '@redux/userSlice/selectors';

import { ChatHeader } from "./ChatHeader/ChatHeader";
import { ChatFooter } from "./ChatFooter/ChatFooter";
import { Messages } from "./Messages/Messages";

interface ChatProps {
    dialogId: Dialog["_id"]
}

export const Chat: React.FC<ChatProps> = ({ dialogId }) => {

    const user = useSelector(userSelector);

    const dialogs = useSelector(dialogsSelector);

    const dialog = dialogs.find(item => item._id === dialogId);

    if (!dialog || !user) return null;

    const partner = dialog.partner._id === user._id
        ? dialog.owner
        : dialog.partner;

    return (
        <div className="chat">

            <ChatHeader avatar={partner.avatar} name={partner.name} dialogId={dialogId} id={partner._id} />

            <Messages dialog={dialog} />

            <ChatFooter dialogId={dialogId} />
        </div>
    );
};
