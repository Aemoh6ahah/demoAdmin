export const columns = [
  {
    type: "index",
    width: 56,
    label: "序号",
    prop: "",
    align: 'center'
  },
  {
    label: "称号名称",
    prop: "name",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "称号图片",
    prop: "pictureUrl",
    customSolt: "img",
    align: 'center'
  },
  {
    label: "创建时间",
    prop: "createTime",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "使用中人数",
    prop: "useCount",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "状态",
    prop: "status",
    componentSolt: "state",
    align: 'center'
  },
  {
    label: "开关",
    prop: "c",
    componentSolt: "stateSwitch",
    align: 'center'
  },
  {
    label: "操作",
    width: 120,
    prop: "",
    componentSolt: "operate",
    align: 'center'
  },
];

export const userTableCol = [
  {
    type: "index",
    width: 56,
    label: "序号",
    prop: "",
    align: 'center'
  },
  {
    label: "用户ID",
    prop: "name",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "发放方式",
    prop: "pictureUrl",
    customSolt: "img",
    align: 'center'
  },
  {
    label: "发放时间",
    prop: "createTime",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "操作人",
    prop: "useCount",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "状态",
    prop: "status",
    componentSolt: "state",
    align: 'center'
  },
  {
    label: "使用状态",
    prop: "c",
    align: 'center'
  },
];
