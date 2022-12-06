import { Input, Space, Typography } from "antd";
const { Text, Link } = Typography;
const { Search } = Input;

export const HomePage = () => {
    const onSearch = (value: string) => console.log(value);
    return (
        <div className="home">
            <div className="home__left">
                <Text type="secondary">Профиль</Text>
                <Search
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: 200 }}
                />
                <hr />
            </div>
            <div className="home__right"></div>
        </div>
    );
};
