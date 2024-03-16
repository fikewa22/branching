
// Write a program that calculates the sum of all the multiples of 3 from 1 to 100 using a for loop.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    sum += i;
  }
}

console.log(`The sum of all the multiples of 3 from 1 to 100 is ${sum}.`);