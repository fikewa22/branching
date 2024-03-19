// // Write a function that takes two numbers as arguments and returns their sum. 
// function sum(a,b){
//     console.log(a+b);
// }

// sum(6,5);

// // Create a function that takes 5 numbers as an argument and returns the largest number in the array.
// function Largest(a,b,c,d,e){
//     return Math.max(a,b,c,d,e);
//   }
//   const largestNumber = Largest(2,4,6,8,15);
//   console.log(largestNumber);

// // Write a function that takes a number as an argument and checks if it is prime (returns true if it is, false otherwise).
// function isPrime(num){
//     if (num<=1){
//         return false;
//     }
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//           if (num % i === 0) {
//             return false;
//           }
//         }
//         return true;
//       }
//  const answer = isPrime(17);
//  console.log(answer);
// // Create a function that takes a  string as an argument and returns a new string with all the strings capitalized.
//  function newString(oldString){
//         return oldString.toUpperCase();
//       }

//       let oldString = "stephen";
//       let newCapitalString = newString(oldString);
//       console.log(newCapitalString);

// // Create a function that takes 5 numbers as an argument and returns the sum of all the even numbers in the argument or return 0 if there are no even number
// function evenAddition(num1, num2, num3, num4, num5) {
//     let sum = 0;

//     if (num1 % 2 === 0) {
//         sum += num1;
//     }
//     if (num2 % 2 === 0) {
//         sum += num2;
//     }
//     if (num3 % 2 === 0) {
//         sum += num3;
//     }
//     if (num4 % 2 === 0) {
//         sum += num4;
//     }
//     if (num5 % 2 === 0) {
//         sum += num5;
//     }

//     return sum;
// }

// const result = evenAddition(5, 8, 15, 20, 40);
// console.log(result);


// Write a function that takes a string as an argument and counts the number of occurrences of a specific character in the string.
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

let inputString = "simple table";
let character = "l";
let result = countOccurrences(inputString, character);
console.log(`'${character}' occurs ${result} times`);

// // Write a function that takes a string as an argument and returns the reversed version of the string.








