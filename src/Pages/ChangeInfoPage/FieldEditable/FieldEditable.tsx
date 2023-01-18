import "./FieldEditable.scss";

import { Typography } from "antd";
const { Paragraph, Text } = Typography;

import { Dispatch } from "react";

interface FieldEditableProps {
    editableStr: string;
    setEditableStr: Dispatch<React.SetStateAction<string>>
    name: string;
}

export const FieldEditable: React.FC<FieldEditableProps> = ({ editableStr, setEditableStr, name }) => {
    return (
        <div className="field field_value">
            <Text>{name}</Text>
            <Paragraph
                editable={{ onChange: setEditableStr }}
                className="field__paragraphEditable"
            >
                {editableStr}
            </Paragraph>
        </div>
    );
};

