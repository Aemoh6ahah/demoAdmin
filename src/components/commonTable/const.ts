export interface Column {
  [key: string]: any;
  customSolt: "lineText" | "state" | "stateSwitch" | "avatar" | "cover";
};

export type SSConfig = {
  [key: string]: any;
};