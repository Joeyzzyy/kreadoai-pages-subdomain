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
import fontStyles from '../../../styles/textStyles';
import PropTypes from 'prop-types';

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
  
  // 设备���关
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
  const tableData = data;

  return (
    <div className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`${fontStyles.h2.fontSize} ${fontStyles.h2.fontWeight} ${fontStyles.h2.color} mb-4`}>
            {tableData.topContent.title}
          </h2>
          <p className={`${fontStyles.subtitle.fontSize} ${fontStyles.subtitle.color} max-w-3xl mx-auto`}>
            {tableData.topContent.subtitle}
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full border border-gray-100 rounded-lg bg-white shadow-sm">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-4 px-6 text-left bg-gray-50 font-medium text-sm md:text-base text-black/70 w-[320px] first:rounded-tl-lg">
                    Features
                  </th>
                  <th className="py-4 px-4 text-center border-x border-gray-100 bg-gray-50 w-[140px] text-sm md:text-base text-black/70">
                    {tableData.topContent.companies.competitor}
                  </th>
                  <th className="py-4 px-4 text-center border-gray-100 bg-gray-50 w-[140px] text-sm md:text-base text-black/70">
                    <div className="flex items-center justify-center gap-2">
                      {tableData.topContent.companies.us}
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.bottomContent.features.map((feature, index) => (
                  <tr key={index} 
                      className="hover:bg-gray-50/50 transition-colors duration-200">
                    <td className="py-4 px-6 border-t border-gray-100">
                      <div className="flex items-center gap-3">
                        {(() => {
                          const IconComponent = getIconByFeatureName(feature.name);
                          return IconComponent ? <IconComponent className="text-[#3374FF] text-lg" /> : null;
                        })()}
                        <span className="text-black/80 font-medium">{feature.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center border-t border-x border-gray-100">
                      {feature.competitor ? 
                        <IoCheckmarkCircle className="inline text-green-500 text-2xl" /> : 
                        <IoCloseCircle className="inline text-red-500 text-2xl" />
                      }
                    </td>
                    <td className="py-4 px-4 text-center border-t border-gray-100">
                      {feature.us ? 
                        <IoCheckmarkCircle className="inline text-green-500 text-2xl" /> : 
                        <IoCloseCircle className="inline text-red-500 text-2xl" />
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
  );
};

ProductComparisonTable.propTypes = {
  author: PropTypes.oneOf(['HIXAI', 'JOGGAI', 'JohnsmithAI', 'KREADO'])
};

export default ProductComparisonTable;