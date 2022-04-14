
import { request, METHOD } from '@/utils/request'
import URL from './api'

const question = {
  addCategory: `${URL.CARLINX_URL}/carlinx/manage/question/category/add`,
  categoryList: `${URL.CARLINX_URL}/carlinx/manage/question/category/pageList`,
  delCategory: `${URL.CARLINX_URL}/carlinx/manage/question/category/remove/`,
  modifyCategoryState: `${URL.CARLINX_URL}/carlinx/manage/question/category/modifyStatus/`,
  getPmList: `${URL.CARLINX_URL}/carlinx/manage/question/category/getHandleUserList/`
}
export async function addCategory(data: any) {
  return request(question.addCategory, METHOD.POST, data);
}

export async function categoryList(q: any) {
  return request(question.categoryList, METHOD.GET, q);
}

export async function delCategory(id: any) {
  return request(question.delCategory+ id, METHOD.DELETE,);
}

export async function modifyCategoryState(id: any, status) {
  return request(question.modifyCategoryState+ id + '/' + status, METHOD.PUT,);
}

export async function getPmList(id: any) {
  return request(question.getPmList+ id, METHOD.GET,);
}