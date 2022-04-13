export const columns = [
  {
    type: "index",
    width: 56,
    label: "序号",
    prop: "",
    align: 'center'
  },
  {
    label: "分类名称",
    prop: "a",
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
    label: "创建时间",
    prop: "c",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "问题统计",
    prop: "b",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "创建人",
    prop: "c",
    componentSolt: "lineText",
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