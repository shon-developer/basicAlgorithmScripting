//* Title Case a Sentence

//? Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case. For this purpose of this exercise, you should also capitalize connecting words like the and of.

/*
let myJob = "deveLOPer";

// convert myJob into title case

let firstLetter = myJob.slice(0, 1).toUpperCase();
let restOfTheLetters = myJob.slice(1, myJob.length).toLowerCase();
myJob = firstLetter + restOfTheLetters;
console.log(myJob);
*/

// let myName = "shoN lEo";
// myName = myName.split(" ");
// let arr = [];
// for (let i = 0; i < myName.length; i++) {
//   let firstLetter = myName[i].slice(0, 1).toUpperCase();
//   let restOfTheLetters = myName[i].slice(1, myName[i].length).toLowerCase();
//   console.log(firstLetter + restOfTheLetters);
//   arr.push(firstLetter + restOfTheLetters);
// }

// console.log(arr.join(" "));

function titleCase(str) {
  str = str.split(" ");
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let firstLetter = str[i].slice(0, 1).toUpperCase();
    let restOfTheLetters = str[i].slice(1, str[i].length).toLowerCase();
    arr.push(firstLetter + restOfTheLetters);
  }
  return arr.join(" ");
}
console.log(titleCase("I'm a little tea pot"));
