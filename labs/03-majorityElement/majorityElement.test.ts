import { majorityElement } from "./majorityElement";

test('return the element that appears the most times', () => {
  const testOne = majorityElement([3,2,3])
  expect(testOne).toBe(3);

  const testTwo = majorityElement([2,2,1,1,1,2,2])
  expect(testTwo).toBe(2);
});
