import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { notification } from 'antd';

import { dialogsErrorSelector, dialogsLoadingSelector } from '@redux/dialogSlice/selectors';
import { failedNotif } from "@utils/constants";

export const PartnerNotFound = () => {
    const [api, contextHolder] = notification.useNotification();

    const dialogError = useSelector(dialogsErrorSelector);
    const dialogsLoading = useSelector(dialogsLoadingSelector);

    useEffect(() => {
        if (dialogError && !dialogsLoading) {
            const notifInfo = {
                message: "Произошла ошибка!",
                description: dialogError
            }
            api.open(failedNotif(notifInfo))
            return;
        }
    }, [dialogsLoading])

    return (
        <div>
            {contextHolder}
        </div>
    );
};

