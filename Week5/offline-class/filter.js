// filtering// given an input array, return back the array with only even numbers from the given araay.

// bruteforce approach
/*
const arr = [1, 2, 3, 4, 5];
const ansArr = [];

for(let i = 0; i< arr.length; i++) {
    if(arr[i] % 2 == 0)
        ansArr.push(arr[i]);
}

console.log(ansArr);
*/

// filter
const arr = [1, 2, 3, 4, 5];

// here filter pushes arr value individualy into the anonymous function which return ture or false.
// 'n' is the individal element of the araay.
const ans = arr.filter(function (n) {
    if(n % 2 == 0)
        return true;
    else
        return  false;
});
console.log(ans);