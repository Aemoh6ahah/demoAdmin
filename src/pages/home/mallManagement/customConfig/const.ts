export const columns = [
  {
    type: "index",
    width: 56,
    label: "编号",
    prop: "",
    align: 'center'
  },
  {
    label: "URL地址",
    prop: "url",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "适用车型",
    prop: "carModels",
    align: 'center',
    customSolt: 'carInfo'
  },
  {
    label: "创建时间",
    prop: "createTime",
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
