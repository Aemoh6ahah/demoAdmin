import { request, METHOD } from '@/utils/request'
import URL from './api'
// /manage/rule/desc

const rule = {
  getRuleDesc: `${URL.BASE_URL}/manage/rule/desc`,
  modifyRuleDesc: `${URL.BASE_URL}/manage/rule/desc/alter`
}


export async function getRuleDesc(query: any) {
  return request(rule.getRuleDesc, METHOD.GET, query);
}


export async function modifyRuleDesc(data: any) {
  return request(rule.modifyRuleDesc, METHOD.POST, data);
}