const person = {
  name: "MR.xx",
  age: 23,
  skills: ["C++", "Java"],
  address: { street: "sastha nagar", city: "chennai" },
  getFullName: function () {
    return this.name + "...";
  },
};
// console.log(person[0]);
const key = "skills";
const keyInput = "afea"; //prompt("enter key");
const valueINput = "12"; // prompt("enter value");
//dot,square
console.log(person.age);
console.log(person[key]);
console.log(person["name"]);
person.hobbies = ["reading", "movies"];
person[keyInput] = valueINput;
console.log(person);
const { age, ...others } = person;
const person1 = { ...person };
person1.name = "React";
console.log(others, person, person1);
console.log({ ...person, animal: "test", ...person1 });
console.log("employeeid" in person);
console.log("name" in person);
console.log(person.hasOwnProperty("namase"));

console.log(Object.keys(person));
console.log(Object.entries(person));
const obj = {};
const vote = ["a", "c", "b", "a", "b", "c", "d"];

// {a:2,c:2,b:2,d:1}

// function Employee(name, id, address) {
//   this.name = name;
//   this.id = id;
//   this.address = address;
// }

// console.log(new Employee("mr.xx", 23, "chennai"));
// console.log(new Employee("mr.yy", 23, "chennai"));
