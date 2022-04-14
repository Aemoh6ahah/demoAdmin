import { request, METHOD } from '@/utils/request'
import URL from './api'
// /carlinx/manage/title/list
// /carlinx/obs/temporary/account

const medal = {
  userList: `${URL.ECARX_URL}/api/v3/users`, 
  userRoles: `${URL.ECARX_URL}/api/v3/roles`, 
  addLabel: `${URL.CARLINX_URL}/carlinx/manage/title/save`,
  modifyLabel: `${URL.CARLINX_URL}/carlinx/manage/title/modify`,
  getLabel: `${URL.CARLINX_URL}/carlinx/manage/title/`,
  delLabel: `${URL.CARLINX_URL}/carlinx/manage/title/operate/delete/`,
  modifyLabelState: `${URL.CARLINX_URL}/carlinx/manage/title/operate/listed/`,
  labelList: `${URL.CARLINX_URL}/carlinx/manage/title/list`,
  obsConfig: `${URL.CARLINX_URL}/carlinx/obs/temporary/account`,
  medalUserList: `${URL.CARLINX_URL}/carlinx/manage/title/user/relation/list`,
  uploadFile: `${URL.CARLINX_URL}/carlinx/obs/file/upload`,
  // /carlinx/obs/file/upload
}

type LABLEDATA = {
  id?: string,
  name: string,
  pictureUrl: string,
  status: number,
  userIdLists: number[],
}

export async function getUserList(query: any) {
  return request(medal.userList, METHOD.GET, { ...query, limit: 10 });
}

export async function userRoles() {
  return request(medal.userRoles, METHOD.GET,);
}

export async function addLabel(data: LABLEDATA) {
  return request(medal.addLabel, METHOD.POST, data);
}

export async function labelList(data: any) {
  return request(medal.labelList, METHOD.POST, { ...data,});
}

export async function modifyLabel(data: LABLEDATA) {
  return request(medal.modifyLabel, METHOD.POST, data);
}

export async function obsConfig(query?: any) {
  return request(medal.obsConfig, METHOD.GET, { ...query,});
}

export async function ossUplaod (url,data) {
  return request(url, METHOD.POST, { ...data,});
}

export async function getLabel(id: any) {
  return request(medal.getLabel + id, METHOD.GET,);
} 

export async function delLabel(id: string) {
  return request(medal.delLabel + id, METHOD.GET,);
}

export async function modifyLabelState(id: string) {
  return request(medal.modifyLabelState + id, METHOD.GET,);
}

export async function medalUserList(data: LABLEDATA) {
  return request(medal.medalUserList, METHOD.POST, data);
}

export async function uploadFile(data) {
  return request(medal.uploadFile, METHOD.PUT, data);
}