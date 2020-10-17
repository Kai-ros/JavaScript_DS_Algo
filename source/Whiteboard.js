
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0).
// Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

function maxContainerWater(array) {

}

console.log("confusing area of water")
console.log(maxContainerWater())

function maxArea(height) {
  function getArea(x0, x1) {
      return Math.min(height[x0], height[x1]) * Math.abs(x0 - x1);
  }

  // a squeezing problem

  let area = 0;

  let current = {
      x0: 0,
      x1: height.length - 1
  };

  while (current.x0 < current.x1) {
      area = Math.max(area, getArea(current.x0, current.x1))

      if (height[current.x0] < height[current.x1])
          ++current.x0; // squeeze on the left
      else
          --current.x1; // squeeze on the right
  }

  return area;
}

console.log(20, maxArea([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(20, maxArea([9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(60, maxArea([1, 2, 3, 4, 5, 6, 5, 4, 3, 4, 5, 6, 7, 6, 5, 8, 4, 3, 2, 1]))
console.log(48, maxArea([9, 7, 5, 3, 1, 4, 8, 6, 4, 2, 1, 2, 3]))
