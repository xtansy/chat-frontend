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
                {dialog.messages.map((item) => {
                    const isMy = item.userId === userId;
                    return (
                        <Message
                            isMy={isMy}
                            key={item._id}
                            text={item.text}
                            photos={item.photos}
                            date={item.createdAt}
                        />
                    );
                })}
            </div>
        </div>
    );
};
