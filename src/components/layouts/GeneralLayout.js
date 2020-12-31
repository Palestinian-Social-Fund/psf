import React from 'react';
import { Layout, ConfigProvider } from 'antd';
import useLocalization from 'src/lib/localization/useLocalization';
import { Footer } from 'src/components/sections';
import Navbar from 'src/components/Navbar';

const GeneralLayout = (props) => {
  const { Content } = Layout;
  const { dir } = useLocalization();

  return (
    <Layout>
      <Navbar />
      <Content>
        { props.children }
      </Content>
      <Footer />
    </Layout>
  );
};

export default GeneralLayout;
