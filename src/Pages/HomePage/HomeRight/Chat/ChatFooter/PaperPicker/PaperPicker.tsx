
import {
    PaperClipOutlined,
    CameraOutlined,
    PlayCircleOutlined,
    SoundOutlined
} from "@ant-design/icons";
import { Dropdown, MenuProps, message } from "antd";

import { ChangeEvent } from "react";

interface PaperPickerProps {
    setImagesFiles: (cb: (prevImages: File[]) => File[]) => void;
}

export const PaperPicker: React.FC<PaperPickerProps> = ({ setImagesFiles }) => {

    const onLoadImage = (e: ChangeEvent<HTMLInputElement>) => {
        const filesList = e.target.files;
        if (filesList) {
            const filesArr = Object.values(filesList);
            setImagesFiles(prevImagesFiles => {
                if (prevImagesFiles.length + filesArr.length <= 10) {
                    return [...prevImagesFiles, ...filesArr];
                }
                message.error("Нельзя добавить больше 10 фото!")
                return [...prevImagesFiles]
            })
        }
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div>
                    <label style={{ cursor: "pointer" }} htmlFor="imageInput">Фотография</label>
                    <input multiple onChange={onLoadImage} id="imageInput" type="file" style={{ display: "none" }} />
                </div>
            ),
            icon: <CameraOutlined />
        },
        {
            key: '2',
            label: (
                <a rel="noopener noreferrer" >
                    Видеозапись
                </a>
            ),
            icon: <PlayCircleOutlined />,
            disabled: true,
        },
        {
            key: '3',
            label: (
                <a rel="noopener noreferrer" >
                    Аудиозапись
                </a>
            ),
            icon: <SoundOutlined />,
            disabled: true,
        },
    ];
    return (
        <>
            <Dropdown placement="topLeft" menu={{ items }} trigger={['click']} >
                <PaperClipOutlined className="chat__footer-items__paper" />
            </Dropdown>
        </>
    );
};

