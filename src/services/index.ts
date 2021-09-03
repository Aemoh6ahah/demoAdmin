import { request, METHOD } from '@/utils/request'

// export async function getPage(q?: any): Promise<any> {
//   return request('https://www.yjwujian.cn/news/index.html', METHOD.GET, q);
// };

// 热榜
export async function getZhihu(type?: string): Promise<any> {
  return request(`api/zhihu?type=${type}`, METHOD.GET,);
};

export async function getBaidu(q?: any): Promise<any> {
  return request('api/baidu', METHOD.GET, q);
};

export async function getWeibo(q?: any): Promise<any> {
  return request('api/weibo', METHOD.GET, q);
};

// 节假日
export async function gethHoliday(q?: any): Promise<any> {
  return request('api/holiday', METHOD.GET, q);
};
