/**
 * 取两个数组的交集 
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/solution/liang-ge-shu-zu-de-jiao-ji-by-leetcode-solution/
 */ 

let arr1 = [1, 2, 2, 3, 4, 4];
let arr2 = [1, 1, 2, 4, 5, 6];

// 笨方法
// function intersction(list1, list2) {
//   let arry = [];
//   for (let i=0; i<list1.length; i++) {
//     for (let j=0; j<list2.length; j++) {
//       if (list1[i] === list2[j]) {
//         if(!arry.includes(list1[i])){
//           arry.push(list1[i]);
//         };
//       }
//     }
//   }
//   return arry;
// }

// 方法一：使用两个集合 
const set_intersection = (set1, set2) => {
  if (set1.size > set2.size) {
    return set_intersection(set2, set1);
  }

  let intersection = new Set();
  for (const num of set1) {
    if (set2.has(num)) {
      intersection.add(num);
    }
  }

  return [...intersection];
}

let intersection = function(num1, num2){
  let set1 = new Set(num1);
  let set2 = new Set(num2);
  return set_intersection(set1, set2);
}

console.log('两数组交集：', intersection(arr1, arr2));

// 方法二 可以使用双指针方式