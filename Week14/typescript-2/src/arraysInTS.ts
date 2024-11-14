// If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type.

//Example 1: Given an array of positive integers as input, return the maximum value in the array.
function maxValue(nums: number[]) {
    let maxValue = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] > maxValue) {
            maxValue = nums[i];
        }
    }
    return maxValue;
}
let arr: number[] = [1, 2, 3, 4, 5];
console.log(maxValue(arr));

//Example 2: Given a list of Person, filter out the users that are legal (greater than or equal to 18 years of age).
interface Person {
	firstName: string;
	lastName: string;
	age: number;
}

function leagal(people: Person[] ) {
    for(let i = 0; i < people.length; i++) {
        if(people[i].age >= 18) {
            console.log(people[i].firstName + " is leagal to vote.");
        } else {
            console.log(people[i].firstName + " is not leagal to vote.");
        }
    }
}

let ppl: Person[] = [{
    firstName: "Sada",
    lastName: "S",
    age: 22
}, {
    firstName: "Shiva",
    lastName: "P",
    age: 16
}, {
    firstName: "Ram",
    lastName: "R",
    age: 82
}, {
    firstName: "Sham",
    lastName: "A",
    age: 11
}, {
    firstName: "Krishna",
    lastName: "K",
    age: 46
}]

leagal(ppl);