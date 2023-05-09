import { Input, Typography } from "antd";
import { FormOutlined } from "@ant-design/icons";
const { Text } = Typography;

import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ChatItems } from "./ChatItems";
import { ROUTES } from "@utils/constants";
import { ModalAddContact } from "@common";
import { userIdSelector } from "@redux/userSlice/selectors";

interface HomeLeftProps {
    setActiveDialogId: Dispatch<SetStateAction<string | null>>;
}

export const HomeLeft: React.FC<HomeLeftProps> = ({ setActiveDialogId }) => {
    const userId = useSelector(userIdSelector);

    const [open, setOpen] = useState<boolean>(false);

    const showModal = () => {
        setOpen(true);
    };

    const [term, setTerm] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTerm(value);
    }

    return (
        <div className="home__left">
            <ModalAddContact open={open} setOpen={setOpen} />
            <div className="home__left-menu">
                <Text className="home__left-menu__title" type="secondary">
                    <Link to={`/profile/${userId}`}>Профиль</Link>
                </Text>
                <FormOutlined onClick={showModal} />
            </div>
            <Input className='home__left-input' value={term} allowClear placeholder='Поиск среди добавленных' showCount maxLength={20} onChange={onChange} />
            <ChatItems term={term} setActiveDialogId={setActiveDialogId} />
        </div>
    );
};

