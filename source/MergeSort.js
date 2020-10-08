function mergeSort(array) {
  return split(array);
}

function split(array) {
  let arraySize = array.length;

  if (arraySize > 1) {
    let midPoint = Math.floor(arraySize / 2);
    let leftSubArray = array.slice(0, midPoint);
    let rightSubArray = array.slice(midPoint);

    mergeSort(leftSubArray);

    mergeSort(rightSubArray);

    merge(leftSubArray, rightSubArray, array);
  }
  return array;
}

function merge(arrayLeft, arrayRight, resultArray) {
  let leftIndex = 0;
  let rightIndex = 0;
  let arrayIndex = 0;

  while (leftIndex < arrayLeft.length && rightIndex < arrayRight.length) {
    if (arrayLeft[leftIndex] <= arrayRight[rightIndex]) {
      resultArray[arrayIndex] = arrayLeft[leftIndex];
      leftIndex++;
    } else {
      resultArray[arrayIndex] = arrayRight[rightIndex];
      rightIndex++;
    }
    arrayIndex++;
  }

  // At the completion of the while loop left/right array are merged into the result array.
  while (leftIndex < arrayLeft.length) {
    resultArray[arrayIndex] = arrayLeft[leftIndex];
    arrayIndex++;
    leftIndex++;
  }

  while (rightIndex < arrayRight.length) {
    resultArray[arrayIndex] = arrayRight[rightIndex];
    arrayIndex++;
    rightIndex++;
  }
}

exports.mergeSort = mergeSort;
