// "interfaces" are used to define custom types 

// defining 'interface'
interface User {
    name: String;
    age: number;
    address?: {                             // adding '?' at the end of the key makes that particular key optional to define.
        city: String;
        country: "India";                   // here we are making only the person with Indian indentity can cast vote.
        pincode: number;
    }
}

let user1: User = {
    name: "sada",
    age: 22,
    address: {
        city: "Bangalore",
        country: "India",
        pincode: 517224
    }
}

// user2 not using "address" key
let user2: User = {
    name: "shiva",
    age: 17
}

function isLeagal(user: User): boolean {
    return user.age >= 18;
}
if(isLeagal(user2)) {
    console.log("User can vote.");
} else {
    console.log("User can not vote.");
}
