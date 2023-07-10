import { mergeStringAlternately } from "./mergeStringAlternately";

test('merge two given strings alternately - Part 1', () => {
  const word1 = 'abc'
  const word2 = 'xyz'
  const mergedString = mergeStringAlternately(word1, word2)
  const word3 = 'axbycz'
  expect(mergedString).toEqual(word3);
});

test('merge two given strings alternately - Part 2', () => {
  const word1 = 'kl'
  const word2 = 'mnop'
  const mergedString = mergeStringAlternately(word1, word2)
  const word3 = 'kmlnop'
  expect(mergedString).toEqual(word3);
});

test('merge two given strings alternately - Part 3', () => {
  const word1 = 'efghi'
  const word2 = 'jkl'
  const mergedString = mergeStringAlternately(word1, word2)
  const word3 = 'ejfkglhi'
  expect(mergedString).toEqual(word3);
});
