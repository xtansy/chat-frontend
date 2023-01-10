import { useSelector } from 'react-redux';

import { dialogsSelector } from '@redux/dialogSlice/selectors';
import { userSelector } from '@redux/userSlice/selectors';
import { ChatItem } from './ChatItem/ChatItem';
import "./ChatItems.scss";
import { Dispatch, SetStateAction } from 'react';

interface ChatItemsProps {
    setActiveDialogId: Dispatch<SetStateAction<Dialog["_id"] | null>>;
    term: string;
}
export const ChatItems: React.FC<ChatItemsProps> = ({ setActiveDialogId, term }) => {

    const dialogs = useSelector(dialogsSelector);

    const user = useSelector(userSelector);

    const myDialogs = dialogs.map(item => {
        const partner = item.owner._id === user?._id ? item.partner : item.owner;
        return {
            ...item,
            partner
        }
    })

    const filteredDialogs = myDialogs.filter(dialog => dialog.partner.name.includes(term));

    return (
        <div className="chatItems">
            {
                filteredDialogs.map(item => {
                    const partner = item.partner;
                    const lastMessage = item.messages.at(-1);
                    return (
                        <div onClick={() => setActiveDialogId(item._id)} key={item._id} className="chatItems__chatItem">
                            <ChatItem name={partner.name} message={lastMessage} />
                        </div>
                    )
                })
            }
        </div>
    );
};



