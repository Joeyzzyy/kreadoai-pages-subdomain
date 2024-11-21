import { getArticleBySlug } from '../../lib/api/index';
import dynamicImport from 'next/dynamic';
import { notFound } from 'next/navigation';

// 添加这个配置来启用动态路由
export const dynamic = 'force-dynamic'

// 如果需要的话，也可以添加这个配置来处理不同的域名
export const dynamicParams = true

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

// 动态导入客户端组件
const KreadoaiHeader = dynamicImport(() => import('../../components/layouts/kreado/header').then(mod => mod.KreadoaiHeader), {
  ssr: false
});
const KreadoaiFooter = dynamicImport(() => import('../../components/layouts/kreado/footer').then(mod => mod.KreadoaiFooter), {
  ssr: false
});

// Layout 组件可以正常导入，因为它是服务器组件
import KreadoaiLayout from '../../components/layouts/kreado/layout';

// 主页面组件
export default async function ArticlePage({ params }) {
  const { slug } = params;
  
  try {
    const articleData = await getArticleBySlug(slug, process.env.TOKEN);
    
    if (!articleData?.data?.[0]) {
      notFound();
    }
    
    const article = articleData.data[0];
        
    return (
      <div className="flex flex-col min-h-screen"> 
        <KreadoaiHeader />
        <main className="flex-grow">
          <KreadoaiLayout article={article} />
        </main>
        <KreadoaiFooter />
      </div>
    );
  } catch (error) {
    console.error('Error fetching article:', error);
    notFound();
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