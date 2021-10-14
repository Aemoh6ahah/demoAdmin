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
    start = firstWordLowerCase(start.replace("_", "Start"));
    end = firstWordLowerCase(end.replace("_", "End"));
    queryParams[start] = timeFormat(queryForm.times[key][0]);
    queryParams[end] = timeFormat(queryForm.times[key][1]);
  }
  return queryParams;
}

function firstWordLowerCase(str: string) {
  let sList = str.split('');
  sList[0] = sList[0].toLowerCase()
  return sList.join('')
}

const needZero = (s) => {
  if (s < 10) {
    return `0${s}`
  } else {
    return s
  }
}
const timeFormat = (s) => { //时间国际格式 转为字符串时间格式
  if (!s) {
    return ''
  }
  const YYYY = s.getFullYear()
  const MM = s.getMonth() + 1
  const DD = s.getDate()
  const HH = s.getHours()
  const mm = s.getMinutes()
  const ss = s.getSeconds()
  return `${YYYY}-${needZero(MM)}-${needZero(DD)} ${needZero(HH)}:${needZero(mm)}:${needZero(ss)}`
}
export default { formatQueryform, timeFormat }