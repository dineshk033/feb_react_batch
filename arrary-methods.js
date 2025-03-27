/**
 * array -> colletion of values (any data type)
 */

/**
 * create a array
 */
const fruits = ["🍇", "🍎", "🍒", "🍌"]; //literal way
const list = Array(5); //constructor way

/**
 * type - isArray
 */
console.log(Array.isArray(fruits));
// 🍇
// 🍈
// 🍉
// 🍊
// 🍋

console.log(fruits.length);
//push -append to end of list
fruits.push("🍉");
fruits.push(122);
// fruits.push([1, 23, 4]);
console.log(fruits);
// delete fruits[2];
console.log(fruits);
//pop - delete last index value
console.log(fruits.pop());
fruits.push("🍋");
console.log(fruits[10]);

const emp = [51822, "Mr.xx", 34343243, "12 years"];
console.log(emp[0]);
const [id, name, ...others] = emp;
console.log(id, name, others);
console.log([...fruits, ...emp]);
console.log([].concat(emp, [1, 3], fruits));
console.log(fruits.join("joining with"));
console.log(fruits.toString());
const months = ["Jan", "March", "April", "June"];
months.splice(2, 0, "FEB", 1, 23, 45, 435);
console.log(months);

const employee = [{ id: 1, name: "MR." }];
const duplicate = JSON.parse(JSON.stringify(employee));
duplicate[0].id = 23;
console.log(employee[0].id, duplicate[0].id);
//Reference
//https://aalonso.dev/blog/2022/javascript-array-methods-explained-with-examples
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

const a = function (a, b) {
  console.log(a, b);
};

a(9, 0);
//IIF immediate INvoke function
(function (a, b) {
  console.log(a, b);
})(4);

function getName(a, b = 2) {
  console.log(a, b);
  return months.slice(a, b);
}

console.log(getName(1, 3));
console.log(getName(0));

//arrow function
const getMonth = (a, b) => {
  return months.slice(a, b);
};
console.log(getMonth(1, 3));
console.log(fruits);
const result = fruits.filter(function (fruit) {
  console.log(fruits);
  return fruit !== "🍌";
});
// const ar = fruits.filter((fruit) => fruit !== "🍋");
const ar = fruits.filter((item) => {
  return item !== "🍋";
});
console.log(result, ar, months);
//1,2,3,4,...10
//return 1,2,3,4,5
console.log(months.find((item) => item === "Dec"));
console.log(months.find((item) => item === "April"));
console.log(months.includes("April"));
console.log(months.findIndex((item) => item === "23April"));

for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}
months.forEach((item) => {
  console.log(item);
});
const resMap = months.map((value, idx) => `${value} indx is ${idx}`);
// console.log(resMap);
