import { Typography } from "antd";
const { Text } = Typography;

import { Chat } from "./Chat/Chat";

interface HomeRightProps {
    activeDialogId: Dialog["_id"] | null;
}

export const HomeRight: React.FC<HomeRightProps> = ({ activeDialogId }) => {

    const isActive = !!activeDialogId;

    return (
        <div className="home__right">
            {!isActive && (
                <div className="home__right-notif">
                    <Text type="secondary">
                        Выберите чат чтобы отправить сообщение
                    </Text>
                </div>
            )}
            {isActive && <Chat dialogId={activeDialogId} />}
        </div>
    );
};

