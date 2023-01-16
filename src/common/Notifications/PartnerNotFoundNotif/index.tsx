import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';
import { useAppDispatch } from '@store';

import { dialogsErrorSelector } from '@redux/dialogSlice/selectors';
import { clearDialogsError } from '@redux/dialogSlice';
import { failedNotif } from "@utils/constants";

export const PartnerNotFoundNotif = () => {

    const dispatch = useAppDispatch();

    const dialogError = useSelector(dialogsErrorSelector);

    const [api, contextHolder] = notification.useNotification();

    useEffect(() => {
        if (dialogError) {
            const notifInfo = {
                message: "Произошла ошибка!",
                description: dialogError
            }
            api.open(failedNotif(notifInfo))
        }
        return () => {
            dispatch(clearDialogsError());
        }
    }, [dialogError])

    return (
        <div>
            {contextHolder}
        </div>
    );
};

