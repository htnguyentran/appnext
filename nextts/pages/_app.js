import React  from 'react';
import App from "next/app";
import '../styles/globals.css';
import '../styles/style.css';
import "antd/dist/antd.css";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const props = {
      ...pageProps,
    };
    return (
      <React.Fragment>
          <Component {...props} />
      </React.Fragment>
    );
  }
}
