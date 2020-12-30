import React from 'react';
import {
  Typography,
  Row,
  Col,
  Button,
} from 'antd';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title } = Typography;

const FeatureSection = (props) => {
  const { t } = useLocalization();

  return (
    <section className={props.grayBg ? 'gray-bg' : ''}>
      <div className="container">
        <Row className="mb-0" align="middle" gutter={[30, 60]}>
          <Col md={24} lg={12}>
            <div className="mb-4">
              <Title level={2}>
                { t('splash_title') }
              </Title>
              <p>
                { t('splash_content') }
              </p>
            </div>
            <Button
              size="middle"
              href="/strategy"
            >
              { t('learn_more') }
            </Button>
          </Col>
          <Col md={24} lg={12}>
            <img src="/assets/psf-logo.png" height="150" width="123" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeatureSection;
