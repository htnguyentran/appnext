
import Head from "next/head";
import Layout from "../components/MyLayout.js";
import { Descriptions } from "antd";
import React from "react";

const Product = () => {
  return (
    <Layout>
      <Head>
        <title>Product</title>
      </Head>
      <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
        <Descriptions>
          <Descriptions.Item>htnguyentrana</Descriptions.Item>
        </Descriptions>
      </div>
    </Layout>
  );
};
export default Product;
