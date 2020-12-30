import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/dist/client/router';
import { GlobalOutlined } from '@ant-design/icons';

import { localeNames } from 'src/lib/localization/config';

const LocaleSwitch = () => {
  const router = useRouter();
  const { locale, locales } = router;

  const handleClick = React.useCallback(
    (newLocale) => {
      router.push(router.pathname, router.pathname, { locale: newLocale });
    },
    [router]
  );

  return (
    <Button
      size="small"
      onClick={() => handleClick(locale === 'ar' ? 'en' : 'ar')}
    >
      { localeNames[locale] }
    </Button>
  )
};

export default LocaleSwitch;
