import React from 'react';
import { Typography, TypographyProps } from "antd";
import classNames from 'classnames';
const { Text, Link } = Typography;

import "./Field.scss";
import { BaseType } from 'antd/es/typography/Base';

interface FieldProps {
    Component: typeof Text | typeof Link
    name: string;
    value?: string;
    nameType?: BaseType;
    onClick?: () => void;
}
export const Field: React.FC<FieldProps> = ({ Component, name, value, nameType, onClick }) => {

    const classes = classNames("field", {
        "field_value": value
    })

    return (
        <div className={classes}>
            <Component onClick={onClick} type={nameType}>{name}</Component>
            {value && <Component type="secondary">{value}</Component>}
        </div>
    );
};

