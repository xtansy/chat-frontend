import "./ArrowToHome.scss";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { ROUTES } from "@utils/constants";

export const ArrowToHome = () => {
    const navigate = useNavigate();

    const onClickArrow = () => {
        navigate(ROUTES.HOME);
    }

    return (
        <div className="arrowWrapper">
            <div className="arrowWrapper__backBlock">
                <ArrowLeftOutlined
                    onClick={onClickArrow}
                    className="arrowWrapper__backBlock-icon"
                />
            </div>
        </div>
    );
};

