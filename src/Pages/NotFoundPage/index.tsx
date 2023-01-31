import "./NotFoundPage.scss";

import { useEffect, useState } from "react";
import { Spin } from 'antd';

import { TimeUpContent } from "./TimeUpContent/TimeUpContent";

export const NotFoundPage = () => {

    const [timeUpVisible, setTimeUpVisible] = useState<boolean>(false);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimeUpVisible(true);
        }, 5000)

        return () => {
            clearTimeout(timeOut);
        }
    }, [])

    return (
        <div className='notfoundWrapper'>
            <Spin size='large' />
            <TimeUpContent visible={timeUpVisible} />
        </div>
    );
};

