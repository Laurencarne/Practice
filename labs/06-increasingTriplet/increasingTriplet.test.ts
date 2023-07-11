import { increasingTriplet } from "./increasingTriplet";

test('merge two given strings alternately - Part 1', () => {
  const testCaseOne = increasingTriplet([1,2,3,4,5])
  expect(testCaseOne).toBe(true);

  const testCaseTwo = increasingTriplet([5,4,3,2,1])
  expect(testCaseTwo).toBe(false);

  const testCaseThree = increasingTriplet([0,4,2,1,0,-1,-3])
  expect(testCaseThree).toBe(false);

  const testCaseFour = increasingTriplet([20,100,10,12,5,13])
  expect(testCaseFour).toBe(true);

  const testCaseFive = increasingTriplet([20, 100, 12, 5, 13])
  expect(testCaseFive).toBe(false);

});