// 创建一个空的 BroadcastChannel 实现
if (typeof window !== 'undefined') {
  class EmptyBroadcastChannel {
    constructor() {}
    postMessage() {}
    addEventListener() {}
    removeEventListener() {}
    close() {}
  }

  // 替换全局的 BroadcastChannel
  try {
    window.BroadcastChannel = EmptyBroadcastChannel;
  } catch (e) {
    console.warn('Failed to override BroadcastChannel');
  }
} 