import { wrapper } from 'src/store';

import 'styles/antd-custom.less';

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(App);
