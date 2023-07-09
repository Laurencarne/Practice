export function removeDuplicates(nums: number[]): {length: number, array: number[]} {
  if (nums.length === 0) {
      return {
        length: 0,
        array: []
      }
  }
  for (let i = 0; i < nums.length; i++) {
      if ( nums[i] === nums[i + 1] && nums[i] === nums[i - 1] ) {
          nums.splice(i, 1)
          i-- 
      }
  }
  return {
    length: nums.length,
    array: nums
  }
};