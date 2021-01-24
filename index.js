//Print odd nums in an arr
//anonymous function
var oddnums = function () {
  var rarr = [];
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 !== 0) {
      rarr.push(arguments[i]);
    }
  }
  return rarr;
};

var res = odd(1, 5, 7, 9, 10, 2);
console.log(res);

//IIFE
(function () {
  var arr = [1, 8, 3, 7, 5];
  var rarr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      rarr.push(arr[i]);
    }
  }
  console.log(rarr);
})();

//Convert all the strings to title caps in a string array
//anonymous function
var titcas = function () {
  let res = [];
  for (i in arguments) {
    res.push(arguments[i].charAt(0).toUpperCase() + arguments[i].slice(1));
  }
  console.log(res);
};

titcas("marc", "vijay", "syed", "Ali");

//IIFE
(function () {
  let arr = ["marc", "vijay", "syed", "Ali"];
  let res = [];
  for (i in arr) {
    res.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  console.log(res);
})();

//Sum of all numbers in an array
//anonymous function
var sumAll = function () {
  let sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return sum;
};

var res1 = sumAll(1, 5, 7, 9, 10, 2);
console.log(res1);

//IIFE
(function () {
  let arr = [1, 3, 5, 7];
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
})();

//Return all the prime numbers in an array
//anonymous function
var primenums = function () {
  var rarr = [];
  for (i = 0; i < arguments.length; i++) {
    for (j = 2; j <= arguments[i]; j++) {
      if (arguments[i] % j === 0) {
        if (arguments[i] === j) rarr.push(arguments[i]);
        break;
      }
    }
  }
  return rarr;
};

var res = primenums(5, 7, 9, 10, 2);
console.log(res);

//IIFE
(function () {
  let arr = [1, 5, 7, 9, 10, 2];
  var rarr = [];
  for (i = 0; i < arr.length; i++) {
    for (j = 2; j <= arr[i]; j++) {
      if (arr[i] % j === 0) {
        if (arr[i] === j) rarr.push(arr[i]);
        break;
      }
    }
  }
  console.log(rarr);
})();

//Return all the palindromes in an array
//anonymous function
var palin = function () {
  let res = [];
  for (i in arguments) {
    let rev = arguments[i].split("").reverse().join("");
    if (arguments[i] === rev) res.push(arguments[i]);
  }
  return res;
};

var res = palin("mam", "madam", "bottle", "bob", "coder");
console.log(res);

//IIFE
(function () {
  let arr = ["mam", "madam", "bottle", "bob", "coder"];
  let res = [];
  for (i in arr) {
    let rev = arr[i].split("").reverse().join("");
    if (arr[i] === rev) res.push(arr[i]);
  }
  console.log(res);
})();

//Remove duplicates from an array
//anonymous function
var dup = function () {
  let res = [];
  for (i in arguments) {
    if (!res.includes(arguments[i])) res.push(arguments[i]);
  }
  return res;
};

var res = dup(1, 1, 2, 3, 5, 6, 3);
console.log(res);

//IIFE
(function () {
  let arr = [1, 1, 1, 2, 3, 2, 5, 6, 6];
  let res = [];
  for (i in arr) {
    if (!res.includes(arr[i])) res.push(arr[i]);
  }
  console.log(res);
})();

//Return median of two sorted arrays of same size
//anonymous function
var median = function () {
  let resarr = [];
  for (i in arguments) {
    let sorarr = arguments[i].sort((a, b) => a - b);
    resarr.push(...sorarr);
  }
  console.log(resarr);
  let avg = resarr.length / 2;
  let med = (resarr[avg] + resarr[avg - 1]) / 2;
  console.log(med);
};

median([11, 2, 35], [42, 18, 63]);

//IIFE
(function () {
  let arr = [
    [11, 2, 35],
    [42, 18, 63],
  ];
  let resarr = [];
  for (i in arr) {
    let sorarr = arr[i].sort((a, b) => a - b);
    resarr.push(...sorarr);
  }
  console.log(resarr);
  let avg = resarr.length / 2;
  let med = (resarr[avg] + resarr[avg - 1]) / 2;
  console.log(med);
})();

//Rotate an array by k times and return the rotated array
//anonymous function
var rotarr = function (arr, k) {
  if (k > arr.length) k = k % arr.length;
  let res = arr.splice(k);
  res.push(...arr.slice(0, k));
  console.log(res);
};

rotarr([1, 2, 4, 5, 7], 16);

//IIFE
(function (arr = [1, 2, 4, 5, 7], k = 5) {
  if (k > arr.length) k = k % arr.length;
  let res = arr.splice(k);
  res.push(...arr.slice(0, k));
  console.log(res);
})();
