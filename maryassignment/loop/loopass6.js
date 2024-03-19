//Write a program that calculates the average of a set of numbers entered by the user using a do-while loop.

let sum = 0;
let count = 0;

do {
  number = null;
  if (number >= 0) {
    sum += number;
    count++;
  }
} while (number >= 0);

if (count > 0) {
  const average = sum / count;
  console.log(`The average of the entered numbers is: ${average}`);
} else {
  console.log("No valid numbers entered. Program has ended.");
}