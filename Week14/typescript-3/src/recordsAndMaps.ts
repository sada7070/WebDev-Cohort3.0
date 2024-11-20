//You can type objects like follows - 
interface Person {
    id: string;
    name: string;
}

type People = { [key: string]: Person };
  
const users: People = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

//----------------------------------------------------------------------------------------------------------------------------------------------

// To give a cleaner type to objects we can use: 

// 1) Records(it is TS concept, not exist in JS)
interface APerson {
    id: string;
    name: string;
}

type Ppl = Record<string, APerson>;

const peoples: Ppl = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(peoples['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
// to modify value
peoples["abc123"].name = "Sada";
console.log(peoples['abc123']); // Output: { id: 'abc123', name: 'Sada' }

// 2) Map: It gives you an even fancier way to deal with objects. Very similar to Maps in C++(It is JS concept)

interface NewUser {
    id: string;
    name: string;
}  
// Initialize an empty Map
const usersMap = new Map<string, NewUser>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }