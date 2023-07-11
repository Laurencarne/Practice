export function increasingTriplet(nums: number[]): boolean {
  let first = Math.max(...nums)
  let second = Math.max(...nums)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= first) {
          first = nums[i]
      } else if (nums[i] <= second) {
          second = nums[i]
      } else {
          return true
      }
  }
  return false
};