import "./ProfileInfo.scss";

import { Typography } from "antd";
const { Text } = Typography;

import { Field } from "@common";

interface ProfileInfoProps {
    email: User["email"];
    login: User["login"];
    name: User["name"];
    surname: User["surname"];
}
export const ProfileInfo: React.FC<ProfileInfoProps> = ({ email, login, name, surname }) => {
    return (
        <div className="profile__info">
            <Field
                Component={Text}
                name={"Почта"}
                value={email}
            />
            <Field
                Component={Text}
                name={"Логин"}
                value={login}
            />
            <Field
                Component={Text}
                name={"Имя"}
                value={name}
            />
            <Field
                Component={Text}
                name={"Фамилия"}
                value={surname}
            />
        </div>
    );
};

