import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss";

import { Flex, Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header className={styles.header}>Header</Header>
      <Content  className={styles.container}>
          <Outlet></Outlet>
      </Content>
      <Footer className={styles.footer}>Footer</Footer>
    </Layout>
  );
};

export default MainLayout;
