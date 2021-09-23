import { request, METHOD } from '@/utils/request'
import URL from './api'
// BASE_URL

const mall = {

  mallPageList: `${URL.BASE_URL}/manage/mall/url/pageList`,
  addMallUrl: `${URL.BASE_URL}/manage/mall/url/add`,
  modifyMallUrl: `${URL.BASE_URL}/manage/mall/url/modify`,
  delMallUrl: `${URL.BASE_URL}/manage/mall/url/remove`,

}


export async function mallPageList(query: any) {
  return request(mall.mallPageList, METHOD.GET, query);
}

export async function addMallUrl(data: any) {
  return request(mall.addMallUrl, METHOD.POST, data);
}

export async function modifyMallUrl(data: any) {
  return request(mall.modifyMallUrl, METHOD.PUT, data);
}

export async function delMallUrl(query: any) {
  return request(mall.delMallUrl, METHOD.DELETE, query);
}