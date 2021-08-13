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

export async function getZhihu(q?: any): Promise<any> {
  return request('api/zhihu', METHOD.GET, q);
};

export async function getWeibo(q?: any): Promise<any> {
  return request('api/weibo', METHOD.GET, q);
};
//