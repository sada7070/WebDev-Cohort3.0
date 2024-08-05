let fname = "sada";
var num = 10;
let temp = "sada";
temp = true;
temp = 20;

console.log(fname);
console.log(num);
console.log(temp);

////////////////////////////////////////////////

let nums =  [1, 2, 3, 4];
console.log(nums[4]);

////////////////////////////////////////////////

let age = 9;
let canVote = (age > 18);
console.log(canVote);

//////////////////////////////////////////////////

function sum(a, b) {
    let totalSum = a + b;
    return totalSum;
}

let ans = sum(1, 2);
let aans = sum(4, '8');

console.log(ans);
console.log(aans);

//////////////////////////////////////////////////

function greet(user) {
    console.log("Hi " + user.name + " your age is " + user.age + " and your gender is "+ user.gender);
}

let user = {
    name: "sada",
    age: 22,
    gender: "male"
}

greet(user);

/////////////////////////////////////////////////

function solve(arr) {
    let arr2 = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].age >= 18 && arr[i].gender == "M") {
            arr2.push(arr[i].name);
        }
    }
    return arr2;
}

const users = [{
    name : "sada",
    age: 20,
    gender: "M"
}, {
    name: "pavan",
    age: 17,
    gender: "M"
}, {
    name:  "sita",
    age: 22,
    gender: "F"
}]

console.log(solve(users));