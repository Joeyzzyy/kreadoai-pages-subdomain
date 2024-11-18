"use client";
import React from 'react';

import TableOfContents from '../common_components/table_of_contents';

import DemoShowCase from '../common_components/page_top_tool';
import CommonTextBlock from '../common_components/common_article_content';
import PageDownCTA from '../common_components/page_bottom_cta';
import TitleLeftThreeModulesRight from '../common_components/title_left_three_modules_right';
import TitleTopTwoModulesDown from '../common_components/title_top_two_modules_bottom';
import TitleTopSixModulesDown from '../common_components/title_top_six_modules_bottom';
import TitleTopThreeFlowDown from '../common_components/title_top_three_arrow_flow_bottom';
import TitleLeftFourModulesRight from '../common_components/title_left_four_modules_right';
import TitleRightTableLeft from '../common_components/title_right_table_left';
import FAQ from '../common_components/faq';
import ComparisonTable from '../common_components/product_comparison_table';
import TitleTopPricingDown from '../common_components/title_top_three_pricing_bottom';

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
    <div className="w-full min-h-screen flex flex-col">
      <div className="content-container relative flex-1">
        <div className="relative z-10">
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
