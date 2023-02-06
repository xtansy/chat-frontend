import "./Messages.scss";

import { useRef } from "react";
import { useSelector } from "react-redux";

import { Message } from "./Message/Message";
import { userIdSelector } from "@redux/userSlice/selectors";
import { useScrollbar, useAutoScroll } from "@utils/hooks";
import { getDayInterval } from "@utils/helpers";

import { formatDistance, format } from "date-fns";
import ruLang from "date-fns/locale/ru";

interface MessagesProps {
    dialog: Dialog;
}
const myFormat = (date: string): string => {
    return format(new Date(date), "pp", {
        locale: ruLang,
    });
};
export const Messages: React.FC<MessagesProps> = ({ dialog }) => {

    const messages = dialog.messages;
    const userId = useSelector(userIdSelector);

    const messagesRef = useRef<HTMLDivElement>(null);

    const scrollRef = useRef<HTMLDivElement>(null);

    const messagesLength = dialog.messages.length;

    useScrollbar({ node: messagesRef, visible: true });
    useAutoScroll({ node: scrollRef, length: messagesLength });

    return (
        <div ref={messagesRef}>
            <div ref={scrollRef} className="chat__messages">
                {messages.map((item, i) => {

                    const isMy = item.userId === userId;

                    const nextItem = dialog.messages[i + 1];
                    if (nextItem) {
                        const datePrev = new Date(messages[i].createdAt);

                        const dateNext = new Date(messages[i + 1].createdAt);

                        let dayDif = dateNext.getDate() - datePrev.getDate();

                        if (dayDif > 0) {
                            return (
                                <div key={item._id}>
                                    <h3>{myFormat(nextItem.createdAt)}</h3>
                                    <Message
                                        isMy={isMy}
                                        text={item.text}
                                        photos={item.photos}
                                        date={item.createdAt}
                                    />
                                </div>
                            )
                        }
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
        </div>
    );
};
