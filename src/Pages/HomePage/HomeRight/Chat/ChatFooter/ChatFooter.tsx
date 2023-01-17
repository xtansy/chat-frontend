import {
    PaperClipOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;

import { useState } from "react";
import { useSelector } from "react-redux";

import { sendMessage } from "@utils/socket/emits";
import { userIdSelector } from "@redux/userSlice/selectors";

interface ChatFooterProps {
    dialogId: Dialog["_id"];
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ dialogId }) => {

    const userId = useSelector(userIdSelector);

    const [message, setMessage] = useState<undefined | string>(undefined);

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setMessage(e.target.value);
    };

    const onSendMessage = () => {
        if (message && userId) {
            sendMessage({ dialogId, text: message, userId });
            setMessage("");
        }
    }
    return (
        <div className="chat__footer">
            <div className="chat__footer-items">
                <PaperClipOutlined className="chat__footer-items__paper" />
                <TextArea
                    value={message}
                    placeholder="Сообщение"
                    allowClear
                    onChange={onChange}
                />
                <div onClick={onSendMessage} className="chat__footer-items__send">
                    <ArrowRightOutlined className="chat__footer-items__send-icon" />
                </div>
            </div>
        </div>
    );
};

