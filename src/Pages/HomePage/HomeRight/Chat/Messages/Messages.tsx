import "./Messages.scss";

import { useRef } from "react";
import { useSelector } from "react-redux";

import { Message } from "./Message/Message";
import { userIdSelector } from "@redux/userSlice/selectors";
import { useScrollbar, useAutoScroll } from "@utils/hooks";

interface MessagesProps {
    dialog: Dialog;
}

export const Messages: React.FC<MessagesProps> = ({ dialog }) => {

    const userId = useSelector(userIdSelector);

    const messagesRef = useRef<HTMLDivElement>(null);

    const scrollRef = useRef<HTMLDivElement>(null);

    const messagesLength = dialog.messages.length;

    useScrollbar({ node: messagesRef, visible: true });
    useAutoScroll({ node: scrollRef, length: messagesLength });

    return (
        <div ref={messagesRef}>
            <div ref={scrollRef} className="chat__messages">
                {
                    dialog.messages.map((item, i) => {
                        const isMy = item.userId === userId;
                        return (
                            <Message key={i} isMy={isMy} text={item.text} date={item.createdAt} />
                        )
                    })
                }
            </div>
        </div>
    );
};

