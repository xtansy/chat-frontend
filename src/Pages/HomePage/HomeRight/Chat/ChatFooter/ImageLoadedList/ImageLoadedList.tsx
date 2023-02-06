import "./ImageLoadedList.scss";

import { Image } from 'antd';
import { CloseOutlined } from "@ant-design/icons";

interface ImageLoadedList {
    imageFiles: File[];
    setImagesFiles: (cb: (prevImages: File[]) => File[]) => void;
}

export const ImageLoadedList: React.FC<ImageLoadedList> = ({ imageFiles, setImagesFiles }) => {

    const onClickDelete = (idx: number) => {
        setImagesFiles(prevImagesFiles => {
            const result = prevImagesFiles.filter((_, i) => i !== idx);
            return result;
        })
    }

    if (!imageFiles.length) return null;

    return (
        <Image.PreviewGroup>
            <div className="imageList">
                {
                    imageFiles.map((file, i) => {
                        const url = URL.createObjectURL(file);
                        return (
                            <div className="imageList__item" key={i}>
                                <CloseOutlined onClick={() => onClickDelete(i)} className="imageList__item-deleteIcon" />
                                <Image width={72} height={48} src={url} />
                            </div>
                        )
                    })
                }
            </div>
        </Image.PreviewGroup>
    );
};

