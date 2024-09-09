// given an array, give me back a new array where every value is multiplied by 2.
// input arr = [1, 2, 3, 4, 5]
// output resArr = [2, 4, 6, 8, 10]

// brute force method
/*
const arr = [1, 2, 3, 4, 5];
const resArr = [];

for(let i = 0; i < arr.length; i++) {
    resArr.push(arr[i] * 2);
}

console.log(resArr);
*/

// using map
const arr = [1, 2, 3, 4, 5];

// here map will push the 'arr' values to the anonymous function individually and the functions returns the answer.
// here map is a 'blackbox' function.
const ans = arr.map(function(i) {
    return i * 2;
})
console.log(ans);