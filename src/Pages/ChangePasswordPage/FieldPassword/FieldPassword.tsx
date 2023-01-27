import "./FieldPassword.scss";

import { Form, Input, Typography } from "antd";
import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
const { Text } = Typography;


interface FieldPasswordProps {
    name: string;
    rules: Rule[];
    label: string;
    dependencies?: NamePath[];
}

export const FieldPassword: React.FC<FieldPasswordProps> = ({ name, rules, label, dependencies }) => {

    return (
        <div className="field field_value">
            <Text>{label}</Text>
            <Form.Item name={name} rules={rules} dependencies={dependencies}>
                <Input.Password
                    className="field_value-input"
                />
            </Form.Item>
        </div>
    );
};

