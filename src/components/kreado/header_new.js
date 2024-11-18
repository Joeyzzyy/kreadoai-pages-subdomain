"use client";
import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import '../../styles/globals.css'

const menuItems = [
    {
        key: "features",
        label: "Features",
        href: "#",
        submenu: {
            updates: {
                title: "LATEST UPDATES ➜",
                items: [
                    {
                        title: "KreadoAl's 450+ Digital Avatars Unlocks Endless Possibilities",
                        href: "https://help.kreadoai.com/en/articles/10062778-kreadoai-s-450-digital-avatars-unlocks-endless-possibilities"
                    },
                    {
                        title: "Effortless Al Video Creation: KreadoAl Launches New Animation Features",
                        href: "https://help.kreadoai.com/en/articles/10038547-effortless-ai-video-creation-kreadoai-launches-new-animation-features"
                    }
                ],
                action: {
                    label: "View All Updates",
                    href: "https://help.kreadoai.com/en/collections/7626091-latest-upadates"
                }
            },
            categories: [
                {
                    title: "VIDEO CREATIVE",
                    items: [
                        {
                            icon: "/images/icons/avatar.svg",
                            title: "🎬 Digital Avatar Video",
                            description: "More than 300 kinds of real-life digital characters",
                            href: "https://www.kreadoai.com/digital-avatar"
                        },
                        {
                            icon: "/images/icons/text-video.svg",
                            title: "📺 Live Streaing",
                            description: "Quickly set up a live streamingroom, digital people live",
                            href: "https://www.kreadoai.com/liveStreaming"
                        },
                        {
                            icon: "/images/icons/translation.svg",
                            title: "🗣️ Talking Photo",
                            description: "Al generates photos of people,input text ta generate spoken",
                            href: "https://www.kreadoai.com/talking-photo"
                        },
                        {
                            icon: "/images/icons/customize.svg",
                            title: "🤖 Al intelligent Guide",
                            description: "Digital Avatar real-timeinteractive communication",
                            href: "https://www.kreadoai.com/smartShopping"
                        },
                        {
                            icon: "/images/icons/template.svg",
                            title: "📊 Digital Human PPT Creation",
                            description: "Upload PPT to make digital population broadcast video",
                            href: "https://www.kreadoai.com/digital-ppt-creation"
                        },
                        {
                            icon: "/images/icons/batch.svg",
                            title: "🔗 URL-to-Video",
                            description: "Just enter the URl and quicklygenerate popular short videos",
                            href: "https://www.kreadoai.com/url-to-video"
                        }
                    ]
                },
                {
                    title: "AI TOOLS",
                    items: [
                        {
                            icon: "/images/icons/voice.svg",
                            title: "👥 Avatar Clone",
                            description: "Record the video, restore the character 1:1",
                            href: "https://www.kreadoai.com/avatarClone"
                        },
                        {
                            icon: "/images/icons/script.svg",
                            title: "🎙️ Voice Clone",
                            description: "Reproduct the voice and temperament",
                            href: "https://www.kreadoai.com/voiceClone"
                        },
                        {
                            icon: "/images/icons/subtitle.svg",
                            title: "🌐 AI Text Dubbing",
                            description: "Support 140 languages",
                            href: "https://www.kreadoai.com/ai/dubbing"
                        },
                        {
                            icon: "/images/icons/dub.svg",
                            title: "✍️ AI Copywriting",
                            description: "20 languages worldwide",
                            href: "https://www.kreadoai.com/ai/marketing"
                        }
                    ]
                },
                {
                    title: "PICTURE IDEAS",
                    items: [
                        {
                            icon: "/images/icons/background.svg",
                            title: "👤 Real Mddel Generated",
                            description: "Quickly generate real-life models with different skin",
                            href: "https://www.kreadoai.com/model"
                        },
                        {
                            icon: "/images/icons/style.svg",
                            title: "✂️ AI Smart Cutout",
                            description: "Remove image background",
                            href: "https://www.kreadoai.com/ai/cutout"
                        },
                        {
                            icon: "/images/icons/enhance.svg",
                            title: "👱‍♀️ Virtual Wigs Try-On",
                            description: "Scan your face and virtually try on wig products",
                            href: "https://www.kreadoai.com/model/VirtualTryOn"
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "resource",
        label: "Resource",
        href: "#",
        submenu: {
            updates: {
                title: "👉 GETTING STARTED",
                items: [
                    {
                        title: "Learn more about KreadoAI!",
                        href: "https://help.kreadoai.com/en/collections/7626106-general"
                    },
                    {
                        title: "How to create free account?",
                        href: "https://help.kreadoai.com/en/articles/8696921-account-create-account-verified-email-reset-password"
                    },
                    {
                        title: "How to create a Video?",
                        href: "https://help.kreadoai.com/en/collections/7700517-ai-video-creation"
                    },
                    {
                        type: "row",
                        items: [
                            {
                                title: "HelpCenter",
                                href: "https://help.kreadoai.com/en"
                            },
                            {
                                title: "Email",
                                href: "mailto:support@kreadoai.com"
                            }
                        ]
                    }
                ]
            },
            categories: [
                {
                    title: "HELP CENTER",
                    items: [
                        {
                            icon: "/images/icons/guide.svg",
                            title: "📚 User Guides",
                            description: "Step-by-step tutorials and user manuals",
                            href: "https://help.kreadoai.com/en/collections/7626088-tutorials"
                        },
                        {
                            icon: "/images/icons/faq.svg",
                            title: "❓ FAQ",
                            description: "Frequently asked questions and answers",
                            href: "https://help.kreadoai.com/en/collections/7626087-faqs"
                        },
                        {
                            icon: "/images/icons/support.svg",
                            title: "🎯 Technical Support",
                            description: "Get help with technical issues",
                            href: "https://tally.so/r/m6NBNJ"
                        },
                        {
                            icon: "/images/icons/community.svg",
                            title: "👥 Community",
                            description: "Join our community of creators",
                            href: "https://help.kreadoai.com/en/collections/7825250-blog"
                        }
                    ]
                }
            ]
        }
    },
    {
        key: "pricing",
        label: "Pricing",
        href: "https://www.kreadoai.com/price"
    },
    {
        key: "api",
        label: "API Docs",
        href: "https://help.kreadoai.com/en/articles/8855686-api-support-documentation"
    }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (key) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    const newTimeoutId = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
    setTimeoutId(newTimeoutId);
  };

  // 移动端菜单切换
  const toggleMobileSubmenu = (key) => {
    setMobileSubmenu(mobileSubmenu === key ? null : key);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      hasScrolled || activeDropdown ? 'bg-white shadow' : 'bg-transparent'
    }`}>
      <div className="max-w-[1450px] mx-auto px-6">
        {/* 主导航栏 */}
        <div className="flex justify-between h-[4.2rem]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
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
          </div>

          {/* 桌面端菜单 */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => item.submenu && handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    target={item.submenu ? undefined : "_blank"}
                    rel={item.submenu ? undefined : "noopener noreferrer"}
                    onClick={(e) => {
                      if (item.submenu) {
                        e.preventDefault();
                      }
                    }}
                    className={`text-[15px] font-medium transition-all duration-300 flex items-center ${
                      hasScrolled || activeDropdown
                        ? 'text-gray-900 hover:text-blue-600'
                        : 'text-white hover:text-blue-300'
                    }`}
                  >
                    {item.label}
                    {item.submenu && (
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.key ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {/* 桌面端下拉菜单 - 保持原有逻辑 */}
                  {item.submenu && activeDropdown === item.key && (
                    <div 
                      className="fixed top-[4.2rem] left-0 right-0 w-full bg-[#FAFBFF] -mt-[1px]"
                      onMouseEnter={() => handleMouseEnter(item.key)}
                      onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-[1450px] mx-auto px-6 py-8">
                            <div className="flex">
                                {/* 左侧区域 - 根据不同的 key 显示不同内容 */}
                                <div className="w-[280px] flex-shrink-0 pr-8 border-r border-gray-200">
                                    {item.key === 'features' ? (
                                        // Features 的原有内容
                                        <>
                                            <Image
                                                src="/images/kreado-header-menu.png"
                                                width={240}
                                                height={135}
                                                alt="Latest Updates"
                                                className="rounded-lg w-full"
                                            />
                                            <h3 className="text-base font-medium tracking-wide text-gray-700 my-6 flex items-center">
                                                {item.submenu.updates.title}
                                            </h3>
                                            <div className="space-y-4">
                                                {item.submenu.updates.items.map((update, index) => (
                                                    <div key={index}>
                                                        <a 
                                                            href={update.href} 
                                                            className="text-sm text-gray-600/90 hover:text-blue-600 transition-colors duration-200"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            {update.title}
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        // Resource 的新内容
                                        <>
                                            <h3 className="text-base font-medium tracking-wide text-gray-700 mb-6">
                                                {item.submenu.updates.title}
                                            </h3>
                                            <div className="space-y-3">
                                                {item.submenu.updates.items.map((update, index) => (
                                                    <div key={index}>
                                                        {update.type === "row" ? (
                                                            <div className="flex items-center space-x-4 mt-4">
                                                                {update.items.map((rowItem, rowIndex) => (
                                                                    <>
                                                                        <a 
                                                                            key={rowIndex}
                                                                            href={rowItem.href} 
                                                                            className="text-sm text-gray-600/90 hover:text-blue-600 transition-colors duration-200 flex items-center"
                                                                            target="_blank"
                                                                            rel="noopener noreferrer"
                                                                        >
                                                                            {rowItem.title === "HelpCenter" && (
                                                                                <span className="mr-2">🎯</span>
                                                                            )}
                                                                            {rowItem.title === "Email" && (
                                                                                <span className="mr-2">✉️</span>
                                                                            )}
                                                                            {rowItem.title}
                                                                        </a>
                                                                        {rowIndex === 0 && (
                                                                            <div className="h-4 w-px bg-gray-200"></div>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <a 
                                                                href={update.href} 
                                                                className="text-sm text-gray-600/90 hover:text-blue-600 transition-colors duration-200 block pb-3 border-b border-gray-100"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                {update.title}
                                                            </a>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                    {item.key === 'features' && item.submenu.updates.action && (
                                        <a 
                                            href={item.submenu.updates.action.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-6 border border-gray-200 text-gray-500 px-6 py-2 rounded-md hover:bg-gray-50/70 hover:border-gray-300 transition-all duration-300 w-full text-center block"
                                        >
                                            {item.submenu.updates.action.label}
                                        </a>
                                    )}
                                </div>
                                
                                {/* 右侧功能区域 */}
                                <div className="flex-1 pl-8">
                                    <div className="flex">
                                        {item.submenu.categories.map((category, categoryIndex) => (
                                            <div 
                                                key={categoryIndex} 
                                                className={`${
                                                    categoryIndex > 0 ? 'ml-8 pl-8 border-l border-gray-200' : ''
                                                } ${
                                                    item.key === "resource" 
                                                        ? 'w-full'
                                                        : category.title === "VIDEO CREATIVE" 
                                                            ? 'w-[45%]' 
                                                            : category.title === "AI TOOLS"
                                                                ? 'w-[30%]'
                                                                : 'w-[25%]'
                                                }`}
                                            >
                                                <h3 className="text-base font-medium tracking-wide text-gray-700 mb-6">{category.title}</h3>
                                                <div className={`grid ${
                                                    item.key === "resource"
                                                        ? 'grid-cols-4'
                                                        : category.title === "VIDEO CREATIVE" 
                                                            ? 'grid-cols-2' 
                                                            : 'grid-cols-1'
                                                } gap-4`}>
                                                    {category.items.map((item, index) => (
                                                        <div 
                                                            key={index} 
                                                            className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-gray-50/50 transition-all duration-300 cursor-pointer"
                                                            onClick={() => {
                                                                if (item.href) {
                                                                    window.open(item.href, '_blank', 'noopener,noreferrer');
                                                                }
                                                            }}
                                                        >
                                                            <div>
                                                                <h4 className="font-medium text-gray-800 text-sm mb-1">
                                                                    {item.title}
                                                                </h4>
                                                                <p className="text-xs text-gray-500/80">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 右侧链接 */}
          <div className="hidden md:flex items-center">
            <Link
              href="https://www.kreadoai.com/ai/workbench"
              className={`text-base transition duration-300 ${
                hasScrolled || activeDropdown ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              Home
            </Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                hasScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              <span className="sr-only">Open menu</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 移动端菜单面板 */}
        {isOpen && (
          <div className="md:hidden bg-[#FAFBFF] border-t border-gray-200">
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-4 space-y-2">
                {menuItems.map((item) => (
                  <div key={item.key} className="relative">
                    {/* 主菜单项 */}
                    <div
                      className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 cursor-pointer"
                      onClick={() => {
                        if (item.submenu) {
                          toggleMobileSubmenu(item.key);
                        } else {
                          window.open(item.href, '_blank');
                        }
                      }}
                    >
                      <span>{item.label}</span>
                      {item.submenu && (
                        <svg
                          className={`ml-2 h-5 w-5 transition-transform duration-200 ${
                            mobileSubmenu === item.key ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </div>

                    {/* 移动端子菜单 */}
                    {item.submenu && mobileSubmenu === item.key && (
                      <div className="mt-3 space-y-4">
                        {/* Updates 部分 */}
                        <div className="px-3">
                          {item.key === 'features' && (
                            <div className="mb-4">
                              <Image
                                src="/images/kreado-header-menu.png"
                                width={160}
                                height={90}
                                alt="Latest Updates"
                                className="rounded-lg w-full max-w-[160px]"
                              />
                            </div>
                          )}
                          <h3 className="text-base font-medium tracking-wide text-gray-700 mb-3">
                            {item.submenu.updates.title}
                          </h3>
                          <div className="space-y-3">
                            {item.submenu.updates.items.map((updateItem, index) => (
                              <div key={index}>
                                {updateItem.type === "row" ? (
                                  <div className="flex items-center space-x-4 mt-4">
                                    {updateItem.items.map((rowItem, rowIndex) => (
                                      <Fragment key={rowIndex}>
                                        <a 
                                          href={rowItem.href} 
                                          className="text-sm text-gray-600/90 hover:text-blue-600 transition-colors duration-200 flex items-center"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                        >
                                          {rowItem.title === "HelpCenter" && (
                                            <span className="mr-2">🎯</span>
                                          )}
                                          {rowItem.title === "Email" && (
                                            <span className="mr-2">✉️</span>
                                          )}
                                          {rowItem.title}
                                        </a>
                                        {rowIndex === 0 && (
                                          <div className="h-4 w-px bg-gray-200"></div>
                                        )}
                                      </Fragment>
                                    ))}
                                  </div>
                                ) : (
                                  <a 
                                    href={updateItem.href} 
                                    className="text-sm text-gray-600/90 hover:text-blue-600 transition-colors duration-200 block pb-3 border-b border-gray-100"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {updateItem.title}
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Categories 部分 */}
                        {item.submenu.categories.map((category, index) => (
                          <div key={index} className="border-t border-gray-100 pt-4">
                            <div className="px-3">
                              <h3 className="text-base font-medium tracking-wide text-gray-700 mb-3">
                                {category.title}
                              </h3>
                              <div className="grid grid-cols-1 gap-3">
                                {category.items.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-gray-50/50 transition-all duration-300"
                                  >
                                    <div>
                                      <h4 className="font-medium text-gray-800 text-sm mb-1">
                                        {subItem.title}
                                      </h4>
                                      <p className="text-xs text-gray-500/80">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Action 按钮 */}
                        {item.key === 'features' && item.submenu.updates.action && (
                          <div className="px-3">
                            <a 
                              href={item.submenu.updates.action.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-4 border border-gray-200 text-gray-500 px-6 py-2 rounded-md hover:bg-gray-50/70 hover:border-gray-300 transition-all duration-300 w-full text-center block"
                            >
                              {item.submenu.updates.action.label}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export const KreadoHeader = () => {
  return <Navigation />;
};