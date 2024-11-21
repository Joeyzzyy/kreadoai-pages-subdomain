import axios from 'axios';

const API_URL = 'https://strapi.sheet2email.com/v1';

// 创建 axios 实例，更新配置
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 添加响应拦截器
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // 清除本地存储的认证信息
      localStorage.removeItem('authToken');
      localStorage.removeItem('nextjsCustomers');
      localStorage.removeItem('selectedCustomer');
      
      // 如果在浏览器环境中，重定向到登录页面
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// 更新 apiClient 的 Authorization 头部
const updateApiClientAuth = (token) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// 检查是否在浏览器环境中
const isBrowser = typeof window !== 'undefined';

// 仅在浏览器环境中初始化 auth token
if (isBrowser) {
  updateApiClientAuth(localStorage.getItem('authToken'));
}

export async function getBatchHistoryData(customerId, page, limit) {
  try {
    const response = await apiClient.get('/batches', {params: {customerId, page, limit}});
    return response.data;
  } catch (error) {
    console.error('获取批次历史数据失败:', error);
    return null;
  }
};

// 获取批次历史数据
export async function getArticles(batchId, page, limit) {
  try {
    const response = await apiClient.get('/pages', {params: {batchId, page, limit}});
    return response.data;
  } catch (error) {
    console.error('获取批次历史数据失败:', error);
    return null;
  }
};

// 根据 id 获取单篇文章
export async function getArticleBySlug(id, token) {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.get(`${API_URL}/pages/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error fetching article by id:', error.response?.data || error.message);
    throw error;
  }
}

// 更新登录函数
export async function login(username, password) {
  return apiClient.post('/login', { username, password })
    .then(response => {
      console.log('login data: ', response.data);
      if (response.data.accessToken) {
        // 同时存储在 localStorage 和 cookies 中
        localStorage.setItem('authToken', response.data.accessToken);
        document.cookie = `authToken=${response.data.accessToken}; path=/; max-age=86400`; // 设置cookie有效期为1天

        // 存储客户信息
        if (response.data.customers && response.data.customers.length > 0) {
          setCustomers(response.data.customers);
          localStorage.setItem('selectedCustomer', JSON.stringify(response.data.customers[0]));
        }
        
        updateApiClientAuth(response.data.accessToken);
        return true;
      }
      return false;
    });
}

export async function getDomains(customerId, page, limit) {
  try {
    const response = await apiClient.get('/domain', {
      params: { customerId, page, limit }
    });
    return response.data;
  } catch (error) {
    console.error('获取域名列表失败:', error);
    return null;
  }
}

export function logout() {
  localStorage.removeItem('authToken');
  document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  updateApiClientAuth(null);
}

export function isAuthenticated() {
  // 检查本地存储中是否有有效的认证令牌
  const token = localStorage.getItem('authToken');
  return !!token; // 如果token存在则返回true，否则返回false
}

export const setCustomers = (customers) => {
  localStorage.setItem('nextjsCustomers', JSON.stringify(customers));
};

export const getCustomers = () => {
  const customersJson = localStorage.getItem('nextjsCustomers');
  return customersJson ? JSON.parse(customersJson) : [];
};
