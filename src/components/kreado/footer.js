"use client";
import Link from 'next/link';

export const KreadoFooter = () => {
  return (
    <footer className="bg-[#F4F6FF]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Logo */}
          <Link href="/">
            <img src="/images/kreado-logo.webp" alt="JohnSmith" className="h-8" />
          </Link>
          
          {/* Email */}
          <p className="text-sm">support@kreadoai.com</p>
          
          {/* Workbench Link */}
          <a 
            href="https://www.kreadoai.com/ai/workbench"
            className="text-sm hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kreado Video Creation Center
          </a>
        </div>
      </div>
    </footer>
  );
};
