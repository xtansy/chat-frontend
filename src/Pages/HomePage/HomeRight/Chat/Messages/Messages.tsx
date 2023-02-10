import "./Messages.scss";

import { useRef } from "react";
import { useSelector } from "react-redux";

import { Typography } from "antd";
const { Text } = Typography;

import { userIdSelector } from "@redux/userSlice/selectors";
import { useScrollbar, useAutoScroll } from "@utils/hooks";
import { isNewDay, formatDateOutMessage } from "@utils/helpers";

import { Message } from "./Message/Message";

interface MessagesProps {
    dialog: Dialog;
}

export const Messages: React.FC<MessagesProps> = ({ dialog }) => {
    const userId = useSelector(userIdSelector);

    const messages = dialog.messages;
    const firstMessage = dialog.messages[0];

    // for custom scrollbar and autoscroll hooks
    const messagesRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const messagesLength = dialog.messages.length;

    useScrollbar({ node: messagesRef, visible: true });
    useAutoScroll({ node: scrollRef, length: messagesLength });
    //

    return (
        <div ref={messagesRef}>
            <div ref={scrollRef} className="chat__messages">

                {firstMessage && <Text type="secondary" className="chat__messages-firstDate">{formatDateOutMessage(firstMessage.createdAt)}</Text>}

                {messages.map((item, i) => {

                    const isMy = item.userId === userId;

                    const firstDate = messages[i].createdAt;
                    const secondDate = messages[i + 1]?.createdAt;

                    if (secondDate && isNewDay(firstDate, secondDate)) {
                        const clazzBlock = isMy ? "chat__messages-dateBlock_my" : "chat__messages-dateBlock";
                        return (
                            <div key={item._id} className={clazzBlock}>
                                <Message
                                    isMy={isMy}
                                    text={item.text}
                                    photos={item.photos}
                                    date={item.createdAt}
                                />
                                <Text type="secondary">{formatDateOutMessage(secondDate)}</Text>
                            </div>
                        )
                    }

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
        </div >
    );
};
