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

const Banner = (props) => {
  const router = useRouter();
  const { t } = useLocalization();

  return (
    <section className="padded-section">
      <div className="container">
        <Row align="middle" gutter={30}>
          <Col md={24} lg={14}>
            <div className="mb-4">
              <Title className="banner-title" level={1}>
                { t(props.title) }
              </Title>
              <p>
                { t(props.content) }
              </p>
            </div>
            <Button
              size="large"
              type="primary"
              onClick={() => router.push('/signup')}
            >
              { t('support_fund') }
            </Button>
          </Col>
          <Col md={24} lg={10}>
            <img className="img-center" src={props.imgSrc} width="60%" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Banner;
