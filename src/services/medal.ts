import { request, METHOD } from '@/utils/request'
import URL from './api'
// BASE_URL

const medal = {
  userList: `${URL.ECARX_URL}/api/v3/users`, // api/v3/roles
  userRoles: `${URL.ECARX_URL}/api/v3/roles`, // api/v3/roles
}

export async function getUserList(query: any) {
  return request(medal.userList, METHOD.GET, { ...query, limit: 10 });
}

export async function userRoles() {
  return request(medal.userRoles, METHOD.GET,);
}