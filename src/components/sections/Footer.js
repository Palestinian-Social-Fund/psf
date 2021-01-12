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
import Dimensions from 'react-dimensions';
import useLocalization from 'src/lib/localization/useLocalization';
import LocaleSwitch from 'src/components/LocaleSwitch';

const { Title, Text } = Typography;

const Footer = (props) => {
  const { t } = useLocalization();

  return (
    <footer className="py-3">
      <div className="container">
        <Row className="mb-4">
          <Col md={24} lg={8}>
            <p className="text-light mb-0">الصندوق الاجتماعي الفلسطيني</p>
            <p className="text-light mb-0">Palestinian Social Fund</p>
          </Col>
        </Row>
        {props.containerWidth <= 575 && (
          <Row className="mb-4">
            <Col xs={24}>
              <LocaleSwitch />
            </Col>
          </Row>
        )}
        <Row className="mb-4" gutter={30}>
          <Col xs={24} sm={24} md={3}>
            <Link href="/">
              <a className="text-light">
                { t('footer_home') }
              </a>
            </Link>
          </Col>
          <Col xs={24} sm={24} md={3}>
            <Link href="/principles">
              <a className="text-light">
                { t('footer_principles') }
              </a>
            </Link>
          </Col>
          <Col xs={24} sm={24} md={3}>
            <Link href="/strategy">
              <a className="text-light">
                { t('footer_strategy') }
              </a>
            </Link>
          </Col>
          <Col xs={24} sm={24} md={3}>
            <Link href="https://github.com/psfund">
              <a className="text-light">
                { t('footer_github') } <GithubOutlined />
              </a>
            </Link>
          </Col>
        </Row>
        <Row gutter={30}>
          <Col xs={24} sm={24} md={4}>
            <Link href="/">
              <a className="text-light">{ t('footer_terms') }</a>
            </Link>
          </Col>
          <Col xs={24} sm={24} md={4}>
            <Link href="/strategy">
              <a className="text-light">{ t('footer_privacy') }</a>
            </Link>
          </Col>
          <Col xs={24} sm={24} md={16}>
            <Text className="text-light">
              { t('footer_contact') } <a className="text-light">psfund@protonmail.com</a>
            </Text>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Dimensions()(Footer);
