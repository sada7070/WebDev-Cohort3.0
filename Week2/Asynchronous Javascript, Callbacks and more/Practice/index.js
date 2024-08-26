// function to add 2 numbers
function sum(a, b) {
    return a + b;
}
let ans = sum(20, 30);
console.log(ans);
console.log("----------------------");


// function to add numbers from 1 to N(using loop)
function totalSum(N) {
    let answer = 0;
    for(let i = 1; i <= N; i++) {
        answer += i;
    }
    return answer;
}
console.log(totalSum(100));
console.log("----------------------");


// Synchronous code
function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);
console.log("----------------------");


// functional arguments

function sum(a, b) {
    return a + b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function divide(a, b) {
    return a / b;
  }

  function doOperation(a, b, op){                            // the argumnet name can be anything
    return op(a, b);
  }
  
  console.log(doOperation(1, 2, multiply));
  // the 3rd argument is name of the function which we want to perform, hence there is no paranthesis after the function name. If we give 
  // parenthesis, it will directly call that function and it will contain number and we will pass that to the "op" in doOperation function 
  // which results in error since it is ecpecting the name of the function not integer.

  console.log("----------------------");


  