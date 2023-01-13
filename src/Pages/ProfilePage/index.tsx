import "./ProfilePage.scss";

import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const { Text, Link } = Typography;
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChangeEvent, useState } from "react";
import { Button, Modal } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';

import { ROUTES } from "@utils/constants";
import { Field } from "./Field/Field";
import { logout } from "@redux/userSlice";
import { useAppDispatch } from "@store";
import { userSelector } from "@redux/userSlice/selectors";
import { uploadAvatar } from "@utils/api/requests/user";
import { fetchGetMe } from "@redux/userSlice";
import { authHeader } from "../../utils/api/helpers/authHeader";
import { HttpRequestHeader, RcFile, UploadFile } from "antd/es/upload/interface";

export const ProfilePage = () => {
    const navigate = useNavigate();
    const user = useSelector(userSelector);
    const dispatch = useAppDispatch();





    const onClickArrow = () => {
        navigate(ROUTES.HOME);
    }
    const onClickLogout = () => {
        dispatch(logout());
    }

    // modal
    const [open, setOpen] = useState(false);

    const handleCancel = () => {
        setOpen(false);
    };
    const showModal = () => {
        setOpen(true);
    };
    //
    // modal content
    const [avatar, setAvatar] = useState<UploadFile | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        if (avatar) {
            setUploading(true);
            uploadAvatar(avatar)
                .then(() => {
                    setAvatar(null);
                    dispatch(fetchGetMe());
                    message.success('upload successfully.');
                })
                .catch(() => {
                    message.error('upload failed.');
                })
                .finally(() => {
                    setUploading(false);
                    setOpen(false);
                });
        }
    };

    const props: UploadProps = {
        name: "avatar",
        onRemove: () => {
            setAvatar(null);
        },
        beforeUpload: (file) => {
            setAvatar(file);
            return false;
        },
        fileList: avatar ? [avatar] : []
    };
    const ModalContent = () => {
        return (
            <>
                <Upload  {...props} listType="picture" >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </>
        )
    }
    //
    return (
        <>
            <div className="arrowWrapper">
                <ArrowLeftOutlined
                    onClick={onClickArrow}
                    className="arrowWrapper__arrow"
                    style={{
                        fontSize: 40,
                    }}
                />
            </div>
            <div className="profileWrapper">
                <div className="profile">


                    <div className="profile__header">


                        <Modal
                            centered
                            title="Загрузите файл"
                            open={open}
                            onOk={handleUpload}
                            onCancel={handleCancel}
                            footer={[
                                <Button loading={uploading} disabled={!!!avatar} key="submit" type="primary" onClick={handleUpload}>
                                    Поменять
                                </Button>]}
                        >
                            <ModalContent />
                        </Modal>


                        <Avatar onClick={showModal} src={user?.avatar} size={130} icon={<UserOutlined />} className="profile__header-avatar" />
                        <Title className="profile__header-title">{user?.name}</Title>
                    </div>



                    <div className="profile__info">
                        <Field Component={Text} name={"Почта"} value={user?.email} />
                        <Field Component={Text} name={"Логин"} value={user?.login} />
                        <Field Component={Text} name={"Имя"} value={user?.name} />
                        <Field Component={Text} name={"Фамилия"} value={"surname"} />
                    </div>
                    <div className="profile__settings">
                        <Field Component={Link} name={"Изменить данные"} />
                        <Field Component={Link} name={"Изменить пароль"} />
                        <Field onClick={onClickLogout} Component={Link} name={"Выйти"} nameType="danger" />
                    </div>
                </div>
            </div>
        </>
    );
};