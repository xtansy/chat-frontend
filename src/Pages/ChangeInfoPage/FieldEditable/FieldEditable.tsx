import "./FieldEditable.scss";

import { Form, Input, Typography } from "antd";
import { Rule } from "antd/es/form";
const { Text } = Typography;


interface FieldEditableProps {
    name: string;
    rules: Rule[];
    label: string;
}

export const FieldEditable: React.FC<FieldEditableProps> = ({ name, rules, label }) => {

    return (
        <div className="field field_value">
            <Text>{label}</Text>
            <Form.Item name={name} rules={rules}>
                <Input
                    className="field_value-input"
                />
            </Form.Item>
        </div>
    );
};

