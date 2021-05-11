// 多叉树
const json = {
  name: 'A',
  children: [
    {
      name: 'B',
      children: [
        {
          name: 'E',
        },
        {
          name: 'F',
        },
        {
          name: 'G',
        }
      ]
    },
    {
      name: 'C',
      children: [
        {
          name: 'H'
        }
      ]
    },
    {
      name: 'D',
      children: [
        {
          name: 'I',
        },
        {
          name: 'J',
        }
      ]
    }
  ]
};

/**
 * 计算根节点下方有多少子节点
 * * arguments.callee 是一个指向正在执行执行的函数的指针，返回正在被执行的对象。
 */
function getLeafCountTree(data) {
  if (!data.children) {
    return 1;
  } else {
    let count = 0;
    for (let i = 0; i < data.children.length; i++) {
      // count = count + getLeafCountTree(data.children[i]);
      count = count + arguments.callee(data.children[i]);
    }
    return count;
  }
}
console.log(getLeafCountTree(json));