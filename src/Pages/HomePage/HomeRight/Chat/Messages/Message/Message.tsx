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

export const Message: React.FC<MessageProps> = ({
    isMy,
    text,
    date,
    photos,
}) => {
    const styles = classnames("message", {
        message_my: isMy,
    });

    return (
        <div className={styles}>
            <div className="message__content">
                <div className="message__content-images">
                    <Image.PreviewGroup>
                        {photos &&
                            photos.map((photo) => {
                                return (
                                    <Image
                                        placeholder={
                                            <Image
                                                preview={false}
                                                src={photo}
                                                width={75}
                                                height={50}
                                            />
                                        }
                                        src={photo}
                                        width={225}
                                        height={150}
                                    />
                                );
                            })}
                    </Image.PreviewGroup>
                </div>
                <div>{text}</div>
            </div>
            <div className="message__date">
                <Text className="message__date-text" type="secondary">
                    {formatDateMessage(date)}
                </Text>
            </div>
        </div>
    );
};
