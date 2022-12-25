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
import { useState } from "react";
import { useSelector } from "react-redux";

import { Message } from "./Message/Message";
import "./Chat.scss";
import { socket } from "../../../utils/socket";
import { dialogsSelector } from "@redux/dialogSlice/selectors";

interface ChatProps {
    dialogId: Dialog["_id"]
    sendMessage: (obj: { dialogId: string; message: string }) => void;
}

export const Chat: React.FC<ChatProps> = ({ dialogId, sendMessage }) => {

    const dialogs = useSelector(dialogsSelector);

    const dialog = dialogs.find(item => item._id === dialogId);

    const partner = dialog?.partner;

    const [message, setMessage] = useState<undefined | string>(undefined);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setMessage(e.target.value);
    };

    const onSendMessage = () => {
        if (message) {
            sendMessage({ dialogId, message });
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
            <div className="chat__messages">
                {
                    dialog?.messages.map((item, i) => {
                        return (
                            <Message key={i} isMy={false} text={item} />
                        )
                    })
                }
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
