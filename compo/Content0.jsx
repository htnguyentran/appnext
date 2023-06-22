import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col, Image } from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from './utils';

class Content extends React.PureComponent {
  render() {
    const { dataSource, isMobile, ...props } = this.props;
    const {
      wrapper,
      titleWrapper,
      page,
      OverPack: overPackData,
      childWrapper,
    } = dataSource;
    console.log(childWrapper.children)
    return (
      <div {...props} {...wrapper}>

        <div {...page}>
          <div {...titleWrapper}>
            {titleWrapper.children.map(getChildrenToRender)}
          </div>

          {/* <OverPack {...overPackData}> */}
          <QueueAnim
            type="bottom"
            key="block"
            leaveReverse
            component={Row}
            componentProps={childWrapper}
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="content0-block" span={6}>
                <div className="content0-block-item" >
                  <Image
                    className="content0-block-icon"
                    width={200}
                    src="https://zos.alipayobjects.com/rmsportal/WBnVOjtIlGWbzyQivuyq.png"
                  />
                </div>

              </Col>
              <Col className="content1-block" span={6}>
                <div className="content0-block-item" > <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                /></div>
              </Col>
              <Col className="content2-block" span={6}>
                <div className="content0-block-item" > <Image
                  width={200}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                /></div>
              </Col>

            </Row>
            {/* {childWrapper.children.map((block, i) => {
                const { children: item, ...blockProps } = block;
                return (
                  <Col key={i.toString()} {...blockProps}>
                    <div  {...item}>
                      {item.children.map(getChildrenToRender)}
                    </div>
                  </Col>
                );
              })} */}
          </QueueAnim>
          {/* </OverPack> */}
        </div>
      </div >
    );
  }
}

export default Content;
