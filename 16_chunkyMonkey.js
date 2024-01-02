//* Chunky Monkey

//? Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

let chunkyMonkey = (arr, size) => {
  let newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
};

console.log(chunkyMonkey([1, 2, 3, 4, 5, 6], 2));
