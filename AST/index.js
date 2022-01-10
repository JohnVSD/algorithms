'use strict';
const esprima = require('esprima');
const estraverse = require('estraverse');

function b() {
  let c = '123';
}

function a(b) {
  // 想拿到 b 里面的 let c = '123' 有可能嘛
  const bString = b.toString();
  const ast = esprima.parseScript(bString);
  estraverse.traverse(ast, {
    enter: (node) => {
      if (node.type === 'VariableDeclaration') {
        node.declarations.forEach(item => {
          console.log(item);
          if (item.id.name = 'c') {
            console.log(item.init.value);
          }
        })
      }
    }
  })
}

a(b);