import { getArticleBySlug, getCustomRecommendations } from '../../../lib/api/index';
import { notFound } from 'next/navigation';
import { ClientWrapper } from '../../../components/layouts/client-wrapper';
import KreadoaiLayout from '../../../components/layouts/kreado/layout';

// 添加这个配置来启用动态路由
export const dynamic = 'force-static'

// 如果需要的话，也可以添加这个配置来处理不同的域名
export const dynamicParams = true

// 保持原有的 KREADO_METADATA 配置
const KREADO_METADATA = {
  title: 'KreadoAI',
  defaultDescription: 'AI Creation Generates Multilingual Videos',
  icons: {
    icon: [
      { 
        url: '/icons/kreado-logo.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ],
    shortcut: [
      {
        url: '/icons/kreado-logo.ico',
        type: 'image/x-icon'
      }
    ],
    apple: [
      {
        url: '/icons/kreado-logo.ico',
        type: 'image/x-icon'
      }
    ]
  }
};

// 添加缓存控制
export const revalidate = 86400; // 24小时重新验证一次

// Layout 组件可以正常导入，因为它是服务器组件

// 主页面组件
export default async function ArticlePage({ params: paramsPromise }) {
  const params = await paramsPromise;
  const { lang, slug } = params;
  
  if (!['en', 'zh'].includes(lang)) {
    notFound();
  }

  try {
    console.log('请求路径:', `/${lang}/${slug}`);
    console.log('lang is', lang);
    const articleData = await getArticleBySlug(slug, lang, process.env.TOKEN);

    console.log('articleData is',articleData)
    
    if (!articleData?.data?.[0]) {
      notFound();
    }
    
    const article = articleData.data[0];

    // 获取推荐文章
    const recommendations = await getCustomRecommendations({
      customerId: article.customerId, // 确保这个字段存在
      title: article.title,
      category: article.category, // 确保这个字段存在s
      lang
    });

    console.log('recommendations is', recommendations)

    // 如果有推荐文章，将其添加到 sections 中
    if (recommendations && recommendations.length >= 4) {
      const recommendationSection = {
        componentName: "MoreInsightsWithFourCards",
        bottomContent: recommendations.map(rec => ({
          imageUrl: rec.imageUrl || '/images/kreado-demo-pic1.webp', // 使用推荐文章的图片或默认图片
          subTitle: rec.category?.toUpperCase() || 'ARTICLE',
          title: rec.title
        })).slice(0, 4) // 确保只取前4篇文章
      };

      // 将推荐部分添加到文章的 sections 中
      article.sections.push(recommendationSection);
    }

    return (
      <ClientWrapper>
        <main className="flex-grow">
          <KreadoaiLayout article={article} />
        </main>
      </ClientWrapper>
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
  }
}

export async function generateMetadata({ params: paramsPromise }) {
  try {
    // 先 await params
    const params = await paramsPromise;
    const { lang = 'en', slug } = params;
    
    console.log('Fetching article data for slug:', slug);

    const articleData = await getArticleBySlug(slug, lang, process.env.TOKEN);
    
    if (!articleData?.data?.[0]) {
      return {
        title: 'Not Found',
        description: 'The page you are looking for does not exist.'
      };
    }

    const article = articleData.data[0];
    const authorConfig = KREADO_METADATA;
    
    return {
      title: `${article.title} | ${authorConfig.title}`,  // Optimized title format
      description: article.description || authorConfig.defaultDescription,
      keywords: article.keywords || 'default keywords',
      robots: 'index, follow',
      openGraph: {  // Add Open Graph protocol support
        title: article.title,
        description: article.description,
        type: 'article',
        publishedTime: article.publishDate,
        modifiedTime: article.updateDate,
        locale: lang,
        siteName: 'KreadoAI'
      },
      twitter: {  // Add Twitter Card support
        card: 'summary_large_image',
        title: article.title,
        description: article.description
      },
      alternates: {  // Add language version associations
        canonical: `https://kreadoai.com/${lang}/${slug}`,
        languages: {
          'en': `https://kreadoai.com/en/${slug}`,
          'zh': `https://kreadoai.com/zh/${slug}`,
          // Add other supported languages
        }
      }
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'An error occurred while generating metadata.'
    };
  }
}