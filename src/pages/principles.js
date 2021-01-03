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

const Principles = () => {
  const { t } = useLocalization();
  
  return (
    <>
      <Head>
        <title>{ t('static_hd_title') }</title>
      </Head>
      <GeneralLayout>
        <Banner
          title="principles_splash_title"
          content="principles_splash_content"
          imgSrc="/assets/psf-logo.png"
        />
        <FeatureSection
          title="principles_sufficiency_title"
          content="principles_sufficiency_content"
          imgSrc=""
          flipped
          grayBg
        />
        <FeatureSection
          title="principles_cooperativism_title"
          content="principles_cooperativism_content"
          imgSrc=""
        />
        <FeatureSection
          title="principles_transparency_title"
          content="principles_transparency_content"
          imgSrc=""
          flipped
          grayBg
        />
      </GeneralLayout>
    </>
  )
};

export default Principles;
