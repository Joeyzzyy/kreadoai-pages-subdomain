import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const isDevelopment = process.env.NODE_ENV === 'development';
  const DOMAIN = process.env.DOMAIN || '';
  
  // 添加调试日志
  console.log('Original pathname:', pathname);
  
  // 如果路径已经包含 /articles，直接返回
  if (pathname.startsWith('/articles')) {
    console.log('Path contains /articles, skipping rewrite');
    return NextResponse.next();
  }

  // 在生产环境中检查是否是子域名访问
  if (!isDevelopment) {
    const isSubdomain = request.headers.get('host').startsWith(`pages.${DOMAIN}`);
    if (!isSubdomain) {
      return NextResponse.next();
    }
  }

  // 重写路径
  const url = request.nextUrl.clone();
  url.pathname = `/articles${pathname}`;
  
  // 添加调试日志
  console.log('Rewritten pathname:', url.pathname);

  // 添加缓存相关的头部
  response.headers.set('Cache-Control', 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400');
  
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};