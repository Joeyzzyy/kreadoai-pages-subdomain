import { getArticleBySlug, getAllArticles } from '../../lib/api';
import { notFound } from 'next/navigation';
import LayoutKreadoai from '../../components/kreado/layout_new';
import { KreadoHeader } from '../../components/kreado/header_new';
import { KreadoFooter } from '../../components/kreado/footer_new';
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

// 在文件顶部添加调试日志
console.log('Loading page.js file');

// 添加这个配置来启用动态路由
export const dynamic = 'force-dynamic'

// 如果需要的话，也可以添加这个配置来处理不同的域名
export const dynamicParams = true

// 创建一个布局映射对象来简化重复代码
const KREADO_LAYOUT = {
  Header: KreadoHeader,
  Layout: LayoutKreadoai,
  Footer: KreadoFooter
};

// 添加一个新的常量映射来存储不同作者的元数据配置
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

// 主页面组件
export default async function ArticlePage({ params }) {
  const { slug } = params;
  
  try {
    const articleData = await getArticleBySlug(slug, process.env.TOKEN);
    
    if (!articleData?.data?.[0]) {
      return notFound();
    }
    
    const article = articleData.data[0];
    const headersList = headers();
    const host = headersList.get('host');
    
    const layout = KREADO_LAYOUT;
    const { Header, Layout, Footer } = layout;
    
    // 修改返回结构，确保服务器端和客户端渲染结构一致
    return (
      <div 
        className="flex flex-col min-h-screen"
        data-cache-control="public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400"
      >
        <Header />
        <main className="flex-grow">
          <Layout article={article} />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    return notFound();
  }
}

// 从host中提取主域名
function getMainDomain(host) {
  const parts = host.split('.');
  // 兼容主域名和子域名
  return parts.length > 2 ? parts.slice(-3).join('.') : parts.slice(-2).join('.'); // 如果有子域名，返回最后三个部分
}

// 修改 generateMetadata 函数
export async function generateMetadata({ params }) {
  console.log('generateMetadata called with params:', params);

  try {
    const { slug } = params;
    console.log('Fetching article data for slug:', slug);

    try {
      const articleData = await getArticleBySlug(slug, process.env.TOKEN);
      console.log('Article data received:', articleData?.data?.[0] ? 'success' : 'not found');

      if (!articleData?.data?.[0]) {
        return {
          title: 'No Article Found',
          keywords: 'nokeywords',
          robots: 'noindex, nofollow'
        };
      }

      const article = articleData.data[0];
      console.log('Building metadata for article:', article.title);

      const authorConfig = KREADO_METADATA;

      const metadata = {
        title: `${authorConfig.title} - ${article.title}`,
        description: article.description || authorConfig.defaultDescription,
        keywords: article.keywords || '默认关键字',
        robots: 'index, follow',
        icons: authorConfig.icons
      };

      console.log('Final metadata:', metadata);
      return {
        ...metadata,
        other: {
          'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400'
        }
      };
    } catch (error) {
      console.error('Error fetching article for metadata:', error);
      return {
        title: 'No Article Found',
        keywords: 'nokeywords',
        robots: 'noindex, nofollow'
      };
    }
  } catch (error) {
    console.error('Metadata generation error:', error);
    return {
      title: 'Error',
      keywords: 'nokeywords',
      robots: 'noindex, nofollow'
    };
  }
}