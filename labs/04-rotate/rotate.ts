/**
 Do not return anything, modify nums in-place instead.
 */
export  function rotate(nums: number[], k: number): number[] {

  let totalRotatedCount = 0
  
  while (totalRotatedCount < k) {
    const lastElement = nums.pop() ?? 0
    nums.unshift(lastElement)
    totalRotatedCount++
  }
  return nums
  };