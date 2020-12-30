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
import Link from 'next/link';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title, Text } = Typography;

const Footer = () => {
  const { t } = useLocalization();

  return (
    <footer>
      <div className="container mb-0">
        <Row className="mb-4">
          <Col md={24} lg={8}>
            <img src="/assets/psf-logo.png" className="mb-3" height="80" />
            <p className="text-light">Palestinian Social Fund</p>
          </Col>
        </Row>
        <Row className="mb-4">
          <Space size={25}>
            <Link href="/">
              <a className="text-light">Home</a>
            </Link>
            <Link href="/principles">
              <a className="text-light">Principles</a>
            </Link>
            <Link href="/strategy">
              <a className="text-light">Strategy</a>
            </Link>
            <Link href="https://github.com/psfund">
              <a className="text-light">Github</a>
            </Link>
          </Space>
        </Row>
        <Row>
          <Space split={<Divider type="vertical" style={{ backgroundColor: 'white' }} />}>
            <Link href="/">
              <a className="text-light">Terms of Use</a>
            </Link>
            <Link href="/strategy">
              <a className="text-light">Privacy Policy</a>
            </Link>
            <Text className="text-light">
              Contact us here any time: <a className="text-light">psfund@protonmail.com</a>
            </Text>
          </Space>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
