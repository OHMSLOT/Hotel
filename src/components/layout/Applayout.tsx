import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          height: '100px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        </Header>
        <Outlet/>
      </Layout>
    </>
  );
};