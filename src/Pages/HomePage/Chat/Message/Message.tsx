import "./Message.scss";
import classnames from "classnames";
import { Typography } from "antd";

const { Text } = Typography;
import { formatDateMessage } from "@utils/helpers";

interface MessageProps {
    isMy: boolean;
    text: string;
    date: string;
}

export const Message: React.FC<MessageProps> = ({ isMy, text, date }) => {
    const styles = classnames("message", {
        message_my: isMy,
    });

    return (
        <div className={styles}>
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
