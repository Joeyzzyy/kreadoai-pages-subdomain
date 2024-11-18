// 新建文件：延迟加载分析功能
export const initAnalytics = () => {
    window.requestIdleCallback(() => {
      import('./analytics-core').then((module) => {
        module.init();
      });
    });
  };