import { useSelector } from 'react-redux';

import { dialogsSelector } from '@redux/dialogSlice/selectors';
import { ChatItem } from './ChatItem/ChatItem';
import "./ChatItems.scss";
import { Dispatch, SetStateAction } from 'react';

interface ChatItemsProps {
    setActiveDialog: Dispatch<SetStateAction<Dialog | null>>;
}
export const ChatItems: React.FC<ChatItemsProps> = ({ setActiveDialog }) => {

    const dialogs = useSelector(dialogsSelector);


    return (
        <div className="chatItems">
            {
                dialogs.map(item => {
                    const partner = item.partner;
                    return (
                        <div onClick={() => setActiveDialog(item)} key={item._id} className="chatItems__chatItem">
                            <ChatItem name={partner.name} message={"last message"} />
                        </div>
                    )
                })
            }
        </div>
    );
};



