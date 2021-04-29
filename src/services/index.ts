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