import React from 'react';
import Head from 'next/head';
import { Typography } from 'antd';
import {
  Banner,
  SegmentedSection,
  FeatureSection,
  SupportSection,
} from 'src/components/sections';
import { GeneralLayout } from 'src/components/layouts';
import useLocalization from 'src/lib/localization/useLocalization';

const { Title } = Typography;

const Strategy = () => {
  const { t } = useLocalization();
  
  return (
    <>
      <Head>
        <title>{ t('static_hd_title') }</title>
      </Head>
      <GeneralLayout>
        <Banner
          title="strategy_splash_title"
          content="strategy_splash_content"
          imgSrc="/assets/psf-logo.png"
        />
        <FeatureSection
          title="strategy_step1_title"
          content="strategy_step1_content"
          imgSrc=""
          flipped
          grayBg
        />
        <FeatureSection
          title="strategy_step2_title"
          content="strategy_step2_content"
          imgSrc=""
        />
        <FeatureSection
          title="strategy_step3_title"
          content="strategy_step3_content"
          imgSrc=""
          flipped
          grayBg
        />
      </GeneralLayout>
    </>
  )
};

export default Strategy;
