import { useState } from 'react';
import { Button, Modal, UploadFile, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { useAppDispatch } from "@store";
import { fetchGetMe } from '@redux/userSlice';
import { uploadAvatar } from "@utils/api/requests/user";
import { uploadAvatarProps, IMAGES_TYPES } from '@utils/constants';


export const ModalUploadImage: React.FC<ModalsProps<boolean>> = ({ open, setOpen }) => {

    const dispatch = useAppDispatch();

    const [avatar, setAvatar] = useState<UploadFile | null>(null);

    const [uploading, setUploading] = useState(false);

    const handleCancel = () => {
        setOpen(false);
    };

    const handleUpload = () => {
        if (avatar) {

            const isValidFile = avatar.type && IMAGES_TYPES.includes(avatar.type);

            if (!isValidFile) {
                message.error("Недопустимый тип файла!")
                return;
            }

            setUploading(true);
            uploadAvatar(avatar)
                .then(() => {
                    setAvatar(null);
                    dispatch(fetchGetMe());
                    message.success('Загрузка прошла успешно!');
                })
                .catch(() => {
                    message.error('Загрузка провалена!');
                })
                .finally(() => {
                    setUploading(false);
                    setOpen(false);
                });
        }
    };

    const props = uploadAvatarProps(avatar, setAvatar);

    const ModalContent = () => {
        return (
            <>
                <Upload  {...props} listType="picture" >
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
            </>
        )
    }

    return (
        <Modal
            centered
            title="Загрузите файл"
            open={open}
            onOk={handleUpload}
            onCancel={handleCancel}
            footer={[
                <Button loading={uploading}
                    disabled={!!!avatar}
                    key="submit"
                    type="primary"
                    onClick={handleUpload}>
                    Поменять
                </Button>]}
        >
            <ModalContent />
        </Modal>
    );
};