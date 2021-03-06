const input = require('readline-sync');

let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.
let str = protoArray1;
//input.question();
if(str.includes(", ")){
  console.log("includes comma space");
  let temp = str;
  temp = temp.split(", ");
  temp = temp.reverse();
  temp = temp.join(",");

}else if (str.includes(",")){
  console.log("includes comma");
  let temp = str;
  temp = temp.split(",");
  temp = temp.reverse();
  temp = temp.join(",");
  temp = str; 

}else if(str.includes(";")){
  console.log("includes semicolon");
  let temp = str;
  temp = temp.split(";");
  temp = temp.sort();
  temp = temp.join(";")
  str = temp;

}else if (str.includes(" ")){
  console.log("includes spaces");
  let temp = str;
  temp = temp.split(" ");
  temp = temp.sort();
  temp = temp.reverse();
  temp = temp.join(" ");
  str = temp;
}else{
  console.log("Something else");
}

//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.



//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
