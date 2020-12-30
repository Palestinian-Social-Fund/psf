import React from 'react';
import {
  Typography,
  Row,
  Col,
  Button,
} from 'antd';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title } = Typography;

const Banner = (props) => {
  const { t } = useLocalization();

  return (
    <section>
      <div className="container">
        <Row align="middle" gutter={[30, 60]}>
          <Col md={24} lg={12}>
            <div className="mb-4">
              <Title className="banner-title" level={1}>
                { t('splash_title') }
              </Title>
              <p>
                { t('splash_content') }
              </p>
            </div>
            <Button size="large" href="/signup" type="primary">
              { t('support_fund') }
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

export default Banner;
