import React from 'react';
import HeroSectionWithVideo from '../../common/sections/hero-section-with-video';
import CallToAction from '../../common/sections/call-to-action';
import HowItWorksWithThreeBlocks from '../../common/sections/how-it-works-with-three-blocks';
import WhyChooseUsWithTwoHugeBlocks from '../../common/sections/why-choose-us-with-two-huge-blocks';
import WhyChooseUsWithSixSmallBlocks from '../../common/sections/why-choose-us-with-six-small-blocks';
import HowItWorksWithWorkflow from '../../common/sections/how-it-works-with-workflow';
import ProductBenefitsWithFourBlocks from '../../common/sections/product-benefits-with-four-blocks';
import Faqs from '../../common/sections/faqs';
import ProductComparisonTable from '../../common/sections/product-comparison-table';
import MoreInsightsWithFourCards from '../../common/sections/more-insights-with-four-cards';
import ImageBanner from '../../common/sections/image-banner';
import TitleSection from '../../common/sections/title-section';
import TitleSectionWithImage from '../../common/sections/title-section-with-image';

// 更新组件映射表
const COMPONENT_MAP = {
  CallToAction: CallToAction,
  Faqs: Faqs,
  HowItWorksWithThreeBlocks: HowItWorksWithThreeBlocks,
  ProductBenefitsWithFourBlocks: ProductBenefitsWithFourBlocks,
  HowItWorksWithWorkflow: HowItWorksWithWorkflow,
  WhyChooseUsWithSixSmallBlocks: WhyChooseUsWithSixSmallBlocks,
  WhyChooseUsWithTwoHugeBlocks: WhyChooseUsWithTwoHugeBlocks,
  MoreInsightsWithFourCards: MoreInsightsWithFourCards,
  ImageBanner: ImageBanner,
  ProductComparisonTable: ProductComparisonTable,
  HeroSectionWithVideo: HeroSectionWithVideo,
  TitleSection: TitleSection,
  TitleSectionWithImage: TitleSectionWithImage
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

const KreadoaiLayout = ({ article, keywords }) => {
  const title = article?.title || 'Default Title';
  const description = article?.description || 'Default description';

  // 将 sections 分成两部分：CallToAction 和其他组件
  const sections = article?.sections || [];
  const callToActionSection = sections.find(s => s.componentName === 'CallToAction' || s.componentName === 'CallToActionWithImage');
  const otherSections = sections.filter(s => s.componentName !== 'CallToAction' && s.componentName !== 'CallToActionWithImage');
  
  // 先对其他组件按位置排序，然后在末尾添加 CallToAction
  const sortedSections = [
    ...otherSections.sort((a, b) => a.position - b.position),
    ...(callToActionSection ? [callToActionSection] : [])
  ];
  
  const author = article?.author || 'default';

  return (
    <div suppressHydrationWarning>
      <div className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        {sortedSections.map(section => {
          const Component = COMPONENT_MAP[section.componentName];
          if (!Component) return null;
          
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
