"use client";
import React from 'react';

import TableOfContents from '../common_components/widget-table_of_contents';

import DemoShowCase from '../common_components/hero-section-with-video';
import CommonTextBlock from '../common_components/text-block';
import PageDownCTA from '../common_components/call-to-action';
import TitleLeftThreeModulesRight from '../common_components/how-it-works-with-three-blocks';
import TitleTopTwoModulesDown from '../common_components/why-choose-us-with-two-huge-blocks';
import TitleTopSixModulesDown from '../common_components/why-choose-us-with-six-small-blocks';
import TitleTopThreeFlowDown from '../common_components/how-it-works-with-workflow';
import TitleLeftFourModulesRight from '../common_components/product-benefits-with-four-blocks';
import TitleRightTableLeft from '../common_components/call-to-action-with-a-table';
import FAQ from '../common_components/faqs';
import ComparisonTable from '../common_components/product_comparison_table';
import TitleTopPricingDown from '../common_components/pricing-with-three-cards';

// 更新组件映射表
const COMPONENT_MAP = {
  'common_text_block': CommonTextBlock,
  'cta_bottom': PageDownCTA,
  'faqs': FAQ,
  'left_table_right_title': TitleRightTableLeft,
  'left_title_right_three_modules': TitleLeftThreeModulesRight,
  'left_title_right_four_modules': TitleLeftFourModulesRight,
  'top_title_bottom_three_arrow': TitleTopThreeFlowDown,
  'top_title_bottom_six_modules': TitleTopSixModulesDown,
  'top_title_bottom_two_modules': TitleTopTwoModulesDown,
  'demo_showcase': DemoShowCase,
  'product_comparison_table': ComparisonTable,
  // 'PageTopTool': PageTopTool,
  // 'pricing_three_cards': TitleTopPricingDown,
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
                if (section.componentName === 'cta_bottom') {
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
