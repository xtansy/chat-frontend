import "./EmojiPickerHover.scss";

import { Dispatch, SetStateAction, useState } from "react";

import { SmileTwoTone } from "@ant-design/icons";

import EmojiPicker from 'emoji-picker-react';
import { EmojiClickData } from "emoji-picker-react";


interface EmojiPickerHoverProps {
    setMessage: Dispatch<SetStateAction<string>>
}

export const EmojiPickerHover: React.FC<EmojiPickerHoverProps> = ({ setMessage }) => {

    const [isVisibleEmojiPicker, setIsVisibleEmojiPicker] = useState<boolean>(false);

    const onMouseOver = () => {
        setIsVisibleEmojiPicker(true);
    }

    const onMouseLeave = () => {
        setIsVisibleEmojiPicker(false);
    }


    const onEmojiClick = (emojiData: EmojiClickData) => {
        const emoji = emojiData.emoji;
        setMessage((message) => message + emoji);
    }

    return (
        <>
            <div className="emojipicker" onMouseLeave={onMouseLeave}>
                {
                    isVisibleEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} searchPlaceHolder="Поиск" />
                }
            </div>
            <div className="emoji" >
                <SmileTwoTone onMouseOver={onMouseOver} className="emoji__icon" />
            </div>
        </>
    );
};

