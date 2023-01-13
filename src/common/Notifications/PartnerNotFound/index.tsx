import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

import { dialogsErrorSelector } from '@redux/dialogSlice/selectors';
import { failedNotif } from "@utils/constants";

export const PartnerNotFound = () => {
    const [api, contextHolder] = notification.useNotification();

    const dialogError = useSelector(dialogsErrorSelector);

    useEffect(() => {
        if (dialogError) {
            const notifInfo = {
                message: "Произошла ошибка!",
                description: dialogError
            }
            api.open(failedNotif(notifInfo))
            return;
        }
    }, [dialogError])

    return (
        <div>
            {contextHolder}
        </div>
    );
};

