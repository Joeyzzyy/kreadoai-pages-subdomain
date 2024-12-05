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

// 根据 slug 获取单篇文章
export async function getArticleBySlug(slug, lang, token) {
  try {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const response = await axios.get(`${API_URL}/pages/${lang}/${slug}`, { 
      headers,
    });
    return response.data;
  } catch (error) {
    // 如果是404错误，返回null或特定状态而不是抛出错误
    if (error.response?.status === 404) {
      return { notFound: true };
    }
    // 其他错误仍然记录并抛出
    console.error('Error fetching article by slug:', error.response?.data || error.message);
    throw error;
  }
}

// 根据标题和分类获取文章推荐
export async function getRecommendedArticles(title, category, limit = 4) {
  try {
    const response = await apiClient.get('/pages/recommendations', {
      params: {
        title,
        category,
        limit
      }
    });
    return response.data;
  } catch (error) {
    console.error('获取推荐文章失败:', error);
    return null;
  }
}

// 获取客户定制推荐
export async function getCustomRecommendations({ customerId, title, category, lang }) {
  try {
    const response = await apiClient.post('/kreado/recommend', {
      customerId,
      title,
      category,
      lang
    });
    return response.data;
  } catch (error) {
    console.error('获取客户定制推荐失败:', error);
    return null;
  }
}
