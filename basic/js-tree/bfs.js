let tree = [
  {
    name: '1',
    children: [
      {
        name: '1-1',
        children: []
      },
      {
        name: '1-2',
        children: []
      },
      {
        name: '1-3',
        children: [
          {
            name: '1-3-1',
            children: []
          }
        ]
      }
    ]
  },
  {
    name: '2',
    children: [
      {
        name: '2-1',
        children: [
          {
            name: '2-1-1',
            children: []
          },
        ]
      },
      {
        name: '2-2',
        children: []
      }
    ]
  }
];

function treeFilter(tree, fn) {
  let list = [ ...tree ];
  
  while (list.length) {
    // 层序遍历，利用队列先进先出的特性进行节点的存储
    let curNode = list.shift();
    fn(curNode);

    if (curNode.children.length) {
      list.push(...curNode.children);
    }
  }
}

function treeEach(tree, fn) {
  tree.forEach(node => {
    
    if(node.children.length) {
      // 可以用短路语法简写 node.children && treeEach(node.children, fn)
      treeEach(node.children, fn);
    }

    // 与上面的判断条件变换位置就是 前后序遍历的区别
    fn(node);
  })
}

console.log('>>>>>>> 层序遍历');
treeFilter(tree, (node) => console.log(node.name));
// console.log('>>>>>>> 深度优先 - 前序遍历');
// treeEach(tree, (node) => console.log(node.name));
console.log('>>>>>>> 深度优先 - 后序遍历');
treeEach(tree, (node) => console.log(node.name));