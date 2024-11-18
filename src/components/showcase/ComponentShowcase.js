'use client';
import React from 'react';
import { exampleData } from './example-data';
import TitleContent from '../common_components/title_content';
import TitleTopPricingDown from '../common_components/title_top_three_pricing_bottom';
import TitleTopThreeFlowDown from '../common_components/title_top_three_arrow_flow_bottom';
import TitleTopSixModulesDown from '../common_components/title_top_six_modules_bottom';
import TitleRightTableLeft from '../common_components/title_right_table_left';
import TitleLeftModulesRight from '../common_components/title_left_three_modules_right';
import TitleLeftFourModulesRight from '../common_components/title_left_four_modules_right';
import TitleTopTwoModulesDown from '../common_components/title_top_two_modules_bottom';
import PageDownCTA from '../common_components/page_bottom_cta';
import PageTopTool from '../common_components/page_top_tool';
import FAQ from '../common_components/faq';
import ArticleContent from '../common_components/common_article_content';
import MoreInsights from '../common_components/more_insights';
import ImageBanner from '../common_components/image_banner';
import ComparisonTable from '../common_components/product_comparison_table';

const ComponentShowcase = () => {
  return (
    <div className="relative min-h-screen bg-slate-50 w-full">
      {/* Header */}
      <div className="bg-white border-b border-slate-100 w-full">
        <div className="w-[80%] mx-auto py-12">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Component Library</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-3xl">
            Explore our comprehensive collection of pre-built components designed for creating modern, responsive web applications.
          </p>
          <p className="mt-2 text-base text-slate-500">
            Currently featuring {Object.keys(exampleData).length} components
          </p>
        </div>  
      </div>

      {/* Main Content */}
      <div className="w-[80%] mx-auto py-12">
        {Object.entries(exampleData).map(([key, data]) => (
          <div key={key} className="mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Component Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4">
                <h2 className="text-xl font-semibold text-white break-words">
                  <span className="mr-2 text-slate-400">#{data.order}</span>
                  {data.title}
                </h2>
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <p className="text-slate-300 text-sm">
                    <span className="font-medium">Recommended Position:</span> {data.recommendedPosition}
                  </p>
                  <div className="hidden sm:block h-4 w-px bg-slate-700"></div>
                </div>
              </div>

              {/* Component Description */}
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                <p className="text-slate-600">{data.description}</p>
              </div>

              {/* Component Preview */}
              <div className="p-6 overflow-x-auto">
                <div className={`${
                  key === 'pageTopTool' ? 'max-w-full md:max-w-[900px] lg:max-w-[1200px] mx-auto' : ''
                }`}>
                  {key === 'titleContent' && <TitleContent {...data.props} author="KREADOAI" />}
                  {key === 'titleTopPricing' && <TitleTopPricingDown {...data.props} author="KREADOAI" />}
                  {key === 'titleTopThreeFlow' && <TitleTopThreeFlowDown {...data.props} author="KREADOAI" />}
                  {key === 'titleTopSixModules' && <TitleTopSixModulesDown {...data.props} author="KREADOAI" />}
                  {key === 'titleRightTable' && <TitleRightTableLeft {...data.props} author="KREADOAI" />}
                  {key === 'titleLeftModules' && <TitleLeftModulesRight {...data.props} author="KREADOAI" />}
                  {key === 'titleLeftFourModules' && <TitleLeftFourModulesRight {...data.props} author="KREADOAI" />}
                  {key === 'titleTopTwoModules' && <TitleTopTwoModulesDown {...data.props} author="KREADOAI" />}
                  {key === 'pageDownCTA' && <PageDownCTA {...data.props} author="KREADOAI" />}
                  {key === 'pageTopTool' && <PageTopTool {...data.props} author="KREADOAI" />}
                  {key === 'faq' && <FAQ {...data.props} author="KREADOAI" />}
                  {key === 'articleContent' && <ArticleContent {...data.props} author="KREADOAI" />}
                  {key === 'moreInsights' && <MoreInsights {...data.props} author="KREADOAI" />}
                  {key === 'imageBanner' && <ImageBanner {...data.props} author="KREADOAI" />}
                  {key === 'comparisonTable' && <ComparisonTable {...data.props} author="KREADOAI" />}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentShowcase; 