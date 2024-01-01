//* Falsy Bouncer

//? Remove all falsy values from an array. Return a new array; do not mutate the original array.

/*
* falsy values
? false
? ""
? null
? NaN
? undefined
? 0
*/

function bouncer(arr) {
  let newArr = [];
  arr.forEach((item) => {
    if (item) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
