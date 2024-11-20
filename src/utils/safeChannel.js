export class SafeMessageChannel {
  constructor(channelName) {
    this.listeners = new Set();
    this.channelName = channelName;
    
    // 只在客户端创建 channel
    if (typeof window !== 'undefined') {
      try {
        this.channel = new BroadcastChannel(channelName);
        this.channel.onmessage = (event) => {
          this.listeners.forEach(listener => listener(event.data));
        };
      } catch (error) {
        console.warn('BroadcastChannel not supported');
      }
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
      // 如果没有监听器了，关闭通道
      if (this.listeners.size === 0 && this.channel) {
        this.channel.close();
        this.channel = null;
      }
    };
  }

  post(message) {
    if (this.channel) {
      this.channel.postMessage(message);
    }
  }

  close() {
    if (this.channel) {
      this.channel.close();
      this.channel = null;
    }
    this.listeners.clear();
  }
}

// 创建一个单例实例
let instance = null;

export const getMessageChannel = (channelName) => {
  if (!instance) {
    instance = new SafeMessageChannel(channelName);
  }
  return instance;
}; 