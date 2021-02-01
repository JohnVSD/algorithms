// 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1,2,3,1]。
// 给定非负整数 X 的数组形式 A，返回整数 X+K 的数组形式。
// https://github.com/leetcode-pp/91alg-3/issues/2
// 示例 1：
// 输入：A = [1,2,0,0], K = 34
// 输出：[1,2,3,4]
// 解释：1200 + 34 = 1234
// 示例 2：

// 提示：
// 1 <= A.length <= 10000
// 0 <= A[i] <= 9
// 0 <= K <= 10000
// 如果 A.length > 1，那么 A[0] != 0

// 思路：遍历数组 + 类型转换 + 四则运算
// 时间复杂度：O(n)；空间复杂度：O(n)
function intArrayPlus(A: number[], K: number): number[] {
  let num: string = '';
  
  for(let i = 0; i<A.length; i++) {
    num += A[i];
  }

  const res: number = Number(num) + K;

  return String(res).split('').map(i => Number(i));
}

console.log('内容：', intArrayPlus([9,9,9,9,9,9], 1));