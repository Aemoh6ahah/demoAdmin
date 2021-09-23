import { request, METHOD } from '@/utils/request'
import URL from './api'
// BASE_URL

const mall = {
  entyList: `${URL.BASE_URL}/entry/list`,
  addEntry: `${URL.BASE_URL}/entry/add`,
  modifyEntry: `${URL.BASE_URL}/entry/alter`,
  delEntry: `${URL.BASE_URL}/entry/delete`,
}

export async function entyList(query: any) {
  return request(mall.entyList, METHOD.POST, query);
}

export async function addEntry(data: any) {
  return request(mall.addEntry, METHOD.POST, data);
}

export async function modifyEntry(data: any) {
  return request(mall.modifyEntry, METHOD.POST, data);
}

export async function delEntry(query: any) {
  return request(mall.delEntry, METHOD.DELETE, query);
}