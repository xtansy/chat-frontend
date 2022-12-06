import { Avatar, Typography } from "antd";
import {
    UserOutlined,
    PaperClipOutlined,
    ArrowRightOutlined,
    MoreOutlined,
} from "@ant-design/icons";
const { Text } = Typography;
import "./Chat.scss";
import { HR } from "@common";
import { Message } from "./Message/Message";
import { Input } from "antd";
const { TextArea } = Input;
export const Chat = () => {
    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log(e);
    };

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__header-info">
                    <Avatar size={34} icon={<UserOutlined width={47} />} />
                    <div className="chatItem__info">
                        <Text strong>Вадим</Text>
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
                <Message
                    isMy={false}
                    text={
                        "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой. Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро."
                    }
                />
                <Message isMy={true} text={"Круто!"} />
            </div>
            <div className="chat__footer">
                <HR />
                <div className="chat__footer-items">
                    <PaperClipOutlined
                        style={{
                            fontSize: "32px",
                            cursor: "pointer",
                            marginRight: "10px",
                        }}
                    />
                    <TextArea
                        placeholder="Сообщение"
                        allowClear
                        onChange={onChange}
                    />
                    <div className="chat__footer-send">
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
