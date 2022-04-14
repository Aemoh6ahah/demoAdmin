export const columns = [
  {
    type: "index",
    width: 56,
    label: "序号",
    prop: "",
    align: 'center'
  },
  {
    label: "ID",
    prop: "id",
    componentSolt: "lineText",
    align: 'center',
    width: 188
  },
  {
    label: "分类名称",
    prop: "categoryName",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "关联产品经理",
    prop: "userNum",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "问题统计",
    prop: "questionNum",
    componentSolt: "lineText",
    align: 'center',
  },
  {
    label: "创建时间",
    prop: "createTime",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "状态",
    prop: "state",
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
