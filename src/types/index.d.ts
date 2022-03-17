/**
 * customTable 配置
 */

// 开关配置
type SSCONFIG = {
  key: string;
  interface: Function;
  onlineText: string;
  offlineText: string;
  onlineState: number,
  offlineState: number,
}

// 状态配置
type STATECONFIG = {
  label: string,
  stateCode: number,
  color: string,
}

// 菜单选项
type OPERATION = {
  label: string,
  icon?: string,
  cb: Function,
  disable?: any,
}