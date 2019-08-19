/*
const person = {
  name: "John Doe",
  age: 30
};

module.exports = person;
*/

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`my name is ${this.name} and my age is ${this.age}`)
  }
}

module.exports = Person;