"use client";
import React from 'react';

import TableOfContents from '../common_components/widget-table_of_contents';

import HeroSectionWithVideo from '../common_components/hero-section-with-video';
import TextBlock from '../common_components/text-block';
import CallToAction from '../common_components/call-to-action';
import HowItWorksWithThreeBlocks from '../common_components/how-it-works-with-three-blocks';
import WhyChooseUsWithTwoHugeBlocks from '../common_components/why-choose-us-with-two-huge-blocks';
import WhyChooseUsWithSixSmallBlocks from '../common_components/why-choose-us-with-six-small-blocks';
import HowItWorksWithWorkflow from '../common_components/how-it-works-with-workflow';
import ProductBenefitsWithFourBlocks from '../common_components/product-benefits-with-four-blocks';
import CallToActionWithTable from '../common_components/call-to-action-with-a-table';
import Faqs from '../common_components/faqs';
import ProductComparisonTable from '../common_components/product_comparison_table';
import MoreInsightsWithFourCards from '../common_components/more-insights-with-four-cards';
import ImageBanner from '../common_components/image-banner';

// 更新组件映射表
const COMPONENT_MAP = {
  TextBlock: TextBlock,
  CallToAction: CallToAction,
  Faqs: Faqs,
  CallToActionWithTable: CallToActionWithTable,
  HowItWorksWithThreeBlocks: HowItWorksWithThreeBlocks,
  ProductBenefitsWithFourBlocks: ProductBenefitsWithFourBlocks,
  HowItWorksWithWorkflow: HowItWorksWithWorkflow,
  WhyChooseUsWithSixSmallBlocks: WhyChooseUsWithSixSmallBlocks,
  WhyChooseUsWithTwoHugeBlocks: WhyChooseUsWithTwoHugeBlocks,
  MoreInsightsWithFourCards: MoreInsightsWithFourCards,
  ImageBanner: ImageBanner,
  ProductComparisonTable: ProductComparisonTable,
  HeroSectionWithVideo: HeroSectionWithVideo
};

const LayoutKoreadoai = ({ article, keywords }) => {
  console.log('heyheyheyarticle: ', article);
  const sections = article?.sections || [];
  const author = article?.author || 'default';

  const renderSection = (section) => {
    const Component = COMPONENT_MAP[section.componentName];
    if (!Component) {
      console.log('未找到对应组件:', section.componentName);
      return null;
    }
    
    return <Component 
      key={`${section.componentName}-${section.position}`} 
      section={section}
      author={author}
    />;
  };

  return (
    <div className="w-full min-h-screen flex flex-col p-0 m-0">
      <div className="relative flex-1 w-full max-w-[100vw] overflow-x-hidden p-0 m-0">
        <div className="relative z-10 w-full">
          {(() => {
            // 先分离CTA和普通部分
            const normalSections = [];
            let ctaSection = null;
            
            sections
              .sort((a, b) => a.position - b.position)
              .forEach(section => {
                if (section.componentName === 'CallToAction') {
                  ctaSection = section;
                } else {
                  normalSections.push(section);
                }
              });

            // 合并普通部分和CTA部分并渲染
            return [...normalSections, ...(ctaSection ? [ctaSection] : [])]
              .map(renderSection);
          })()}
        </div>
        <TableOfContents />
      </div>
    </div>
  );
};

export default LayoutKoreadoai;
