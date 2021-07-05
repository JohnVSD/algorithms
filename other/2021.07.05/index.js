// [0, 2, 0, 6, 5, 0, 1] 
// 如何在一次循环且不创建新数组的方式下变成 
// [2, 6, 5, 1, 0, 0, 0] 把0移动到后面，不改变其他元素顺序

// 利用快慢指针
function transferArray(nums) {
  let slow = 0;
  let fast = 1;

  while (fast < nums.length) {
    if (nums[slow] === nums[fast]) {
      fast++;
    } else {
      if (nums[slow] === 0) {
        let temp = nums[slow];
        nums[slow] = nums[fast];
        nums[fast] = temp;
      }

      slow++;
      fast++;
    }
  }
}

const arr = [4, 2, 0, 6, 5, 0, 1];
transferArray(arr);
console.log(arr);