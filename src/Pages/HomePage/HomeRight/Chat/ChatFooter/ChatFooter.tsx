import "./ChatFooter.scss";

import { ArrowRightOutlined } from "@ant-design/icons";
import { Input } from "antd";
const { TextArea } = Input;

import { useState } from "react";
import { useSelector } from "react-redux";

import { sendMessage } from "@utils/socket/emits";
import { userIdSelector } from "@redux/userSlice/selectors";

import { EmojiPickerHover } from "./EmojiPickerHover/EmojiPickerHover";
import { PaperPicker } from "./PaperPicker/PaperPicker";
import { ImageLoadedList } from "./ImageLoadedList/ImageLoadedList";
interface ChatFooterProps {
    dialogId: Dialog["_id"];
}



const INITIAL_MESSAGE = {
    text: "",
    imagesFiles: []
}

export const ChatFooter: React.FC<ChatFooterProps> = ({ dialogId }) => {

    const userId = useSelector(userIdSelector);

    const [message, setMessage] = useState<ChatMessage>(INITIAL_MESSAGE);

    const onChangeInputText = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const targetText = e.target.value;
        setMessage(prev => ({ ...prev, text: targetText }));
    };

    const onSendMessage = () => {
        const text = message.text;
        if (text && userId) {
            sendMessage({ dialogId, message, userId });
            setMessage(INITIAL_MESSAGE);
        }
    }

    // for simple change ONE imagesFiles field 
    const setImagesFiles = (cb: (prevImages: File[]) => File[]) => {
        setMessage((prev) => {
            const files = cb(prev.imagesFiles);
            return {
                ...prev,
                imagesFiles: files
            }
        })
    }

    return (
        <div className="chat__footer">
            <div className="chat__footer-items">
                <PaperPicker setImagesFiles={setImagesFiles} />
                <div className="chat__footer-items__textareaBlock">
                    <TextArea
                        className="chat__footer-items__textareaBlock-textarea"
                        autoSize={{ minRows: 2, maxRows: 6 }}
                        showCount
                        maxLength={500}
                        value={message.text}
                        placeholder="Сообщение"
                        allowClear
                        onChange={onChangeInputText}
                    />
                    <EmojiPickerHover setMessage={setMessage} />
                </div>
                <div onClick={onSendMessage} className="chat__footer-items__send">
                    <ArrowRightOutlined className="chat__footer-items__send-icon" />
                </div>
            </div>
            <ImageLoadedList setImagesFiles={setImagesFiles} imageFiles={message.imagesFiles} />
        </div>
    );
};

