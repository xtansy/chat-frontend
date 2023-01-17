import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { Input } from 'antd';
import { useSelector } from 'react-redux';

import "./ModalAddContact.scss";
import { useAppDispatch } from '@store';
import { fetchDialogs } from '@redux/dialogSlice';
import { dialogsLoadingSelector } from '@redux/dialogSlice/selectors';
import { createDialog } from '@utils/api/requests/dialog';

export const ModalAddContact: React.FC<ModalsProps<boolean>> = ({ open, setOpen }) => {

    const dispatch = useAppDispatch();

    const isDialogLoading = useSelector(dialogsLoadingSelector);

    const [login, setLogin] = useState<User["login"] | undefined>(undefined);

    const handleOk = async () => {
        if (login) {
            createDialog({ partnerLogin: login })
                .then(res => {
                    dispatch(fetchDialogs());
                    message.success('Диалог создан!');
                })
                .catch(({ response }) => {
                    const errorMessage = response.data.message;
                    message.error(errorMessage);
                })
                .finally(() => {
                    setOpen(false);
                    setLogin(undefined);
                })
        }
    };

    const handleCancel = () => {
        setOpen(false);
        setLogin(undefined);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        setLogin(value);
    };

    return (
        <div className='modalAddContact'>
            <Modal
                centered
                title="Добавить новый контакт"
                open={open}
                onOk={handleOk}
                confirmLoading={isDialogLoading}
                onCancel={handleCancel}
                footer={[
                    <Button
                        key="submit"
                        type="primary"
                        loading={isDialogLoading}
                        onClick={handleOk}>
                        Добавить
                    </Button>]}
            >
                <Input
                    className='modalAddContact__input'
                    value={login}
                    allowClear
                    placeholder='Введите login'
                    showCount maxLength={20}
                    onChange={onChange} />
            </Modal>
        </div>
    );
};
