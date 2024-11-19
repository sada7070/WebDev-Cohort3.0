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