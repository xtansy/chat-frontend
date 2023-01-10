import { Button, Modal } from 'antd';
import { FormOutlined } from "@ant-design/icons";
import { useEffect, useState } from 'react';
import { Input } from 'antd';
import { useSelector } from 'react-redux';

import "./ModalAddContact.scss";
import { useAppDispatch } from '@store';
import { fetchCreateDialog } from '@redux/dialogSlice';
import { dialogsLoadingSelector } from '@redux/dialogSlice/selectors';

export const ModalAddContact = () => {

    const dispatch = useAppDispatch();

    const isDialogLoading = useSelector(dialogsLoadingSelector);

    const [login, setLogin] = useState<User["login"] | undefined>(undefined);

    const [open, setOpen] = useState(false);

    const handleOk = () => {
        if (login) {
            dispatch(fetchCreateDialog({ partnerLogin: login }))
            setLogin(undefined);
        }
    };

    useEffect(() => {
        if (!isDialogLoading) {
            setOpen(false);
        }
    }, [isDialogLoading])


    const handleCancel = () => {
        setOpen(false);
        setLogin(undefined);
    };
    const showModal = () => {
        setOpen(true);
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = e.target.value;
        if (value) {
            setLogin(value);
        }
    };

    return (
        <div className='modalAddContact'>
            <FormOutlined onClick={showModal} />
            <Modal
                centered
                title="Добавить новый контакт"
                open={open}
                onOk={handleOk}
                confirmLoading={isDialogLoading}
                onCancel={handleCancel}
                footer={[<Button key="submit" type="primary" loading={isDialogLoading} onClick={handleOk}>
                    Добавить
                </Button>]}
            >
                <Input className='modalAddContact__input' value={login} allowClear placeholder='Введите login' showCount maxLength={20} onChange={onChange} />
            </Modal>
        </div>
    );
};
