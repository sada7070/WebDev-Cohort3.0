// initializing type
type Users = {
    name: String;
    age: number;
}
let firstUser: Users = {
    name: "Pavan",
    age: 22
}
function isItLeagal(user: Users) {
    return user.age >= 18;
}
console.log(isItLeagal(firstUser));

// intersection (&):
// The intersection type requires a variable to satisfy all specified types at once.It must include properties from both types, effectively merging them.
type Employee = {
    name: String;
    startDate: String;
}
type Manager = {
    name: String;
    department: String;
}

// way to do intersection of types
type TeamLead = Employee & Manager;

let e: Employee = {
    name: "Sada",
    startDate: "01-02-2023"
}
let m: Manager = {
    name: "Shiva",
    department: "IT"
}
// merging employee and manager
let t: TeamLead = {
    name: "Sada", 
    startDate: "01-02-2023",
    department: "IT"
}
console.log(t.department);
console.log(t.name);
console.log(t.startDate);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Union (|): It allows a variable to hold a value that could be of multiple specified types. For example, string | number means the variable can be either a string or a number.
type Admin = {
    name: String;
    adminPassword: String;
}
type NewUser = {
    name: String;
    userPassword: String;
}

// way to do union of types
type AdminOrUser = Admin | NewUser;

let user: AdminOrUser = {
    name: "Sada",
    adminPassword: "abc123",
    userPassword: "kabhfaen"
}
// here i am not able to log both passwords since both of them are used in object 'user'. They can not be used together in type 'AdminOrNewUser'
console.log(user.name);
//console.log(user.adminPassword);
//console.log(user.userPassword);