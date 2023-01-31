import "./HomeSkeleton.scss";

import { Skeleton } from 'antd';

export const HomeSkeleton = () => {

    return (
        <div className="home">
            <div className="home__left">
                <div className="home__left-menu">
                    <Skeleton active paragraph={{ rows: 0 }} style={{ width: "270px" }} />
                    <Skeleton active paragraph={{ rows: 0 }} style={{ width: "45px" }} />
                </div>
                <Skeleton.Input active size='small' className="skeleton-input" />
                <div className="chatItems chatItems_skeleton">
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                    <Skeleton avatar paragraph={{ rows: 2 }} />
                </div>
            </div>
            <div className="home__right">
            </div>
        </div>
    );
};

