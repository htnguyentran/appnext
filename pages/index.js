
'use client'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { enquireScreen } from 'enquire-js';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import Nav0 from '../compo/Nav0';
import Banner1 from '../compo/Banner1';
import Content0 from '../compo/Content0';
import {
  Nav00DataSource, Banner10DataSource, Banner00DataSource, Content00DataSource
} from '../compo/data.source';
import { useEffect, useState } from 'react';

const Home = () => {

  const [color, setColor] = useState('blue')
  useEffect(() => setColor('red'), [])

  return (
    <Layout>
      <Nav0
        id="Nav0_0"
        key="Nav0_0"
        dataSource={Nav00DataSource}
      />

      <Banner1
        id="Banner1_0"
        key="Banner1_0"
        dataSource={Banner00DataSource}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content00DataSource}
      />,
    </Layout>
  )
};
export default Home;