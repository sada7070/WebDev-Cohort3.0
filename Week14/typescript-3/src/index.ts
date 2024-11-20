//"Pick" api allows you to create a new type by selecting a set of properties (Keys) from an existing type/interface.
// If you want to update only selected properties, we use 'Pick'
// 'Partial' api allows user to give partial values among the selected properties from the 'Pick' 

interface User {
    id: String;
    name: String;
    age: number;
    email: string;
    password: String;
}

type UpdateProps = Partial<Pick<User, 'age' | 'name' | 'password'>>

function updateUser(updatedProps: UpdateProps) {
    // hit the database to update props
}
updateUser({
    name: "Rocky"
})

//----------------------------------------------------------------------------------------------------------------------------------------

/* we can change internal part of constant array or object but not the array/object itself.
    eg: const a = [1, 2, 3];
        a[0] = 5;               // it works(no error).
        a = [2, 3, 4];          // it will not work.

        What if we don't want to change the internal part of array/ object also?
        for that we use "Readonly"
*/
// Readonly api

type Users = {
    name: String;
    age: number;
}
const user: Readonly<Users> = {         // writing prefix as 'Readonly' makes them immutable.
    name: "Sada",
    age: 22
}
// user.age = 23;                       // gives error if I tried to change value of user's age/name.

//  or assigining individually.
/*
type Users = {
    readonly name: String;              // writing prefix as 'readonly' makes them immutable.
    readonly age: number;
}
const user: Users = {
    name: "Sada",
    age: 22
}
user.name = "Shiva"
*/