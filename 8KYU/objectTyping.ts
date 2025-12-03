interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

let student: Person = {
  name: 'DengKuat',
  age: 45,
  isStudent: true
};

function describePerson(person: Person): string {
  return `${person.name} is ${person.age} years old and is ${person.isStudent ? "a student" : "not a student"}.`;
}

console.log(describePerson(student));

// Define an object person with properties: name (string), age (number), isStudent (boolean). Write a function describePerson that returns a string like:
// "Deng is 20 years old and is a student."