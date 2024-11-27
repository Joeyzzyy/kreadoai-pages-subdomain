import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isDevelopment = process.env.NODE_ENV === 'development';
  const DOMAIN = process.env.DOMAIN || '';
  
  // 只处理 /{lang}/{slug} 格式的路径
  const pathRegex = /^\/[a-z]{2}\/[\w-]+$/;
  if (!pathRegex.test(pathname)) {
    console.log('Path does not match /{lang}/{slug} format, skipping middleware');
    return NextResponse.next();
  }

  // 在生产环境中检查是否是子域名访问
  if (!isDevelopment) {
    const isSubdomain = request.headers.get('host').startsWith(`pages.${DOMAIN}`);
    if (!isSubdomain) {
      return NextResponse.next();
    }
  }

  // 重写路径，直接添加 /en 前缀
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  
  console.log('Rewritten pathname:', url.pathname);

  const response = NextResponse.rewrite(url);
  response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400');
  
  return response;
}

export const config = {
  matcher: [
    '/:lang/:slug*',
    // 排除特定路径
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};