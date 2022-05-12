# 树结构过滤

> 在树结构数据体操作，根据传入数据，过滤掉不等于此节点数据，返回过滤后的树结构数据

## 案例1

> 如果树节点中包含入参，则返回匹配项的树结构，过滤掉不等项

```JS
// 入参（有权限访问的）
var value = ['初中$_$初一$_$语文', '初中$_$初二$_$语文'];

// 全量数据
var treeData = [
  {
    label: '初中',
    value: '初中',
    children: [
      {
        label: '初一',
        value: '初一',
        children: [
          {
            label: '语文',
            value: '语文',
            children: [],
          },
          {
            label: '数学',
            value: '数学',
            children: [],
          },
          ...
        ],
      },
      {
        label: '初二',
        value: '初二',
        children: [
          {
            label: '语文',
            value: '语文',
            children: [],
          },
          {
            label: '数学',
            value: '数学',
            children: [],
          },
          ...
        ],
      },
    ],
  },
  {
    label: '高中',
    value: '高中',
    children: [
      {
        label: '高一',
        value: '高一',
        children: [
          {
            label: '语文',
            value: '语文',
            children: [],
          },
          {
            label: '数学',
            value: '数学',
            children: []
          }
        ]
      },
      ...
    ]
  }
]

// 期望返回结果
var res = [
  {
    label: '初中',
    value: '初中',
    children: [
      {
        label: '初一',
        value: '初一',
        children: [
          {
            label: '语文',
            value: '语文',
            children: [],
          }
        ]
      },
      {
        label: '初二',
        value: '初二',
        children: [
          {
            label: '语文',
            value: '语文',
            children: [],
          }
        ]
      }
    ]
  }
]
```

## 案例2

> 如果树节点中不包含入参，则返回空 [ ]

```JS
// 入参（有权限访问的）
var value = [ '初中$_$初一$_$语文' ];

// 全量数据
var treeData = [
  {
    label: '初中',
    value: '初中',
    children: [
      {
        label: '初一',
        value: '初一',
        children: [
          {
            label: '数学',
            value: '数学',
            children: [],
          }
        ],
      },
      {
        label: '初二',
        value: '初二',
        children: [
          {
            label: '语文',
            value: '语文',
            children: [],
          },
          {
            label: '数学',
            value: '数学',
            children: [],
          },
          ...
        ],
      },
    ],
  },
  ...
]

// 期望返回结果
var res = []
```