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
    label: "ζ₯ζ",
    prop: "date",
  },
  {
    label: "ηΆζ",
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
