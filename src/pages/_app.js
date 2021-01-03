import { useRouter } from 'next/dist/client/router';
import { ConfigProvider } from 'antd';
import arEG from 'antd/lib/locale/ar_EG';
import enUS from 'antd/lib/locale/en_US';

import { wrapper } from 'src/store';
import useLocalization from 'src/lib/localization/useLocalization';

import 'styles/antd-custom.less';

const App = ({ Component, pageProps }) => {
  const { dir } = useLocalization();
  const { locale } = useRouter();

  return (
    <ConfigProvider
      lang={locale === 'ar' ? arEG : enUS}
      direction={dir}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
};

export default wrapper.withRedux(App);
