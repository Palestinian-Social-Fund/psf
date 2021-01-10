import React from 'react';
import {
  Typography,
  Row,
  Col,
  Button,
  Space,
  Card,
  Divider,
} from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import Link from 'next/link';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title, Text } = Typography;

const Footer = () => {
  const { t } = useLocalization();

  return (
    <footer className="py-3">
      <div className="container">
        <Row className="mb-5">
          <Col md={24} lg={8}>
            <p className="text-light mb-0">الصندوق الاجتماعي الفلسطيني</p>
            <p className="text-light mb-0">Palestinian Social Fund</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Space size={25}>
            <Link href="/">
              <a className="text-light">
                { t('footer_home') }
              </a>
            </Link>
            <Link href="/principles">
              <a className="text-light">
                { t('footer_principles') }
              </a>
            </Link>
            <Link href="/strategy">
              <a className="text-light">
                { t('footer_strategy') }
              </a>
            </Link>
            <Link href="https://github.com/psfund">
              <a className="text-light">
                { t('footer_github') } <GithubOutlined />
              </a>
            </Link>
          </Space>
        </Row>
        <Row>
          <Space split={<Divider type="vertical" style={{ backgroundColor: 'white' }} />}>
            <Link href="/">
              <a className="text-light">{ t('footer_terms') }</a>
            </Link>
            <Link href="/strategy">
              <a className="text-light">{ t('footer_privacy') }</a>
            </Link>
            <Text className="text-light">
              { t('footer_contact') } <a className="text-light">psfund@protonmail.com</a>
            </Text>
          </Space>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
