import { SmileOutlined } from '@ant-design/icons';
import { ArgsProps } from 'antd/es/notification/interface';

const succesSignUp: ArgsProps = {
    message: 'Вы успешно зарегистрировались!',
    description:
        'Войдите в аккаунт, используя свои данные!',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    placement: "bottomRight"
}
const failedSignUp = (errorMessage: string): ArgsProps => {
    return {
        message: 'Произошла ошибка!',
        description:
            errorMessage,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        placement: "bottomRight"
    }
}

export { succesSignUp, failedSignUp };