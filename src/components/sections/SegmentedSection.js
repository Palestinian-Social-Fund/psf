import React from 'react';
import {
  Typography,
  Row,
  Col,
  Button,
} from 'antd';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title } = Typography;

const SegmentedSection = (props) => {
  const { t } = useLocalization();

  const children = props.children.map(child =>
    <Col md={24} lg={8}>
      <img key="image" className="image" src={child.src} />
      <Title level={2}>
        { t(child.title) }
      </Title>
      <p>{ t(child.content) }</p>
    </Col>
  );

  return (
    <section>
      <div className="container">
        <Row gutter={[30, 60]}>
          { children }
        </Row>
        <Button
          size="middle"
          href="/principles"
        >
          { t('learn_more') }
        </Button>
      </div>
    </section>
  );
};

export default SegmentedSection;
