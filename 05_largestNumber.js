//* Return Largest Numbers in Arrays

//? Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function confirmEnding(str, target) {
  let endsWith = str.substr(-target.length);
  if (endsWith === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
