class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const haLim = new Human("lim", 25, "female");

const nico = {
  name: "nico",
  age: 44,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `hey ${person.name} u r ${person.age} and ${person.gender}!`;
};

console.log(sayHi(haLim));
export {};
