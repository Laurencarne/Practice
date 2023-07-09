import { dummy } from "./dummy";


test('adds 1 + 2 to equal 3', () => {
  expect(dummy(1, 2)).toBe(3);
  expect(dummy(5, 10)).toBe(15);
});