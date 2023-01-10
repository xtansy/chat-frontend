import { Avatar, Typography } from "antd";
import {
    UserOutlined,
    PaperClipOutlined,
    ArrowRightOutlined,
    MoreOutlined,
} from "@ant-design/icons";
const { Text } = Typography;
import { Input } from "antd";
const { TextArea } = Input;
import { useState, useRef, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import "./Chat.scss";
import { Message } from "./Message/Message";
import { dialogsSelector } from "@redux/dialogSlice/selectors";
import { userSelector } from '@redux/userSlice/selectors';
import { sendMessage } from "@utils/socket/emits";
import { useScrollbar, useAutoScroll } from "@utils/hooks";

interface ChatProps {
    dialogId: Dialog["_id"]
}

export const Chat: React.FC<ChatProps> = ({ dialogId }) => {
    const user = useSelector(userSelector);
    const dialogs = useSelector(dialogsSelector);
    const messagesLength = dialogs.find(dialog => dialog._id === dialogId)?.messages.length;

    const messagesRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    useScrollbar({ node: messagesRef, visible: true });
    useAutoScroll({ node: scrollRef, length: messagesLength });

    const dialog = dialogs.find(item => item._id === dialogId);

    const partner = dialog?.partner._id === user?._id ? dialog?.owner : dialog?.partner;

    const [message, setMessage] = useState<undefined | string>(undefined);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setMessage(e.target.value);
    };

    const onSendMessage = () => {
        if (message && user) {
            sendMessage({ dialogId, text: message, userId: user._id });
            setMessage("");
        }
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header-info">
                    <Avatar size={34} icon={<UserOutlined width={47} />} />
                    <div className="chatItem__info">
                        <Text strong>{partner?.name}</Text>
                    </div>
                </div>
                <MoreOutlined
                    style={{
                        fontSize: "25px",
                        cursor: "pointer",
                    }}
                />
            </div>
            <div ref={messagesRef}>
                <div ref={scrollRef} className="chat__messages">
                    {
                        dialog?.messages.map((item, i) => {
                            const isMy = item.userId === user?._id;
                            return (
                                <Message key={i} isMy={isMy} text={item.text} date={item.createdAt} />
                            )
                        })
                    }
                </div>
            </div>
            <div className="chat__footer">
                <div className="chat__footer-items">
                    <PaperClipOutlined
                        style={{
                            fontSize: "32px",
                            cursor: "pointer",
                            marginRight: "10px",
                        }}
                    />
                    <TextArea
                        value={message}
                        placeholder="Сообщение"
                        allowClear
                        onChange={onChange}
                    />
                    <div onClick={onSendMessage} className="chat__footer-send">
                        <ArrowRightOutlined
                            style={{
                                fontSize: "28px",
                                color: "white",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
