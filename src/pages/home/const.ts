export const columns = [
  {
    type: "index",
    prop: "",
  },
  {
    label: "ID",
    prop: "id",
  },
  {
    label: "日期",
    prop: "date",
  },
  {
    label: "状态",
    prop: "state",
    customSolt: "state",
    config: [
      {
        label: "online",
        stateCode: 1,
        color: "#52C41A",
      },
      {
        label: "offline",
        stateCode: 0,
        color: "#C5CCD7",
      },
    ],
  },
];
