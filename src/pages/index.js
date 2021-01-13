import React from 'react';
import Head from 'next/head';
import {
  Banner,
  SegmentedSection,
  FeatureSection,
  SupportSection,
} from 'src/components/sections';
import { GeneralLayout } from 'src/components/layouts';
import useLocalization from 'src/lib/localization/useLocalization';

const principles = [
  {
    title: 'home_value1_title',
    content: 'home_value1_content',
    src: '/assets/self-sufficiency.png',
  },
  {
    title: 'home_value2_title',
    content: 'home_value2_content',
    src: '/assets/cooperativism.png',
  },
  {
    title: 'home_value3_title',
    content: 'home_value3_content',
    src: '/assets/transparency.png',
  },
];

const Index = () => {
  const { t } = useLocalization();

  return (
    <>
      <Head>
        <title>{ t('home_header_title') }</title>
      </Head>
      <GeneralLayout>
        <Banner
          title="home_splash_title"
          subtitle="name"
          content="home_splash_content"
          imgSrc="/assets/psf-logo.png"
        />
        <SegmentedSection
          children={principles}
          btnTitle="principles_more"
        />
        <FeatureSection
          title="home_feature_title"
          content="home_feature_content"
          btnTitle="strategy_more"
          url="/strategy"
          imgSrc="/assets/psf-logo.png"
          grayBg
        />
        <SupportSection />
      </GeneralLayout>
    </>
  )
};

export default Index;
