import React from 'react';
import HeroSectionWithVideo from '../../common/sections/hero-section-with-video';
import CallToAction from '../../common/sections/call-to-action';
import HowItWorksWithThreeBlocks from '../../common/sections/how-it-works-with-three-blocks';
import WhyChooseUsWithTwoHugeBlocks from '../../common/sections/why-choose-us-with-two-huge-blocks';
import WhyChooseUsWithSixSmallBlocks from '../../common/sections/why-choose-us-with-six-small-blocks';
import HowItWorksWithWorkflow from '../../common/sections/how-it-works-with-workflow';
import ProductBenefitsWithFourBlocks from '../../common/sections/product-benefits-with-four-blocks';
import Faqs from '../../common/sections/faqs';
import FAQTwoColumnsWithBigTitle from '../../common/sections/faq-two-columns-with-big-title';
import FAQTwoColumnsWithSmallTitle from '../../common/sections/faq-two-columns-with-small-title';
import ProductComparisonTable from '../../common/sections/product-comparison-table';
import MoreInsightsWithFourCards from '../../common/sections/more-insights-with-four-cards';
import TitleSection from '../../common/sections/title-section';
import TitleSectionWithImage from '../../common/sections/title-section-with-image';
import KeyResultsWithImage from '../../common/sections/key-results-with-image';
import KeyResultsWithTextBlock from '../../common/sections/key-results-with-text-block';
import KeyResultsWithThreeCards from '@/components/common/sections/key-results-with-three-cards';
import ProductBenefitsWithTable from '@/components/common/sections/product-benefits-with-a-table';
import UserReviewsWithMovingCards from '@/components/common/sections/user-reviews-with-moving-cards';
import UserReviewsWithSquareCards from '@/components/common/sections/user-reviews-with-square-cards';
import UserReviews from '@/components/common/sections/user-reviews';
import TrustedByLogos from '@/components/common/sections/trusted-by-logos';

// 更新组件映射表
const FAQ_COMPONENTS = {
  Faqs: Faqs,
  FAQTwoColumnsWithSmallTitle: FAQTwoColumnsWithSmallTitle,
  FAQTwoColumnsWithBigTitle: FAQTwoColumnsWithBigTitle
};

const getRandomFaqComponent = () => {
  const components = Object.values(FAQ_COMPONENTS);
  const randomIndex = Math.floor(Math.random() * components.length);
  return components[randomIndex];
};

const COMPONENT_MAP = {
  CallToAction: CallToAction,
  Faqs: (props) => {
    const RandomFaqComponent = getRandomFaqComponent();
    return <RandomFaqComponent {...props} />;
  },
  HowItWorksWithThreeBlocks: HowItWorksWithThreeBlocks,
  ProductBenefitsWithFourBlocks: ProductBenefitsWithFourBlocks,
  HowItWorksWithWorkflow: HowItWorksWithWorkflow,
  WhyChooseUsWithSixSmallBlocks: WhyChooseUsWithSixSmallBlocks,
  WhyChooseUsWithTwoHugeBlocks: WhyChooseUsWithTwoHugeBlocks,
  MoreInsightsWithFourCards: MoreInsightsWithFourCards,
  ProductComparisonTable: ProductComparisonTable,
  HeroSectionWithVideo: HeroSectionWithVideo,
  TitleSection: TitleSection,
  TitleSectionWithImage: TitleSectionWithImage,
  KeyResultsWithImage: KeyResultsWithImage,
  KeyResultsWithTextBlock: KeyResultsWithTextBlock,
  KeyResultsWithThreeCards: KeyResultsWithThreeCards,
  ProductBenefitsWithTable: ProductBenefitsWithTable,
  UserReviewsWithMovingCards: UserReviewsWithMovingCards,
  UserReviewsWithSquareCards: UserReviewsWithSquareCards,
  UserReviews: UserReviews,
  TrustedByLogos: TrustedByLogos
};

const generateSchemaMarkup = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Person',
      name: article.author
    },
    datePublished: article.publishDate,
    image: article.ogImage,
    dateModified: article.updateDate,
    publisher: {
      '@type': 'Organization',
      name: 'Kreado'
    }
  };
};

// 定义trusted-by-logos中的图片文件名数组
const TRUSTED_BY_LOGOS = [
  'airbnb.webp',
  'aliexpress.webp',
  'calssi.webp',
  'cgtn.webp',
  'cupom.webp',
  'essec.webp',
  'grin.webp',
  'keep.webp',
  'lazada.webp',
  'link.webp',
  'nyu.webp',
  'omg.webp',
  'shein.webp',
  'tencent.webp',
  'trip.webp',
  'viacom.webp',
  'volkswagan.webp',
  'buick.webp',
].map(filename => `/images/trusted-by-logos/${filename}`);

const KreadoaiLayout = ({ article, keywords }) => {
  const title = article?.title || 'Default Title';
  const description = article?.description || 'Default description';
  const author = article?.author || 'KreadoAI';

  // 将 sections 分成两部分：CallToAction 和其他组件
  const sections = article?.sections || [];
  const callToActionSection = sections.find(s => s.componentName === 'CallToAction' || s.componentName === 'CallToActionWithImage');
  const otherSections = sections.filter(s => s.componentName !== 'CallToAction' && s.componentName !== 'CallToActionWithImage');
  // 先对其他组件按位置排序，然后在末尾添加 CallToAction
  const sortedSections = [
    ...otherSections.sort((a, b) => a.position - b.position),
    ...(callToActionSection ? [callToActionSection] : [])
  ];
  const processedSections = [];
  sortedSections.forEach(section => {
    if (section.componentName === 'Faqs' || 
        section.componentName === 'FAQTwoColumnsWithSmallTitle' || 
        section.componentName === 'FAQTwoColumnsWithBigTitle') {
      processedSections.push({
        componentName: 'TrustedByLogos',
        logos: TRUSTED_BY_LOGOS
      });
    }
    processedSections.push(section);
  });
  
  return (
    <div suppressHydrationWarning>
      <div className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        {processedSections.map(section => {
          const Component = COMPONENT_MAP[section.componentName];
          if (!Component) return null;
          
          if (section.componentName === 'TrustedByLogos') {
            return <Component key={`${section.componentName}`} logos={section.logos} />;
          }
          
          return (
            <Component 
              key={`${section.componentName}-${section.position}`} 
              data={section}
              author={author}
              date={article.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default KreadoaiLayout;
