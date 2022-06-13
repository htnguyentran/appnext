import Head from "next/head";
import Layout from "../components/MyLayout.js";
import { Descriptions } from "antd";
import React from "react";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Trackings</title>
      </Head>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <Descriptions>
          <Descriptions.Item>thongnth</Descriptions.Item>
        </Descriptions>
      </div>
    </Layout>
  );
};
export default Index;
