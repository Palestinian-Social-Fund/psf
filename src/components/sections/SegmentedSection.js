import React from 'react';
import { useRouter } from 'next/dist/client/router';
import {
  Typography,
  Row,
  Col,
  Button,
} from 'antd';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title } = Typography;

const SegmentedSection = (props) => {
  const router = useRouter();
  const { t } = useLocalization();

  const children = props.children.map((child, i) =>
    <Col key={i} className="segmented-section-col" md={24} lg={8}>
      <img key="image" className="mb-4" src={child.src} />
      <Title level={2}>
        { t(child.title) }
      </Title>
      <p>{ t(child.content) }</p>
    </Col>
  );

  return (
    <section className="padded-section">
      <div className="container">
        <Row gutter={30}>
          { children }
        </Row>
        <Row gutter={30}>
          <Col className="segmented-section-col" md={24}>
            <Button
              size="middle"
              onClick={() => router.push('/principles')}
            >
              { t(props.btnTitle) }
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SegmentedSection;
