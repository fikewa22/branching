//Create a function that takes a  string as an argument and returns a new string with all the strings capitalized. 

function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}
// Example usage:
let inputString = "hello world, how are you?";
let capitalizedResult = capitalizeWords(inputString);
console.log(capitalizedResult);