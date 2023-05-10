import "./LentaPage.scss";

import { Typography } from "antd";
const { Title } = Typography;

import { useEffect, useState } from "react";

import { ArrowToHome, Posts } from "@common";
import { getLenta } from "@utils/api/requests/post";


export const LentaPage = () => {

    const [lenta, setLenta] = useState<Post[]>([]);

    useEffect(() => {
        getLenta()
            .then(({ data }) => {
                data.sort((a, b) => {
                    const bDate = +(new Date(b.createdAt));
                    const aDate = +(new Date(a.createdAt));
                    return aDate - bDate;
                });
                setLenta(data);
            })
    }, [])


    return (
        <>
            <ArrowToHome />
            <div className="lentaWrapper">
                <div className="lenta">
                    <Title>Лента:</Title>
                    <Posts posts={lenta} setPosts={setLenta} />
                </div>
            </div>
        </>
    );
};

