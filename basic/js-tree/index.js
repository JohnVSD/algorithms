let ids = [11, 100, 200]; // 要获取的 id 列表
let treeData = [
  {
    id: 1,
    name: '1',
    children: [
      {
        id: 10,
        name: '1-1',
        children: [
          {
            id: 100,
            name: '1-1-1',
            children: []
          },
          {
            id: 101,
            name: '1-1-2',
            children: []
          }
        ]
      },
      {
        id: 11,
        name: '1-2',
        children: [
        ]
      },
      {
        id: 12,
        name: '1-3',
        children: [
          {
            id: 103,
            name: '1-3-1',
            children: []
          },
          {
            id: 104,
            name: '1-3-2',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '2',
    children: [
      {
        id: 20,
        name: '2-1',
        children: [
          {
            id: 200,
            name: '2-1-1',
            children: []
          }
        ]
      },
      {
        id: 21,
        name: '2-2',
        children: []
      }
    ]
  }
];

function treeFilter(tree, func){
  return tree.filter(node => {
    node.children = node.children && treeFilter(node.children, func)

    return func(node) || (node.children && node.children.length)
  })
}

const formatTree = treeFilter(treeData, (node) => ids.includes(node.id));

console.log(JSON.stringify(formatTree));