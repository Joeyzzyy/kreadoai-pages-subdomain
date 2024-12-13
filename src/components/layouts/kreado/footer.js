import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { footerText } from '@/locales/footerText';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// 懒加载社交媒体图标组件
const SocialIcons = dynamic(() => import('./socialIcons'), {
  loading: () => <div className="h-5 w-20" />,
  ssr: false
});

export const KreadoaiFooter = () => {
  const [currentLang, setCurrentLang] = useState('en');
  const pathname = usePathname();

  useEffect(() => {
    const pathParts = pathname.split('/');
    const lang = pathParts[1] === 'zh' ? 'zh' : 'en';
    setCurrentLang(lang);
  }, [pathname]);

  const text = footerText[currentLang];

  return (
    <footer className="bg-[#262B3A]">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/kreado-logo.webp"
                alt="Kreado Logo"
                width={110}
                height={53}
                className="h-9 w-auto"
                quality={100}
                priority
              />
            </Link>
            <p className="text-gray-300 text-base text-center sm:text-left">
              {text.slogan}
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <SocialIcons />
          </div>
        </div>

        {/* 其余代码保持不变 */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-400">
          {/* ... */}
        </div>
      </div>
    </footer>
  );
};