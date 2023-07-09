import { removeDuplicates } from "./removeDuplicates";

test('each unique element appears at most twice', () => {
  const testOne = removeDuplicates([1,1,1,2,2,3])
  expect(testOne.array).toEqual([1,1,2,2,3]);
  expect(testOne.length).toBe(5);


  const testTwo = removeDuplicates([0,0,1,1,1,1,2,3,3])
  expect(testTwo.array).toEqual([0,0,1,1,2,3,3]);
  expect(testTwo.length).toBe(7);
});
