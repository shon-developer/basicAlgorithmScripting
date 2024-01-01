//* Truncate a String

//? Truncate a string (first argument) if it is longer than the given maximum string length (second arguments). Return the truncated string with a ... ending

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  }
  return str.slice(0, num) + "...";
}

console.log(truncateString("A-ticket a-tasket a green and yellow basket"));
