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
    <Col key={i} md={24} lg={8}>
      <img key="image" className="image mb-5" src={child.src} />
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
        <Button
          size="middle"
          onClick={() => router.push('/principles')}
        >
          { t('learn_more') }
        </Button>
      </div>
    </section>
  );
};

export default SegmentedSection;
