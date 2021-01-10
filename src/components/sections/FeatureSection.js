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

const FeatureSection = (props) => {
  const router = useRouter();
  const { t } = useLocalization();

  const {
    grayBg,
    url,
    title,
    content,
    imgSrc,
    flipped,
  } = props;

  const colLg1 = flipped ? { span: 12, pull: 12 } : 12;
  const colLg2 = flipped ? { span: 12, push: 12 } : 12;

  return (
    <section className={`padded-section ${grayBg ? 'gray-bg' : ''}`}>
      <div className="container">
        <Row className="mb-0" align="middle" gutter={30}>
          <Col md={24} lg={colLg2}>
            <img className="center" src={imgSrc} height="150" width="123" />
          </Col>
          <Col md={24} lg={colLg1}>
            <div>
              <Title level={2}>
                { t(props.title) }
              </Title>
              <p>
                { t(props.content) }
              </p>
            </div>
            {url && (
              <Button className="mt-4"
                size="middle"
                onClick={() => router.push(url)}
              >
                { t('learn_more') }
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default FeatureSection;
