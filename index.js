/**
 * string methods
 */
const GREETINGS = "Welcome to Credoz React Session";
//Welcome to Cred...
//Rose
const FLOWERS = "Rose";
const statement = "dinesh|34342313243|React|Professional";
//concat return sum values
const returnValue = FLOWERS.concat(" ", "Lilly", " Lotus");
const templateliteral = `template literal is ${FLOWERS} Lilly Lotus`;
console.log(FLOWERS, returnValue, templateliteral);
console.log(FLOWERS + " Jasmine");

//slice(start) , slice(start,endINdex) return cut values
console.log(GREETINGS.slice(11));
document.write(GREETINGS);
//split - return array
console.log(GREETINGS.split(" "));
console.log(statement.split("|"));
//includes -- return true/false
console.log(GREETINGS.includes("React"));
//indexOf - return index value number
const indexReact = GREETINGS.indexOf("React");
console.log(GREETINGS.slice(indexReact));
console.log(GREETINGS.indexOf("o", 5));

//at = return value based on index
console.log(GREETINGS.at(290));

//pad --prefix/surfix add placholder

const acct = "908937483";
console.log(acct.padStart(15, 0));
//xxxxxxxx483
const acctLength = acct.length;
var maskacc = "";
for (let i = 0; i < acctLength - 3; i++) {
  maskacc += "x";
}
const last_three_digit = acct.slice(acctLength - 3);
console.log(maskacc + last_three_digit);
var myAadhar = "1234 5667 8901 1235";
//XXXX XXXX XXXX 1235

// const arr = myAadhar.split(" ");
// var result = "";
// for (let i = 0; i < arr.length; i++) {
//   if (i == arr.length - 1) {
//     result += arr[i] + " ";
//   } else {
//     result += Array(arr[i].length).fill("x").join("") + " ";
//   }
// }
// console.log(result);
