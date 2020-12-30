import React from 'react';
import Head from 'next/head';
import {
  Banner,
  SegmentedSection,
  FeatureSection,
  SupportSection,
  Footer,
} from 'src/components/sections';
import { GeneralLayout } from 'src/components/layouts';
import withNonAuth from 'src/hocs/withNonAuth';
import useLocalization from 'src/lib/localization/useLocalization';

const principles = [
  {
    title: 'value_title_1',
    content: 'value_content_1',
    src: '/assets/self-sufficiency.png',
  },
  {
    title: 'value_title_2',
    content: 'value_content_2',
    src: '/assets/cooperativism.png',
  },
  {
    title: 'value_title_3',
    content: 'value_content_3',
    src: '/assets/transparency.png',
  },
];

const Index = () => {
  const { t } = useLocalization();

  return (
    <>
      <Head>
        <title>{ t('static_hd_title') }</title>
      </Head>
      <GeneralLayout>
        <Banner />
        <SegmentedSection children={principles} />
        <FeatureSection grayBg />
        <SupportSection />
        <Footer />
      </GeneralLayout>
    </>
  )
};

export default withNonAuth(Index);
