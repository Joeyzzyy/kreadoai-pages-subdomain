"use client";
import React from 'react';
import Head from 'next/head';

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

const LayoutKoreadoai = ({ article, keywords }) => {
  // 移除 useMemo 外的状态管理，直接在渲染时处理数据
  const sections = article?.sections || [];
  const sortedSections = sections.sort((a, b) => a.position - b.position);
  const author = article?.author || 'default';

  return (
    <>
      <Head>
        <title>{article?.title || 'Default Title'}</title>
        <meta name="description" content={article?.description || 'Default description'} />
        <meta name="keywords" content={keywords?.join(', ') || ''} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={article?.title || 'Default Title'} />
        <meta property="og:description" content={article?.description || 'Default description'} />
        <meta property="og:image" content={article?.ogImage || '/default-og-image.jpg'} />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article?.title || 'Default Title'} />
        <meta name="twitter:description" content={article?.description || 'Default description'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSchemaMarkup(article))
          }}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content={article?.author || 'default'} />
        <meta property="article:published_time" content={article?.publishDate} />
        <meta property="article:modified_time" content={article?.updateDate} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`pages.kreado.ai/${article?.slug}`} />
        <meta property="og:site_name" content="Kreado" />
        <meta name="twitter:image" content={article?.ogImage || '/default-og-image.jpg'} />
      </Head>
      {/* 简化嵌套结构，移除不必要的div */}
      <div className="flex-1 w-full max-w-[100vw] overflow-x-hidden">
        {sortedSections.map(section => {
          const Component = COMPONENT_MAP[section.componentName];
          if (!Component) return null;
          
          return (
            <Component 
              key={`${section.componentName}-${section.position}`} 
              section={section}
              author={author}
            />
          );
        })}
        <nav>
          <TableOfContents />
        </nav>
      </div>
    </>
  );
};

export default LayoutKoreadoai;
