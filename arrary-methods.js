/**
 * array -> colletion of values (any data type)
 */

/**
 * create a array
 */
const fruits = ["🍇"]; //literal way
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
console.log(fruits.concat(emp));
console.log(fruits.join("joining with"));
console.log(fruits.toString());
