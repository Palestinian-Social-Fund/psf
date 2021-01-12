import React from 'react';
import { useRouter } from 'next/dist/client/router';
import {
  Typography,
  Row,
  Col,
  Button,
  Space,
  Card,
} from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title, Text } = Typography;

const SupportSection = () => {
  const router = useRouter();
  const { t } = useLocalization();

  return (
    <section className="padded-section">
      <div className="container">
        <Row align="middle" gutter={30}>
          <Col xs={24} md={24} lg={10}>
            <Title level={1}>
              { t('support_title') }
            </Title>
            <p>
              { t('support_content') }
            </p>
            <div className="mt-5 mb-5">
              <Space direction="vertical">
                <p className="mb-3">
                  <CheckCircleOutlined /> { t('cancel_or_edit') }
                </p>
                <p className="mb-3">
                  <CheckCircleOutlined /> { t('view_activity') }
                </p>
                <p className="mb-3">
                  <CheckCircleOutlined /> { t('receive_updates') }
                </p>
              </Space>
            </div>
            <Button
              size="large"
              type="primary"
              onClick={() => router.push('/signup')}
            >
              { t('support_fund') }
            </Button>
          </Col>
          <Col className="support-section-col" xs={24} md={24} lg={7}>
            <Card title={`${ t('support') } ${ t('monthly') }`} style={{ width: '100%' }}>
              <Title className="mb-0" level={2}>
                $11
              </Title>
              <Text type="secondary">
                { t('per_month') }
              </Text>
            </Card>
          </Col>
          <Col className="support-section-col" xs={24} md={24} lg={7}>
            <Card title={`${ t('support') } ${ t('yearly') }`} style={{ width: '100%' }}>
              <Title className="mb-0" level={2}>
                $103
              </Title>
              <Text type="secondary">
                { t('per_year') }
              </Text>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SupportSection;
