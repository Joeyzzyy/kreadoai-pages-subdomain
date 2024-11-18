"use client";
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebook, FaInstagram, FaDiscord, FaLinkedin, FaXTwitter, FaYoutube, FaTiktok } from 'react-icons/fa6';

export const KreadoFooter = () => {
  return (
    <footer className="bg-[#262B3A]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/kreado-logo.png"
                alt="Kreado Logo"
                width={110}
                height={53}
                className="h-9 w-auto"
                quality={100}
                priority
              />
            </Link>
            <p className="text-gray-300 text-base">
              AIGC Digital Marketing Creation
            </p>
          </div>
          
          <div className="flex space-x-6">
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

        <div className="flex justify-center items-center space-x-4 text-sm text-gray-400">
          <a 
            href="mailto:support@kreadoai.com" 
            className="hover:text-gray-200"
          >
            support@kreadoai.com
          </a>
          <span>|</span>
          <a 
            href="https://help.kreadoai.com/zh-CN/" 
            className="hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Help Center
          </a>
          <span>|</span>
          <a 
            href="https://www.kreadoai.com/terms-of-service" 
            className="hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Service Terms
          </a>
          <span>|</span>
          <a 
            href="https://www.kreadoai.com/privacy-policy" 
            className="hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <span>|</span>
          <p>Copyright © www.kreadoai.com</p>
          <span>|</span>
          <p>陕ICP备16009628号-11</p>
          <span>|</span>
          <a 
            href="https://beian.cac.gov.cn/#/index" 
            className="hover:text-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            网信算备610102726918801240017号
          </a>
        </div>
      </div>
    </footer>
  );
};
