import { request, METHOD } from '@/utils/request'
import { stringifyQuery } from 'vue-router';

const login: { [key: string]: string } = {
  login: "api/login",
  get: 'api/get'
};

export async function userLogin(data: { [key: string]: any }): Promise<any> {
  return request(login.login, METHOD.POST, data);
};

export async function testGet(q?: any): Promise<any> {
  return request(login.get, METHOD.GET, q);
};

export async function getPage(q?: any): Promise<any> {
  return request('https://www.yjwujian.cn/news/index.html', METHOD.GET, q);
};



// 有用的接口

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
