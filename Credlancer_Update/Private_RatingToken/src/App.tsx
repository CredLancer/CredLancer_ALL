import React from 'react';
import {Layout} from 'antd';
import {useRoutes} from "react-router";
import routes from "./router";
import CustomHeader from "./components/customHeader";
import MenuSlder from "./components/menuSlder";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
    let element = useRoutes(routes);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <MenuSlder/>
            <Layout>
                {/* <CustomHeader/> */}
                <Content style={{ margin: '0 16px' }}>
                    {element}
                </Content>
            </Layout>
        </Layout>

    );
};

export default App;