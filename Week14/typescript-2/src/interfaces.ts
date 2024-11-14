// "interfaces" are used to define custom types 

// defining 'interface'
interface Address {
    city: String;
    country: "India";                         // here we are making only the person with Indian indentity can cast vote.
    pincode: number;   
}

// taking interface as value to the 'address' key
interface Office {
    officeName: String;
    address: Address
}

interface User {
    name: String;
    age: number;
    address?: Address                         // adding '?' at the end of the key makes that particular key is optional to define.
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

//---------------------------------------------------------------------------------------------------------------------------------------

// passing function as a key to the interface
interface People {
    name: String;
    age: number;
    greet(): String;    
}
let person: People = {
    name: "Sada",
    age: 22,
    greet: () => {
        return "hi"
    }
}
const greeting = person.greet();
console.log(greeting);

// You can create a class which implements this interface.
// This is useful since now you can create multiple variants of a person (Manager, CEO …)
interface ppl {
    name: String;
    age: number;
}
class worker implements ppl {
    name: String;
    age: number;

    constructor(name: String, age: number) {
        this.name = name;
        this.age = age;
    }
}
let newUser = new worker("Sada", 22);
console.log(newUser.age);