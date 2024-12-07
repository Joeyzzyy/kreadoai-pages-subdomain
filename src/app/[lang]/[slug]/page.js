import { getArticleBySlug, getArticles, getCustomRecommendations } from '../../../lib/api/index';
import { notFound } from 'next/navigation';
import { ClientWrapper } from '../../../components/layouts/client-wrapper';
import KreadoaiLayout from '../../../components/layouts/kreado/layout';
import Script from 'next/script'

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
  try {
    const params = await paramsPromise;
    const { lang, slug } = params;
    
    if (!['en', 'zh'].includes(lang)) {
      return notFound();
    }

    // 使用 try-catch 但不再抛错误
    const articleData = await getArticleBySlug(slug, lang, process.env.TOKEN);
    
    if (!articleData?.data?.[0]) {
      console.error(`Article not found for slug: ${slug}`);
      return notFound();
    }
    
    const article = articleData.data[0];
    
    try {
      // 获取推荐文章
      const recommendations = await getCustomRecommendations({
        pageId: article.pageId,
        customerId: article.customerId,
        title: article.title,
        category: article.category,
        lang
      });

      if (recommendations && recommendations.recommended_articles.length >= 4) {
        const recommendationSection = {
          componentName: "MoreInsightsWithFourCards",
          bottomContent: recommendations.recommended_articles.map(rec => ({
            imageUrl: rec.imageUrl,
            subTitle: rec.category?.toUpperCase() || 'ARTICLE',
            title: rec.title
          })).slice(0, 4) // 确保只取前4篇文章
        };

        // 将推荐部分添加到文章的 sections 中
        article.sections.push(recommendationSection);
      }
    } catch (error) {
      // 推荐文章获取失败时静默处理，不影响主文章显示
      console.warn('Failed to fetch recommendations:', error);
    }

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      image: article.sections[0]?.rightContent?.imageUrl,
      datePublished: article.updatedAt,
      dateModified: article.updatedAt,
      author: {
        '@type': 'Person',
        name: article.author
      },
      publisher: {
        '@type': 'Organization',
        name: 'KreadoAI',
        logo: {
          '@type': 'ImageObject',
          url: 'https://kreadoai.com/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://kreadoai.com/${lang}/${slug}`
      }
    };

    return (
      <>
        <Script id="article-schema" type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </Script>
        <ClientWrapper>
          <main className="flex-grow">
            <KreadoaiLayout article={article} />
          </main>
        </ClientWrapper>
      </>
    );
  } catch (error) {
    console.error('Error in ArticlePage:', error);
    throw error; // 让错误边界处理它
  }
}

function joinArrayWithComma(arr) {
  return Array.isArray(arr) ? arr.filter(Boolean).join(',') : '';
}

export async function generateMetadata({ params: paramsPromise }) {
  try {
    // 先 await params
    const params = await paramsPromise;
    const { lang = 'en', slug } = params;
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
      keywords: joinArrayWithComma(article.pageStats?.genKeywords) || 'default keywords',
      robots: 'index, follow',
      openGraph: {  // Add Open Graph protocol support
        title: article.title,
        description: article.description,
        type: 'article',
        publishedTime: article.updatedAt,
        modifiedTime: article.updatedAt,  
        locale: lang,
        siteName: 'KreadoAI',
        images: [{
          url: article.sections[0]?.rightContent?.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title
        }]
      },
      twitter: {  // Add Twitter Card support
        card: 'summary_large_image',
        title: article.title,
        description: article.description,
        images: article.coverImage,
        creator: '@KreadoAI'
      },
      alternates: {  // Add language version associations
        canonical: `https://kreadoai.com/${lang}/${slug}`,
        languages: {
          'en': `https://kreadoai.com/en/${slug}`,
          'zh': `https://kreadoai.com/zh/${slug}`,
          // Add other supported languages
        }
      },
      metadataBase: new URL('https://kreadoai.com'),
      authors: [{ name: article.author }],
      category: article.category
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Error',
      description: 'An error occurred while generating metadata.'
    };
  }
}

export async function generateStaticParams() {
  try {
    const response = await getArticles(process.env.CUSTOMER_ID, process.env.TOKEN);
    
    // 检查 response 和 response.data 是否存在
    if (!response?.data) {
      console.warn('No articles data received');
      return [];
    }

    // 过滤掉无效的文章数据
    const validArticles = response.data.filter(article => 
      article && 
      typeof article.lang === 'string' && 
      typeof article.pageLangId === 'string'
    );

    console.log('Articles', response.data);
    console.log('validArticles', validArticles);

    return validArticles.map((article) => ({
      lang: article.lang,
      slug: article.pageLangId
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return []; // 发生错误时返回空数组
  }
}
