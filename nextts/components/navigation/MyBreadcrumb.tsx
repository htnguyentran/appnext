import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const MyBreadcrumb = () => (
    <Breadcrumb>
        <Breadcrumb.Item href="">
            <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="">
            <UserOutlined />
            <span>Application List</span>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Application</Breadcrumb.Item>
    </Breadcrumb>
);
export default MyBreadcrumb 