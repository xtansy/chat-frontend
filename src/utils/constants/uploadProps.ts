import { UploadProps } from "antd";
import { RcFile, UploadFile } from "antd/es/upload";
import { Dispatch, SetStateAction } from "react";

export const uploadAvatarProps = (state: UploadFile | null, setState: Dispatch<SetStateAction<UploadFile | null>>): UploadProps => {
    return {
        name: "avatar",
        onRemove: () => {
            setState(null);
        },
        beforeUpload: (file: RcFile) => {
            setState(file);
            return false;
        },
        fileList: state ? [state] : []
    };
}