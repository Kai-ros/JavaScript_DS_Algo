const { mergeSort } = require("../source/MergeSort.js");

test("canary", () => {
  expect(true).toBeTruthy();
});

test("sort some numbers even", () => {
  let input = [3, 0, 2, 9, 4, 7, 8, 5, 6, 3, 8, 2];

  let actual = new mergeSort(input)
  let expected = [0, 2, 2, 3, 3, 4, 5, 6, 7, 8, 8, 9];

  expect(actual).toEqual(expected);
});

test("sort some numbers odd", () => {
    let input = [3, 0, 2, 9, 4, 7, 8, 5, 6, 3, 8, 2, 6];
  
    let actual = new mergeSort(input)
    let expected = [0, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 8, 9];
  
    expect(actual).toEqual(expected);
  });
