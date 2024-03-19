//5. Write a program that calculates the sum of a given number 10 using a do-while loop for numbers less than 10

let n = 10;
let sum = 0;

do {
  sum += n;
  n++;
} while (n < 10);

console.log(`The sum of ${n - 1} and 10 is ${sum}.`);