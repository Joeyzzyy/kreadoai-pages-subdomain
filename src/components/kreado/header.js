"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import '../../styles/globals.css'
import { Dropdown } from 'antd';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'cn', label: '中文' },
]

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const items = languages.map((lang) => ({
    key: lang.code,
    label: (
      <button
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
        onClick={() => setSelectedLang(lang)}
      >
        {lang.label}
      </button>
    ),
  }));

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const searchUrl = `https://help.kreadoai.com/${selectedLang.code}/?q=${encodeURIComponent(searchQuery)}`;
      window.location.href = searchUrl;
    }
  };

  return (
    <div className="relative">
      <div 
        className="absolute top-0 left-0 right-0 h-[215px] z-0"
        style={{
          backgroundImage: "url('/images/kreado-header-bg.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <nav className="bg-transparent relative z-10">
        <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center pt-4">
            <div className="flex-shrink-0">
              <Link href="https://kreadoai.com">
                <Image
                  src="/images/kreado-logo.webp"
                  alt="Kreado Logo"
                  width={100}
                  height={38}
                  className="h-9 w-auto"
                  quality={100}
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Link 
                href="https://kreadoai.com" 
                target="_blank"
                rel="noopener noreferrer" 
                className="text-white hover:text-gray-200 transition-colors text-sm"
              >
                Back to KreadoAI
              </Link>

              {/* <Dropdown
                menu={{ items }}
                placement="bottomRight"
              >
                <button className="text-white px-3 py-2 rounded-md hover:bg-white/10">
                  {selectedLang.label}
                </button>
              </Dropdown> */}
            </div>
          </div>
        </div>

        <div className="w-[70%] mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
              placeholder="Search for articles"
              className="w-full pl-12 pr-4 py-5 rounded-lg bg-white/30 backdrop-blur-sm 
                focus:bg-white focus:placeholder-gray-400 placeholder-white text-white
                focus:text-gray-900 transition-all duration-200
                focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="absolute left-4 top-5 h-6 w-6 text-white 
                transition-colors duration-200
                [input:focus~&]:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export const KreadoHeader = () => {
  return <Navigation />;
};
