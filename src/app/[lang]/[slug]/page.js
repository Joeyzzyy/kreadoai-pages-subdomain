import { getArticleBySlug } from '../../../lib/api/index';
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
export default async function ArticlePage({ params }) {
  const { lang, slug } = params;
  
  // 验证语言参数
  if (!['en', 'zh'].includes(lang)) {
    notFound();
  }

  try {
    const articleData = await getArticleBySlug(slug, lang, process.env.TOKEN);
    
    if (!articleData?.data?.[0]) {
      notFound();
    }
    
    const article = articleData.data[0];

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

// 修改 generateMetadata 函数
export async function generateMetadata({ params }) {
  console.log('generateMetadata called with params:', params);

  try {
    const { lang = 'en', slug } = params;
    console.log('Fetching article data for slug:', slug);

    try {
      const articleData = await getArticleBySlug(slug, lang, process.env.TOKEN);
      console.log('Article data received:', articleData?.data?.[0] ? 'success' : 'not found');

      if (!articleData?.data?.[0]) {
        return {
          title: 'No Article Found',
          keywords: 'nokeywords',
          robots: 'noindex, nofollow'
        };
      }

      const article = articleData.data[0];
      const authorConfig = KREADO_METADATA;
      const metadata = {
        title: `${authorConfig.title} - ${article.title}`,
        description: article.description || authorConfig.defaultDescription,
        keywords: article.keywords || '默认关键字',
        robots: 'index, follow',
        icons: authorConfig.icons
      };

      return {
        ...metadata,
        other: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
        }
      };
    } catch (error) {
      return {
        title: 'No Article Found',
        keywords: 'nokeywords',
        robots: 'noindex, nofollow'
      };
    }
  } catch (error) {
    return {
      title: 'Error',
      keywords: 'nokeywords',
      robots: 'noindex, nofollow'
    };
  }
}