export function formatQueryform(queryForm) {
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


export function arrayToTree(items) {
  const result = [];   // 存放结果集
  const itemMap = {};  // 
  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] }
  }
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }

  }
  return result;
}

export function getWeiboTop(params: string) {
  // /<p(([\s\S])*?)<\/p>/g.test('<p>123</p>');
  let s = params.match(/<section(([\s\S])*?)<\/section>/g)
  let node = document.createElement('div')
  node.innerHTML = s[0]
  const fragment = document.createDocumentFragment();
  fragment.appendChild(node)
  let list = fragment.querySelectorAll('li');
  console.log(list[1]);

  let nodeList = []
  list.forEach((_, index) => {
    nodeList.push({
      link: getLink(_),
      title: getTitle(_),
      index: index,
    })
  })
  list = undefined
  console.log(nodeList[1]);

  return nodeList
}
function getLink(node: HTMLLIElement) {
  const link = node.querySelector('a').href;
  return link.split('/')[3]
}
function getTitle(node: HTMLLIElement) {
  return node.querySelector('span').innerText
}
