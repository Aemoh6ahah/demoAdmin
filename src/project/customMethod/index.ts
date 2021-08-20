function formatQueryform(queryForm) {
  let queryParams = {};
  for (const key in queryForm) {
    if (key != "times") {
      queryParams[key] = queryForm[key];
    }
  }
  for (const key in queryForm.times) {
    let start = key;
    let end = key;
    start = start.replace("_", "Start");
    end = end.replace("_", "End");
    queryParams[start] = queryForm.times[key][0];
    queryParams[end] = queryForm.times[key][1];
  }
  return queryParams;
}
const needZero = (s) => {
  if (s < 10) {
    return `0${s}`
  } else {
    return s
  }
}
const timeFormat = (s) => { //时间国际格式 转为字符串时间格式
  const YYYY = s.getFullYear()
  const MM = s.getMonth() + 1
  const DD = s.getDate()
  const HH = s.getHours()
  const mm = s.getMinutes()
  const ss = s.getSeconds()
  return `${YYYY}-${needZero(MM)}-${needZero(DD)} ${needZero(HH)}:${needZero(mm)}:${needZero(ss)}`
}
export default { formatQueryform, timeFormat }