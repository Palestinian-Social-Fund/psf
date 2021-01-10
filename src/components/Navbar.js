import React from 'react';
import { Layout, Row, Col, Button, Menu, Avatar, Dropdown, Typography } from 'antd';
import {
  LogoutOutlined,
  UserOutlined,
  BookOutlined,
  CreditCardOutlined,
  ThunderboltOutlined,
  LoginOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import Dimensions from 'react-dimensions';
import useLocalization from 'src/lib/localization/useLocalization';
import LocaleSwitch from 'src/components/LocaleSwitch';

import { handleLogout } from 'src/actions/userActions'

const { Header } = Layout;
const { Title } = Typography;

const Navbar = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const { t, dir } = useLocalization();
  const router = useRouter();

  const avatarOverlay = (
    <Menu
      onClick={(item) => {
        if (item.key === 'logout') dispatch(handleLogout());
        else router.replace(`/dashboard/${item.key}`);
      }}>
      <Menu.Item key="profile">
        <UserOutlined /> { t('profile_pg_title') }
      </Menu.Item>
      <Menu.Item key="billing">
        <CreditCardOutlined /> { t('billing_pg_title') }
      </Menu.Item>
      <Menu.Item key="membership">
        <BookOutlined /> { t('membership_pg_title') }
      </Menu.Item>
      <Menu.Item key="logout">
        <LogoutOutlined /> { t('logout') }
      </Menu.Item>
    </Menu>
  );

  const mobileMenuOverlay = (
    <Menu
      onClick={(item) => {
        if (item.key === 'login') router.push('/login');
        else router.push('/signup');
      }}>
      <Menu.Item key="login">
        <LoginOutlined /> { t('login') }
      </Menu.Item>
      <Menu.Item key="signup">
        <ThunderboltOutlined /> { t('support') }
      </Menu.Item>
    </Menu>
  );

  return (
    <Header theme="light">
      <Row wrap={false}>
        <Col flex="0 0 auto">
          <Link href="/">
            <a>
              <img
                className="nav-logo"
                src={`/assets/logo-nav-${
                  props.containerWidth > 575
                    ? 'lg'
                    : 'sm'
                }.png`} />
            </a>
          </Link>
        </Col>
        <Col className="menu-row" flex="1 1 auto">
          <Menu mode="horizontal" direction={dir}>
            {!user.auth && props.containerWidth > 575 && (
              <>
                <Menu.Item>
                  <Button
                    type="primary"
                    onClick={() => router.push('/signup')}>
                    { t('support') }
                  </Button>
                </Menu.Item>
                <Menu.Item>
                  <Button
                    type="text"
                    onClick={() => router.push('/login')}>
                    { t('login') }
                  </Button>
                </Menu.Item>
              </>
            )}
            {!user.auth && props.containerWidth <= 575 && (
              <>
                <Menu.Item>
                  <Dropdown
                    overlay={mobileMenuOverlay}
                    arrow={false}
                    placement={
                      dir === 'ltr'
                        ? 'bottomRight'
                        : 'bottomLeft'
                    }
                  >
                    <Button
                      className="mobile-menu-btn"
                      type="primary"
                      shape="circle"
                      icon={<MenuOutlined />}
                    />
                  </Dropdown>
                </Menu.Item>
              </>
            )}
            {user.auth && (
              <Menu.Item>
                <Dropdown
                  overlay={avatarOverlay}
                  arrow={false}
                  placement={
                    dir === 'ltr'
                      ? 'bottomRight'
                      : 'bottomLeft'
                  }
                >
                  <Avatar style={{ backgroundColor: '#87d068' }} size="large">
                    A
                  </Avatar>
                </Dropdown>
              </Menu.Item>
            )}
            <Menu.Item>
              <LocaleSwitch />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default Dimensions()(Navbar);
