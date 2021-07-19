/**
 * 20210719 算法题：
 * a、自定义多叉树节点 node 结构（只需要定义节点结构即可，无需构建树）
 * b、按照广度优先查找符合要求的节点（没有符合要求的节点返回 null），比如查找电话号码为 phone的用户信息，调用如下：
 * let node = wideTraversal(node,(e)=>e.phone===phone)
 */

let tree = [
  {
    id: '1',
    phone: 123456,
    children: [
      {
        id: '1-1',
        phone: 2345,
        children: []
      },
      {
        id: '1-2',
        phone: 23456,
        children: []
      }
    ]
  },
  {
    id: '2',
    phone: 7890,
    children: [
      {
        id: '2-1',
        phone: 5678,
        children: []
      },
      {
        id: '2-2',
        phone: 34567,
        children: []
      }
    ]
  },
];

function wideTraversal(node, fn) {
  let res = null;

  const bfs = (node) => {
    let list = [...node];
    while (list.length) {
      const curNode = list.shift();
      if (fn(curNode)) return res = curNode;
      list.push(...curNode.children);
    }
  }
  bfs(node);
  return res;
}

console.log(wideTraversal(tree, (e) => e.phone === 123456));
console.log(wideTraversal(tree, (e) => e.phone === 1432));
console.log(wideTraversal(tree, (e) => e.phone === 34567));