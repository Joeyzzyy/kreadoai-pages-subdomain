'use client';
import React from 'react';
import { FaCheck, FaTimes, FaRocket, FaShieldAlt, FaRobot, FaTools, 
  FaChartBar, FaLanguage, FaCloud, FaLock, FaUsers, FaFileAlt,
  FaPlug, FaWifi, FaCodeBranch, FaDatabase, FaSearch, FaChartLine,
  FaUsersCog, FaVial, FaMobile, FaHeadset, FaEdit, FaPencilAlt, FaDesktop, FaUserInterface, FaWindowMaximize, FaDollarSign, FaMoneyBill, FaPriceTag
} from 'react-icons/fa';
import { 
  IoCheckmarkCircle,  // 带圆圈的绿色对勾
  IoCloseCircle       // 带圆圈的红色叉号
} from "react-icons/io5";
import authorStyles from '../../../styles/textStyles';
import PropTypes from 'prop-types';
import KreadoIcon from '../../../../public/images/kreado-logo-content-use.webp';
import Image from 'next/image';

// 创建一个图标映射对象
const iconMap = {
  // AI & 机器人相关
  FaRobot: FaRobot,
  FaAi: FaRobot,
  FaAndroid: FaRobot,

  // 用户相关
  FaUserFriends: FaUsers,
  FaUserCircle: FaUsers,
  FaUserGroup: FaUsers,
  FaUsersCog: FaUsersCog,
  FaPeopleGroup: FaUsers,
  FaUserEdit: FaUsers,
  
  // 全球化 & 语言
  FaGlobe: FaLanguage,
  FaGlobeAmericas: FaLanguage,
  FaGlobeAsia: FaLanguage,
  FaTranslate: FaLanguage,
  
  // 媒体相关
  FaVideo: FaMobile,
  FaVideoCamera: FaMobile,
  FaPlay: FaMobile,
  
  // 云服务相关
  FaCloud: FaCloud,
  FaCloudUpload: FaCloud,
  FaCloudDownload: FaCloud,
  FaServer: FaCloud,
  
  // 文件相关
  FaFolderOpen: FaFileAlt,
  FaFolder: FaFileAlt,
  FaFile: FaFileAlt,
  FaFiles: FaFileAlt,
  
  // 数据 & 分析
  FaChartLine: FaChartLine,
  FaChart: FaChartBar,
  FaChartBar: FaChartBar,
  FaChartPie: FaChartLine,
  FaAnalytics: FaChartLine,
  
  // 安全相关
  FaLock: FaLock,
  FaShield: FaShieldAlt,
  FaSecurity: FaShieldAlt,
  FaKey: FaLock,
  
  // 开发相关
  FaCode: FaCodeBranch,
  FaGit: FaCodeBranch,
  FaBranch: FaCodeBranch,
  
  // 数据库
  FaDatabase: FaDatabase,
  FaStorage: FaDatabase,
  
  // 搜索
  FaSearch: FaSearch,
  FaMagnifyingGlass: FaSearch,
  
  // 工具
  FaTools: FaTools,
  FaWrench: FaTools,
  FaCog: FaTools,
  FaGear: FaTools,
  
  // 连接性
  FaWifi: FaWifi,
  FaPlug: FaPlug,
  FaConnection: FaWifi,
  
  // 测试
  FaVial: FaVial,
  FaFlask: FaVial,
  FaTest: FaVial,
  
  // 客服
  FaHeadset: FaHeadset,
  FaSupport: FaHeadset,
  FaCustomerService: FaHeadset,
  
  // 性能
  FaRocket: FaRocket,
  FaSpeed: FaRocket,
  FaPerformance: FaRocket,
  
  // 设备相关
  FaDesktop: FaTools,
  FaUserInterface: FaTools,
  FaWindowMaximize: FaTools,
  FaDollarSign: FaRocket,
  FaMoneyBill: FaRocket,
  FaPriceTag: FaRocket,
  FaEdit: FaTools,
  FaPencilAlt: FaTools
};

