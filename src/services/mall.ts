import { request, METHOD } from '@/utils/request'
import URL from './api'
// BASE_URL

const mall = {
  mallPageList: `${URL.BASE_URL}/manage/mall/url/pageList`,
  addMallUrl: `${URL.BASE_URL}/manage/mall/url/add`,
  modifyMallUrl: `${URL.BASE_URL}/manage/mall/url/modify`,
  delMallUrl: `${URL.BASE_URL}/manage/mall/url/remove/`,
  getAllCars: `${URL.BASE_URL}/manage/car/model/tree`,
  getAvilableCars: `${URL.BASE_URL}/manage/car/model/list/avilable`
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

export async function delMallUrl(id: any) {
  return request(mall.delMallUrl + id, METHOD.DELETE,);
}

export async function getAllCars(query?: any) {
  return request(mall.getAllCars, METHOD.GET, query);
}

export async function getAvilableCars(query?: any) {
  return request(mall.getAvilableCars, METHOD.GET, query);
}
