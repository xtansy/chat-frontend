import "./Message.scss";
import classnames from "classnames";
import { Space, Typography } from "antd";

const { Text, Link } = Typography;
interface MessageProps {
    isMy: boolean;
    text: string;
}

export const Message: React.FC<MessageProps> = ({ isMy, text }) => {
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
                    11:56
                </Text>
            </div>
        </div>
    );
};
