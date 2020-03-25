interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "nico",
  age: 44,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `hey ${person.name} u r ${person.age} and ${person.gender}!`;
};

console.log(sayHi(person));
export {};
