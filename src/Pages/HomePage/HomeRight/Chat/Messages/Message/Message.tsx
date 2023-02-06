import "./Message.scss";

import classnames from "classnames";
import { Typography, Image } from "antd";
const { Text } = Typography;

import { formatDateMessage } from "@utils/helpers";

interface MessageProps {
    isMy: boolean;
    text: string;
    date: string;
    photos?: string[];
}

export const Message: React.FC<MessageProps> = ({ isMy, text, date, photos }) => {

    const styles = classnames("message", {
        message_my: isMy,
    });

    return (
        <div className={styles}>
            {
                photos &&
                photos.map(photo => {
                    return (
                        <Image src={photo} width={75} height={50} />
                    )
                })
            }
            {text}
            <div className="message__date">
                <Text
                    style={{
                        fontSize: 9,
                    }}
                    type="secondary"
                >
                    {formatDateMessage(date)}
                </Text>
            </div>
        </div>
    );
};
