import "./SettingsPage.scss";

import { Typography } from "antd";
const { Link } = Typography;

import { useNavigate } from "react-router-dom";
import { Link as LinkTo } from "react-router-dom";
import { useSelector } from "react-redux";

import { logout } from "@redux/userSlice";
import { useAppDispatch } from "@store";
import { ArrowToHome, ProfileHeader, ProfileInfo } from "@common";
import { ROUTES } from "@utils/constants";
import { userSelector } from "@redux/userSlice/selectors";

import { Field } from "@common";

export const SettingsPage = () => {
    const user = useSelector(userSelector);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onClickLogout = () => {
        dispatch(logout());
        navigate(ROUTES.AUTH);
    };

    const onClickChangeInfo = () => {
        navigate(ROUTES.CHANGE_INFO);
    };

    const onClickChangePassword = () => {
        navigate(ROUTES.CHANGE_PASSWORD);
    };

    if (!user) return null;

    return (
        <>
            <ArrowToHome />
            <div className="profileWrapper">
                <div className="profile">
                    <ProfileHeader avatar={user.avatar} name={user.name} isMe={true} />
                    <LinkTo className="profile-link" to={`/profile/${user._id}`}>к профилю</LinkTo>
                    <ProfileInfo email={user.email} login={user.login} name={user.name} surname={user.surname} />
                    <div className="profile__settings">
                        <Field
                            Component={Link}
                            onClick={onClickChangeInfo}
                            name={"Изменить данные"}
                        />
                        <Field
                            Component={Link}
                            onClick={onClickChangePassword}
                            name={"Изменить пароль"}
                        />
                        <Field
                            onClick={onClickLogout}
                            Component={Link}
                            name={"Выйти"}
                            nameType="danger"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
