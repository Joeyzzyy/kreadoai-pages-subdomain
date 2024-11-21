class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, new Set());
    }
    this.events.get(event).add(callback);

    // 返回取消订阅函数
    return () => {
      const callbacks = this.events.get(event);
      if (callbacks) {
        callbacks.delete(callback);
        if (callbacks.size === 0) {
          this.events.delete(event);
        }
      }
    };
  }

  publish(event, data) {
    const callbacks = this.events.get(event);
    if (callbacks) {
      callbacks.forEach(callback => callback(data));
    }
  }
}

// 创建单例实例
let instance = null;

export const getMessageChannel = (channelName) => {
  if (typeof window === 'undefined') return null;
  
  if (!instance) {
    instance = new EventEmitter();
  }
  return instance;
};

// 为了保持与原有 API 兼容
export class SafeMessageChannel {
  constructor(channelName) {
    this.emitter = getMessageChannel(channelName);
    this.channelName = channelName;
  }

  subscribe(listener) {
    if (!this.emitter) return () => {};
    return this.emitter.subscribe(this.channelName, listener);
  }

  post(message) {
    if (!this.emitter) return;
    this.emitter.publish(this.channelName, message);
  }

  close() {
    // 清理逻辑
    this.emitter = null;
  }
} 