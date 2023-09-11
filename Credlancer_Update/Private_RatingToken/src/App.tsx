import React from 'react';
import {Layout} from 'antd';
import {useRoutes} from "react-router";
import routes from "./router";
import CustomHeader from "./components/customHeader";

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
    let element = useRoutes(routes);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Layout>
                <CustomHeader/>
                <Content style={{ margin: '0 16px' }}> 

                    {element}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Aleo Wallet ©2023 Created by Aleo123</Footer>
            </Layout>
        </Layout>
    );
};

export default App;