const getIconByFeatureName = (featureName) => {
  // 定义特征组及其关键词
  const featureGroups = {
    AI: {
      icon: FaRobot,
      keywords: ['ai', 'artificial', 'intelligence', 'smart', 'automated', 'machine', 'learning', 'neural', 'cognitive', 'bot']
    },
    Interface: {
      icon: FaDesktop,
      keywords: ['interface', 'ui', 'ux', 'user', 'friendly', 'dashboard', 'screen', 'display', 'layout', 'design']
    },
    Editing: {
      icon: FaPencilAlt,
      keywords: ['edit', 'modify', 'change', 'customize', 'real-time', 'live', 'instant', 'update', 'adjust']
    },
    Language: {
      icon: FaLanguage,
      keywords: ['language', 'translate', 'localization', 'global', 'international', 'multi-language', 'speech']
    },
    Media: {
      icon: FaMobile,
      keywords: ['video', 'media', 'audio', 'record', 'play', 'stream', 'content', 'watch']
    },
    Collaboration: {
      icon: FaUsers,
      keywords: ['collaboration', 'team', 'group', 'share', 'together', 'social', 'community', 'collective']
    },
    Storage: {
      icon: FaCloud,
      keywords: ['storage', 'cloud', 'save', 'backup', 'store', 'data', 'upload', 'download']
    },
    Analytics: {
      icon: FaChartLine,
      keywords: ['analytics', 'statistics', 'metrics', 'measure', 'track', 'monitor', 'performance', 'report']
    },
    Support: {
      icon: FaHeadset,
      keywords: ['support', 'help', 'service', 'assist', 'customer', 'care', 'contact']
    },
    Security: {
      icon: FaShieldAlt,
      keywords: ['security', 'protect', 'safe', 'privacy', 'secure', 'guard', 'encrypt']
    },
    Pricing: {
      icon: FaDollarSign,
      keywords: ['price', 'cost', 'payment', 'affordable', 'budget', 'money', 'subscription', 'plan']
    },
    Performance: {
      icon: FaRocket,
      keywords: ['performance', 'speed', 'fast', 'quick', 'efficient', 'optimize', 'boost']
    }
  };

  // 将特征名称转换为小写并分词
  const words = featureName.toLowerCase().split(/[\s-]+/);
  
  // 计算每个特征组的匹配分数
  const scores = Object.entries(featureGroups).map(([group, { icon, keywords }]) => {
    let score = 0;
    words.forEach(word => {
      // 完全匹配得3分
      if (keywords.includes(word)) {
        score += 3;
      } else {
        // 部分匹配得1分（如果关键词包含当前词或当前词包含关键词）
        keywords.forEach(keyword => {
          if (keyword.includes(word) || word.includes(keyword)) {
            score += 1;
          }
        });
      }
    });
    return { group, icon, score };
  });

  // 获取得分最高的特征组
  const bestMatch = scores.reduce((best, current) => 
    current.score > best.score ? current : best
  , { score: -1 });

  // 如果没有任何匹配（得分为0），返回默认图标
  return bestMatch.score > 0 ? bestMatch.icon : FaTools;
};

const ProductComparisonTable = ({ data, author }) => {
  const styles = authorStyles[author];
  const tableData = data;

  return (
    <div className="bg-gradient-radial from-gray-50 via-white to-gray-50 py-8 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className={`mb-3 md:mb-4 ${styles.h1.fontSize} ${styles.h1.fontWeight} ${styles.h1.color}`}>
            {tableData.topContent.title}
          </h2>
          <p className={`${styles.paragraph.fontSize} ${styles.paragraph.color} px-4`}>
            {tableData.topContent.subtitle}
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 transform translate-y-4 translate-x-2 hidden md:block">
            <div className="w-full h-full bg-gray-100/50 rounded-xl"></div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="inline-block min-w-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                backdrop-blur-sm bg-white/90 border border-gray-100">
                <table className="w-full border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="py-4 md:py-6 px-4 md:px-6 text-left bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 
                        text-gray-600 font-medium w-[240px] md:w-[320px] first:rounded-tl-xl backdrop-blur-sm text-sm md:text-base">
                        Features
                      </th>
                      <th className="py-4 md:py-6 px-3 md:px-4 text-center border-[0.7px] border-gray-200 bg-red-50 
                        w-[100px] md:w-[140px] text-sm md:text-base">
                        {tableData.topContent.companies.competitor}
                      </th>
                      <th className="py-4 md:py-6 px-3 md:px-4 text-center border-[0.7px] border-gray-200 bg-green-50 
                        w-[100px] md:w-[140px] text-sm md:text-base">
                        <div className="flex items-center justify-center gap-2">
                          <Image 
                            src={KreadoIcon} 
                            alt={`${author} icon`}
                            width={20}
                            height={20}
                            className="w-4 h-4 md:w-5 md:h-5"
                          />
                          {tableData.topContent.companies.us}
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.bottomContent.features.map((feature, index) => (
                      <tr key={index} 
                          className="hover:bg-gray-50/50 transition-all duration-200 ease-in-out
                          hover:backdrop-blur-sm">
                        <td className="py-6 px-8 border-t border-gray-100/60 w-1/2">
                          <div className="flex items-center gap-4">
                            {/* 将字符串转换为实际的图标组件 */}
                            {(() => {
                              const IconComponent = getIconByFeatureName(feature.name);
                              return IconComponent ? <IconComponent className="text-blue-500 text-xl" /> : null;
                            })()}
                            <span className="font-medium text-gray-700">{feature.name}</span>
                          </div>
                        </td>
                        <td className={`py-6 px-4 text-center border-[0.7px] border-gray-200 ${feature.competitor ? 'bg-green-50' : 'bg-red-50'} w-1/4`}>
                          {feature.competitor ? 
                            <IoCheckmarkCircle className="inline text-green-500 text-3xl" /> : 
                            <IoCloseCircle className="inline text-red-500 text-3xl" />
                          }
                        </td>
                        <td className={`py-6 px-4 text-center border-[0.7px] border-gray-200 ${feature.us ? 'bg-green-50' : 'bg-red-50'} w-1/4`}>
                          {feature.us ? 
                            <IoCheckmarkCircle className="inline text-green-500 text-3xl" /> : 
                            <IoCloseCircle className="inline text-red-500 text-3xl" />
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductComparisonTable.propTypes = {
  author: PropTypes.oneOf(['HIXAI', 'JOGGAI', 'JohnsmithAI', 'KREADO'])
};

export default ProductComparisonTable;