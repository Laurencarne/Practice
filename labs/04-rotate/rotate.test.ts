import { rotate } from "./rotate";

test('rotate the array, moving the last element to the fron k times', () => {
  const arrayOne = [1,2,3,4,5,6,7]
  const arrayOneRotated = [5,6,7,1,2,3,4]
  const testOne = rotate(arrayOne, 3)
  expect(testOne).toEqual(arrayOneRotated);

  const arrayTwo = [-1,-100,3,99]
  const testTwo = rotate(arrayTwo, 2)
  expect(testTwo).toEqual([3,99,-1,-100]);

  const arrayThree = [1,2]
  const testThree = rotate(arrayThree, 0)
  expect(testThree).toEqual([1,2]);
});
