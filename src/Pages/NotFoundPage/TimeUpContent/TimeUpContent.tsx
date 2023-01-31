import "./TimeUpContent.scss";

import { Typography, Empty } from 'antd';
const { Title, Link } = Typography;

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userIsAuthSelector } from "@redux/userSlice/selectors";
import { ROUTES } from '@utils/constants';


interface TimeUpContentProps {
    visible: boolean;
}

export const TimeUpContent: React.FC<TimeUpContentProps> = ({ visible }) => {
    const navigate = useNavigate();
    const isAuth = useSelector(userIsAuthSelector);

    const onClickNavigateToHome = () => {
        navigate(ROUTES.HOME);
    }

    const onClickNavigateToAuth = () => {
        navigate(ROUTES.AUTH);
    }

    if (!visible) return null;

    return (
        <div className="notfoundWrapper__timeup">
            <Title type="danger">404</Title>
            <Empty description="Похоже данной страницы не существует" />
            {

                isAuth
                    ? <Link onClick={onClickNavigateToHome}>Вернуться на главную</Link>
                    : <Link onClick={onClickNavigateToAuth}>Вернуться к авторизации</Link>
            }
        </div>
    );
};

