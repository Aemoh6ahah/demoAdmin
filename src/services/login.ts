import { request, METHOD } from '@/utils/request'
import URL from './api'

const account = {
  registe: `${URL.FILE_URL}/api/account/registe`,
  login: `${URL.FILE_URL}/api/account/login`,
}

export async function register(data: any) {
  return request(account.registe, METHOD.POST, data);
}

export async function login(data: any) {
  return request(account.login, METHOD.POST, data);
}