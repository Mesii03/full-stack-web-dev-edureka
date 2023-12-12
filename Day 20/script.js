const newString = "Let's slice this string.";
let sliceString = newString.slice(6, -13);
console.log(sliceString);

let text = "Today is a dummy day.";
const newtext = text.replace("dummy", "great");
console.log(newtext);

let capitaltext = newtext.toUpperCase();
console.log(capitaltext);

var string_1 = "Welcome to Veranda.";
var string_2 = "Today is a great day. ";
console.log(string_2.concat(string_1));
/*
var newstring = string_2.concat(string_1);
console.log(newstring);
*/

var string_3 =
  "    Lorem ipsum dolor, sit amet consectetur Repudiandae, et nesciunt!     ";
console.log(string_3.trim());
