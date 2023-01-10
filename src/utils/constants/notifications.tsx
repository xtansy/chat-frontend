import { SmileOutlined } from '@ant-design/icons';
import { ArgsProps } from 'antd/es/notification/interface';

interface NotifInfo {
    message: string;
    description: string
}
const successNotif = ({ message, description }: NotifInfo): ArgsProps => {
    return {
        message,
        description,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        placement: "bottomRight"
    }
}

const failedNotif = ({ message, description }: NotifInfo): ArgsProps => {
    return {
        message,
        description,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        placement: "bottomRight"
    }
}

export { successNotif, failedNotif };