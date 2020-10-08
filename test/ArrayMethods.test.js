const { intersectionOfTwoArrays_Space, intersectionOfTwoArrays_Time, mostCommonItems, oddIntegerOut } = require("../source/ArrayMethods.js");

test('canary', () => {
  expect(true).toBeTruthy();
});

test('determine that 3 is the most common item', () => {
  expect(mostCommonItems([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 5, 6, 4, 3, 2, 1, 3, 5, 6, 7, 8, 5, 3, 3, 2, 5, 6, 7, 8, 7, 8, 9, 1, 1, 2, 3]))
    .toEqual([3]);
});

test('determine that all items are the most common', () => {
  expect(mostCommonItems([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('determine that 1, 5, 7, 3 are the most common item', () => {
  expect(mostCommonItems([1, 1, 2, 4, 5, 6, 7, 8, 9, 7, 5, 6, 4, 3, 2, 1, 3, 5, 6, 7, 8, 5, 3, 3, 2, 5, 6, 7, 8, 7, 8, 9, 1, 1, 2, 3]))
    .toEqual([ 1, 5, 7, 3 ]);
});

test('find common items between two arrays', () => {
  expect(intersectionOfTwoArrays_Space([1,2,3,4,5], [3,4,5,6,7]))
    .toEqual([3,4,5]);
});

test('find common items between two arrays', () => {
  expect(intersectionOfTwoArrays_Time([1,2,3,4,5], [3,4,5,6,7]))
    .toEqual([3,4,5]);
});

test('find element with odd number of occurrences', () => {
  expect(oddIntegerOut([1,2,3,1,2,3,3]))
    .toEqual(3);
});

test('find element with odd number of occurrences in a single element array', () => {
  expect(oddIntegerOut([1]))
    .toEqual(1);
});