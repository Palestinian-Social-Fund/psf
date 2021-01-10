import React from 'react';
import { useRouter } from 'next/dist/client/router';
import {
  Typography,
  Row,
  Col,
  Button,
} from 'antd';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title, Text } = Typography;

const Banner = (props) => {
  const router = useRouter();
  const { t } = useLocalization();

  return (
    <section className="banner-section padded-section">
      <div className="container">
        <Row align="middle" gutter={30}>
          <Col md={24}>
            <img className="center mb-4" src={props.imgSrc} width="13%" />
          </Col>
          <Col md={24}>
            <div className="text-center mb-4">
              <p className="text-center mb-2">
                <Text type="secondary">
                  { t(props.subtitle) }
                </Text>
              </p>
              <Title className="banner-title" level={1}>
                { t(props.title) }
              </Title>
              <p>
                { t(props.content) }
              </p>
            </div>
            <Button
              className="center"
              size="large"
              type="primary"
              onClick={() => router.push('/signup')}
            >
              { t('support_fund') }
            </Button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Banner;
