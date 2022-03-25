export const columns = [
  {
    type: "index",
    width: 56,
    label: "序号",
    prop: "",
    align: 'center'
  },
  {
    label: "标题名称",
    prop: "a",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "标题图标",
    prop: "b",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "页面跳转",
    prop: "b",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "内容一",
    prop: "c",
    componentSolt: "lineText",
    align: 'center'
  },
  {
    label: "内容一",
    prop: "c",
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

export const linkMap = {
  topic: {
    label: '话题',
    value: '1',
    queryId: '1',
  },
  message: {
    label: '资讯',
    value: '2',
    queryId: '2',
  },
  moments: {
    label: '圈子',
    value: '3',
    queryId: '3',
  },
  activity: {
    label: '活动',
    queryId: '4',
    value: '4'
  },
}
export const idMap = {
  1: 'topic',
  2: 'message',
  3: 'moments',
  4: 'activity',
}
