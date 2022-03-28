import { request, METHOD } from '@/utils/request'
import URL from './api'
// /manage/rule/desc

const file = {
  uplaod: `${URL.FILE_URL}/api/file/upload`,
}

export async function upload(data: any) {
  return request(file.uplaod, METHOD.POST, data);
}