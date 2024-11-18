// 新建文件：性能监控核心功能
import { getCLS, getFID, getLCP } from 'web-vitals';

export const measureJSPerformance = () => {
  const perfData = window.performance.getEntriesByType('resource')
    .filter(entry => entry.initiatorType === 'script')
    .map(entry => ({
      name: entry.name,
      duration: entry.duration,
      size: entry.encodedBodySize,
      startTime: entry.startTime
    }));

  console.table(perfData);
};

export function reportWebVitals(metric) {
  // 可以将数据发送到你的分析服务
  console.log(metric);
}