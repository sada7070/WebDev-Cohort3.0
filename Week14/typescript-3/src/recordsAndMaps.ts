//Record
//Record let’s you give a cleaner type to objects

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

// or use 'Record'(it is TS concept, not exist in JS)
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