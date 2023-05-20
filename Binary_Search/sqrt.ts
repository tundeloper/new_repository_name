// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

//You must not use any built-in exponent function or operator.

//For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x:number):number {
    if (x < 0) {
    throw new Error("Cannot compute square root of a negative number.");
  }

  if (x === 0 || x === 1) {
    return x;
  }

  let left = 1;
  let right = Math.floor(x / 2);
  let result = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (mid * mid === x) {
      return mid;
    }

    if (mid * mid < x) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
};

mySqrt(8)



