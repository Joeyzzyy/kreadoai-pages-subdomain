import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaDiscord, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export const KreadoaiFooter = () => {
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
              AIGC Digital Marketing Creation
            </p>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://www.youtube.com/@kreadoai" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">YouTube</span>
              <FaYoutube className="h-5 w-5" />
            </a>
            <a 
              href="https://x.com/kreadoai2023" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">X (Twitter)</span>
              <FaXTwitter className="h-5 w-5" />
            </a>
            <a 
              href="https://www.facebook.com/kreadoai" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-5 w-5" />
            </a>
            <a 
              href="https://discord.com/invite/d9uu5STTwp" 
              className="text-gray-400 hover:text-gray-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">Discord</span>
              <FaDiscord className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 text-sm text-gray-400">
          <a href="mailto:support@kreadoai.com" className="hover:text-gray-200">
            support@kreadoai.com
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="https://help.kreadoai.com/zh-CN/" className="hover:text-gray-200">
            Help Center
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="https://www.kreadoai.com/terms-of-service" className="hover:text-gray-200">
            Service Terms
          </a>
          <span className="hidden sm:inline">|</span>
          <a href="https://www.kreadoai.com/privacy-policy" className="hover:text-gray-200">
            Privacy Policy
          </a>
          <span className="hidden sm:inline">|</span>
          <p>Copyright © www.kreadoai.com</p>
          <span className="hidden sm:inline">|</span>
          <p>陕ICP备16009628号-11</p>
          <span className="hidden sm:inline">|</span>
          <a href="https://beian.cac.gov.cn/#/index" className="hover:text-gray-200">
            网信算备610102726918801240017号
          </a>
        </div>
      </div>
    </footer>
  );
};
