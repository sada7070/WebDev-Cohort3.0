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