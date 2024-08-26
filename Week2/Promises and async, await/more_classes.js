// "Date" class used to get some imp data about date, time etc.

const now = new Date();
console.log(now.getFullYear());

// "Map" class used to create key value pair. It is a cleaner way to do so

const map = new Map();
map.set('name', 'Sada');
map.set('age', 22);
console.log(map.get('age'));

// example
const personal_data = new Map();
personal_data.set('name', 'Sada');
personal_data.set('age', 22);
personal_data.set('gender', 'male');
personal_data.set('education', 'under graduate');
personal_data.set('working profession', 'unemployed');
personal_data.set('notice period', 0);

console.log(personal_data.get('name'));
console.log(personal_data.get('gender'));
console.log(personal_data.get('education'));
console.log(personal_data.get('working profession'));
console.log(personal_data.get('notice period'));