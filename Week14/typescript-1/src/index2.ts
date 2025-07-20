// defining 'type' of an objects in typescript
function greeting(user: {
    name: string,
    age: number
}) {
    console.log("Hello " + user.name);
}

// defining user, which is object type
let user: {
    name: string,
    age: number
} = {
    name: "Sada",
    age: 22
}
greeting(user);
// in the above method we declared type of the object in 2 places(inside function arguments & outside while defining the variable(user))
// if the function has more variables, we have to define the type for all of the new variables. And if we want to modify the object we have to change from every place.
// so we use "Interface" to overcome this.

// defining interface
interface UserType {
    name: string,
    age: number
}
// defining a function
function welcome(user: UserType) {
    console.log("Hello " + user.name);
}
// defining an object
let newUser: UserType = {
    name: "Sada",
    age: 22
}
// calling the function
welcome(newUser);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

//Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User {
    firstName: string,
    lastName: string,
    emial: string,
    age: number
}

function isLegal(user: User) {
    if(user.age >= 18){
        return true
    } else {
        return false
    }
}

let user2: User ={
    firstName: "Sada",
    lastName: "S P",
    emial: "sada@gmial.com",
    age: 22
}

if (isLegal(user2)) {
    console.log("It is leagel.");
} else {
    console.log("It is not leagel.");
}