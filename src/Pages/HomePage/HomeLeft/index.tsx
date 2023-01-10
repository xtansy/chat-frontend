import { Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { Dispatch, SetStateAction, useState } from "react";
const { Text } = Typography;
import { ChatItems } from "./ChatItems";
import { ROUTES } from "@utils/constants";
import { ModalAddContact } from "@common";

interface HomeLeftProps {
    setActiveDialogId: Dispatch<SetStateAction<string | null>>;
}

export const HomeLeft: React.FC<HomeLeftProps> = ({ setActiveDialogId }) => {
    const [term, setTerm] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTerm(value);
    }

    return (
        <div className="home__left">
            <div className="home__left-menu">
                <Text className="home__left-menu__title" type="secondary">
                    <Link to={ROUTES.PROFILE}>Профиль</Link>
                </Text>
                <ModalAddContact />
            </div>

            <Input className='home__left-input' value={term} allowClear placeholder='Введите login' showCount maxLength={20} onChange={onChange} />
            <ChatItems term={term} setActiveDialogId={setActiveDialogId} />
        </div>
    );
};

